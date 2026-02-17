const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const fs = require('fs');

// ── Persistence paths ──
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
const DATA_FILE = path.join(DATA_DIR, 'changes.json');
const DOCS_FILE = path.join(DATA_DIR, 'documents.json');

// Ensure upload directory exists
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

function loadData() {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify({ changelog: [], overrides: {} }));
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return { changelog: [], overrides: {} };
  }
}

function saveData(data) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// ── Document persistence ──
function loadDocuments() {
  try {
    if (!fs.existsSync(DOCS_FILE)) fs.writeFileSync(DOCS_FILE, JSON.stringify({ documents: [] }));
    return JSON.parse(fs.readFileSync(DOCS_FILE, 'utf8'));
  } catch {
    return { documents: [] };
  }
}

function saveDocuments(docs) {
  fs.writeFileSync(DOCS_FILE, JSON.stringify(docs, null, 2));
}

// ── Override rebuild logic ──
// Rebuilds overrides from changelog, skipping entries whose documentId belongs to an excluded document
function rebuildOverrides(changelog, documents) {
  const excludedDocIds = new Set(
    documents.filter(d => !d.included).map(d => d.id)
  );
  const overrides = {};
  for (const entry of changelog) {
    if (entry.documentId && excludedDocIds.has(entry.documentId)) continue;
    const key = `${entry.nodeId}::${entry.company}`;
    overrides[key] = { score: entry.newScore, rationale: entry.newRationale };
  }
  return overrides;
}

// ── Multer config for PDF uploads ──
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename: (req, file, cb) => {
      const id = `doc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      req.docId = id;
      cb(null, `${id}.pdf`);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files are allowed'));
  },
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB
});

// ── API key: set via ANTHROPIC_API_KEY env var (Railway) or paste here for local use ──
const API_KEY = process.env.ANTHROPIC_API_KEY || '';
// ─────────────────────────────────────────

const app = express();
app.use(express.json({ limit: '10mb' }));

// ── Password protection ──
// Set SITE_PASSWORD env var on Railway, or leave empty to disable
const SITE_PASSWORD = process.env.SITE_PASSWORD || '';

if (SITE_PASSWORD) {
  app.use((req, res, next) => {
    const auth = req.headers.authorization;
    if (auth) {
      const [, encoded] = auth.split(' ');
      const [, password] = Buffer.from(encoded, 'base64').toString().split(':');
      if (password === SITE_PASSWORD) return next();
    }
    res.set('WWW-Authenticate', 'Basic realm="Snigel Marknadspositioneringsverktyg"');
    res.status(401).send('Access denied');
  });
}

app.use(express.static(path.join(__dirname, 'public')));

const anthropic = new Anthropic(API_KEY ? { apiKey: API_KEY } : undefined);

// ── Score change API endpoints ──
app.get('/api/changes', (req, res) => {
  res.json(loadData());
});

app.post('/api/changes', (req, res) => {
  const entry = req.body;
  const data = loadData();
  data.changelog.push(entry);
  const key = `${entry.nodeId}::${entry.company}`;
  data.overrides[key] = { score: entry.newScore, rationale: entry.newRationale };
  saveData(data);
  res.json(data);
});

app.delete('/api/changes/:index', (req, res) => {
  const idx = parseInt(req.params.index, 10);
  const data = loadData();
  if (idx < 0 || idx >= data.changelog.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }
  data.changelog.splice(idx, 1);
  const docs = loadDocuments();
  data.overrides = rebuildOverrides(data.changelog, docs.documents);
  saveData(data);
  res.json(data);
});

app.post('/api/changes/reset', (req, res) => {
  const data = { changelog: [], overrides: {} };
  saveData(data);
  res.json(data);
});

// ── Document API endpoints ──
app.get('/api/documents', (req, res) => {
  res.json(loadDocuments());
});

app.post('/api/documents/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No PDF file provided' });

    const docId = req.docId;
    const pdfPath = path.join(UPLOADS_DIR, `${docId}.pdf`);

    // Extract text from PDF
    const pdfBuffer = fs.readFileSync(pdfPath);
    let extractedText = '';
    try {
      const pdfData = await pdfParse(pdfBuffer);
      extractedText = pdfData.text;
    } catch (e) {
      console.error('PDF parse error:', e.message);
    }

    const doc = {
      id: docId,
      filename: req.file.originalname,
      uploadedAt: new Date().toISOString(),
      included: true,
      status: 'uploaded',
      extractedText: extractedText.slice(0, 100000), // cap stored text
      suggestions: []
    };

    const docs = loadDocuments();
    docs.documents.push(doc);
    saveDocuments(docs);

    // Return doc without the full extracted text to keep response small
    const { extractedText: _, ...docMeta } = doc;
    res.json(docMeta);
  } catch (error) {
    console.error('Upload error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/documents/:id/analyze', async (req, res) => {
  try {
    const docs = loadDocuments();
    const doc = docs.documents.find(d => d.id === req.params.id);
    if (!doc) return res.status(404).json({ error: 'Document not found' });

    const { leafNodes } = req.body;
    if (!leafNodes || !leafNodes.length) {
      return res.status(400).json({ error: 'leafNodes array required' });
    }

    doc.status = 'analyzing';
    saveDocuments(docs);

    // Build analysis prompt
    const docText = (doc.extractedText || '').slice(0, 50000);
    const criteriaJson = JSON.stringify(leafNodes, null, 2);

    const analysisPrompt = `Du analyserar ett dokument mot ett ramverk för marknadspositionering inom europeisk försvarsutrustning.
Nedan är extraherad text från "${doc.filename}".

<document>
${docText}
</document>

Nedan finns bladnivå-kriterier i beslutsträdet. För varje kriterium där dokumentet
innehåller relevant information, föreslå uppdaterade poäng för ett eller flera företag.

<criteria>
${criteriaJson}
</criteria>

Företag: Snigel (snigel), NFM Group (nfm), Sacci AB (sacci), PTD Group (ptd), Savotta (savotta), Taiga AB (taiga), Lindnerhof (lindnerhof), Mehler Systems (mehler), Tasmanian Tiger (tt), Equipnor (equipnor)

Svara med ENBART en JSON-array av förslag:
[{
  "nodeId": "prod-barsystem-bredd",
  "company": "snigel",
  "suggestedScore": 9.5,
  "rationale": "Kort motivering baserad på dokumentbevis",
  "confidence": "high|medium|low",
  "excerpt": "Relevant citat eller sidreferens från dokumentet"
}]

Inkludera bara noder/företag där dokumentet ger meningsfullt bevis.
Föreslå inte poäng där dokumentet är tyst eller irrelevant.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8192,
      messages: [{ role: 'user', content: analysisPrompt }]
    });

    const responseText = response.content[0].text;

    // Parse JSON from response (handle markdown code blocks)
    let suggestions = [];
    try {
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        suggestions = JSON.parse(jsonMatch[0]);
      }
    } catch (e) {
      console.error('Failed to parse AI suggestions:', e.message);
      doc.status = 'error';
      saveDocuments(docs);
      return res.status(500).json({ error: 'Failed to parse AI response' });
    }

    doc.suggestions = suggestions;
    doc.status = 'analyzed';
    saveDocuments(docs);

    res.json({ id: doc.id, status: doc.status, suggestions: doc.suggestions });
  } catch (error) {
    console.error('Analysis error:', error.message);
    // Update status to error
    const docs = loadDocuments();
    const doc = docs.documents.find(d => d.id === req.params.id);
    if (doc) { doc.status = 'error'; saveDocuments(docs); }
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/documents/:id', (req, res) => {
  const docs = loadDocuments();
  const doc = docs.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });

  if (req.body.included !== undefined) {
    doc.included = req.body.included;
  }
  saveDocuments(docs);

  // Rebuild overrides with updated inclusion state
  const data = loadData();
  data.overrides = rebuildOverrides(data.changelog, docs.documents);
  saveData(data);

  res.json({ document: { id: doc.id, included: doc.included }, changes: data });
});

app.delete('/api/documents/:id', (req, res) => {
  const docs = loadDocuments();
  const docIndex = docs.documents.findIndex(d => d.id === req.params.id);
  if (docIndex === -1) return res.status(404).json({ error: 'Document not found' });

  const docId = docs.documents[docIndex].id;
  docs.documents.splice(docIndex, 1);
  saveDocuments(docs);

  // Remove uploaded PDF file
  const pdfPath = path.join(UPLOADS_DIR, `${docId}.pdf`);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);

  // Remove changelog entries from this document and rebuild overrides
  const data = loadData();
  data.changelog = data.changelog.filter(e => e.documentId !== docId);
  data.overrides = rebuildOverrides(data.changelog, docs.documents);
  saveData(data);

  res.json({ documents: docs, changes: data });
});

// ── Scenario Analysis endpoint ──
app.post('/api/scenarios/analyze', async (req, res) => {
  try {
    const { scenario, leafNodes } = req.body;
    if (!scenario || !leafNodes || !leafNodes.length) {
      return res.status(400).json({ error: 'scenario and leafNodes array required' });
    }

    const criteriaJson = JSON.stringify(leafNodes, null, 2);

    const analysisPrompt = `Du analyserar ett hypotetiskt scenario för Snigels marknadspositionering inom europeisk försvarsutrustning.

<scenario>
${scenario}
</scenario>

Nedan finns bladnivå-kriterier med aktuella poäng.

<criteria>
${criteriaJson}
</criteria>

Företag: Snigel (snigel), NFM Group (nfm), Sacci AB (sacci), PTD Group (ptd), Savotta (savotta), Taiga AB (taiga), Lindnerhof (lindnerhof), Mehler Systems (mehler), Tasmanian Tiger (tt), Equipnor (equipnor)

Givet detta scenario, föreslå hur poängen skulle förändras. Svara med ENBART en JSON-array:
[{
  "nodeId": "...",
  "company": "...",
  "suggestedScore": 9.5,
  "rationale": "Kort motivering",
  "confidence": "high|medium|low"
}]

Inkludera bara noder/företag där scenariot meningsfullt påverkar poängen.
Upprepa inte oförändrade poäng.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8192,
      messages: [{ role: 'user', content: analysisPrompt }]
    });

    const responseText = response.content[0].text;

    let suggestions = [];
    try {
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        suggestions = JSON.parse(jsonMatch[0]);
      }
    } catch (e) {
      console.error('Failed to parse scenario suggestions:', e.message);
      return res.status(500).json({ error: 'Failed to parse AI response' });
    }

    res.json({ suggestions });
  } catch (error) {
    console.error('Scenario analysis error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const SYSTEM_PROMPT = `Du är en expertanalytiker specialiserad på europeiska försvarsmarknader, taktisk utrustningsindustri, militära upphandlingsprocesser och konkurrensanalys. Du har djup kunskap om Snigel Design AB och det taktiska militärutrustningslandskapet.

Nyckelkontext:
- Snigel Design AB är ett svenskt företag som tillverkar taktisk militärutrustning inklusive modulära bärsystem, taktisk klädsel och skyddsutrustning
- Grundat 1990 av Per-Henrik Magnusson, f.d. fallskärmsjägare med M.F.A. i industriell design
- Omsättning ~365 MSEK (2024), ~25 anställda, HQ i Farsta
- 2025: eEquity-ledd investering, investerargruppen äger ca 50% — fokus internationalisering
- Nyckelmarknader: Sverige (hemmamarknad), Norden, Tyskland, expanderande i EU

Nyckelkonkurrenter:
1. NFM Group (Norge) — Multisystem (THOR/SKJOLD/GARM), 3400+ anst, 243 MEUR, förvärvade Paul Boyé 2025
2. Sacci AB (Sverige) — Bärsystem/medicinsk, Haglöfs-arv, Borlänge, ~150 MSEK
3. PTD Group (Danmark) — Systemintegratör, "house of agencies", 250+ partners
4. Savotta (Finland) — Dual-use bärsystem, AQAP/NATO CAGE, M23-ramavtal 37 MEUR
5. Taiga AB (Sverige) — Arbetskläder/uniformer, Varberg, materialinnovation TMTP/TCIP
6. Lindnerhof Taktik (Tyskland) — Premium taktisk gear, del av Mehler Systems-gruppen
7. Mehler Systems (Tyskland) — Integrerad koncern (Mehler Protection+Lindnerhof+UF PRO), 1600+ anst
8. Tasmanian Tiger (Tyskland) — Tatonka-gruppen, Open Factory Vietnam, global dealer-distribution
9. Equipnor AB (Sverige/Norge) — NFM-division, myndighetsfokuserad systemleverantör

Sju analysepelare: Produktportfölj, Produktionskapacitet, Certifieringar, Marknadsposition, Innovation, Finansiell Styrka, Varumärke

Svara alltid på svenska. Var specifik, analytisk och referera till verkliga marknadsdynamiker. När du föreslår förbättringar eller strategiska åtgärder, var konkret och handlingsinriktad.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, context } = req.body;

    const systemMessage = SYSTEM_PROMPT + (context ? `\n\nCurrent context: ${context}` : '');

    const response = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 16384,
      system: systemMessage,
      messages: messages
    });

    res.json({
      content: response.content[0].text
    });
  } catch (error) {
    console.error('API Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`\n  Snigel Marknadspositioneringsverktyg körs på http://localhost:${PORT}\n`);
});

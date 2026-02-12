const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');
const fs = require('fs');

// ── Score persistence (JSON file) ──
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'changes.json');

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
    res.set('WWW-Authenticate', 'Basic realm="Luleå-Class Decision Tool"');
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
  // Recalculate overrides from remaining entries
  data.overrides = {};
  for (const entry of data.changelog) {
    const key = `${entry.nodeId}::${entry.company}`;
    data.overrides[key] = { score: entry.newScore, rationale: entry.newRationale };
  }
  saveData(data);
  res.json(data);
});

app.post('/api/changes/reset', (req, res) => {
  const data = { changelog: [], overrides: {} };
  saveData(data);
  res.json(data);
});

const SYSTEM_PROMPT = `You are an expert analyst specializing in European naval procurement, Swedish defence policy, and military shipbuilding. You have deep knowledge of the Swedish Luleå-class surface combatant procurement programme.

Key context:
- Sweden is procuring four Luleå-class frigates (>120m, 3,000-4,650t displacement)
- Programme value: SEK 40-60 billion
- Timeline: Contract H1 2026, first two ships by 2030, all four by 2035
- Shifted from domestic "Visby Gen 2" to "catalogue ship" (off-the-shelf) approach
- Strong emphasis on NATO IAMD contribution, air defence, ASW, endurance
- FMV oversees procurement; Defence Minister Pål Jonson is key political figure

Three candidates:
1. Naval Group (France) - FDI frigate (~4,500t, Sea Fire 500 radar, Sylver A50 VLS/Aster 30, lead ship Amiral Ronarc'h in service Oct 2025)
2. Babcock with Saab (UK/Sweden) - Arrowhead 120 variant (~4,650t, Giraffe radars, Saab 9LV CMS, steel hull + composite superstructure, ~80 crew)
3. Navantia (Spain) - ALFA 4000 light frigate (~4,000t, designed for NATO force structures, national combat system integration)

Evaluation pillars (estimated weights): Capability 35%, Delivery/Schedule Risk 30%, Lifecycle Cost 20%, Industrial/Security-of-Supply 15%

Be specific, analytical, and reference real programme details. When suggesting improvements or actions, be concrete and actionable. When debating scores, present evidence-based arguments.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, context } = req.body;

    const systemMessage = SYSTEM_PROMPT + (context ? `\n\nCurrent context: ${context}` : '');

    const response = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 2048,
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
  console.log(`\n  Luleå-Class Decision Tool running at http://localhost:${PORT}\n`);
});

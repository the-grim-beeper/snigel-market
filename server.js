const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

// ── API key: set via ANTHROPIC_API_KEY env var (Railway) or paste here for local use ──
const API_KEY = process.env.ANTHROPIC_API_KEY || '';
// ─────────────────────────────────────────

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const anthropic = new Anthropic(API_KEY ? { apiKey: API_KEY } : undefined);

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

# Snigel Marknadspositioneringsverktyg — Implementeringsplan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformera det befintliga lulea-decision-tool till ett svenskspråkigt marknadspositioneringsverktyg för Snigel Design AB med ny datamodell baserad på konkurrentanalys-PDFer.

**Architecture:** Bygg vidare på befintlig Express + vanilla JS-arkitektur. Byt ut DECISION_TREE, COMPANIES, SCENARIOS, PERSONAS med svenska data baserade på PDF-analyserna. Översätt alla UI-texter till svenska. Uppdatera AI-systemprompt med svensk branschkontext.

**Tech Stack:** Node.js/Express, vanilla JavaScript, Claude API (Anthropic SDK), CSS3

---

### Task 1: Översätt index.html till svenska

**Files:**
- Modify: `public/index.html`

**Step 1: Uppdatera HTML lang och title**

Ändra `<html lang="en">` → `<html lang="sv">` och `<title>` till svenska.

**Step 2: Översätt header och navigation**

```html
<h1>Snigel Marknadspositionering</h1>
<p class="subtitle">Konkurrensanalys & Strategisk Positionering</p>
```

Nav-knappar:
- "Decision Tree" → "Beslutsträd"
- "Company Profiles" → "Företagsprofiler"
- "Compare" → "Jämför"
- "Scenarios" → "Scenarion"
- "Personas" → "Personas"
- "Simulator" → "Simulator"
- "Visualizations" → "Visualiseringar"
- "Documents" → "Dokument"
- "Change Log" → "Ändringslogg"

**Step 3: Översätt placeholder-texter och modal**

- Detail panel placeholder: "Välj en analysnod" etc.
- Edit modal: "Redigera poäng", "Poäng", "Uppdaterad motivering", "Anledning till ändring *obligatorisk", "Avbryt", "Spara ändring"
- AI panel: "AI-analys", "Snigel AI-rådgivare", textarea placeholder på svenska

**Step 4: Commit**

```bash
git add public/index.html
git commit -m "feat: översätt index.html till svenska"
```

---

### Task 2: Ersätt DECISION_TREE med nytt 7-pelarträd

**Files:**
- Modify: `public/app.js:5-680` (hela DECISION_TREE-konstanten)

**Step 1: Ersätt hela DECISION_TREE**

Ny struktur med 7 pelare, svenska labels, och poäng baserade på PDF-data. Företags-IDn ändras till: `snigel`, `nfm`, `sacci`, `ptd`, `savotta`, `taiga`, `lindnerhof`, `mehler`, `tt`, `equipnor` (konsekvent utan bindestreck-format).

Root:
```javascript
const DECISION_TREE = {
  id: "root", label: "Snigel Strategisk Position", weight: "100%",
  description: "Övergripande konkurrenspositionering inom europeisk taktisk bärutrustning, skyddssystem och yrkeskläder.",
  children: [ /* 7 pelare */ ]
};
```

**Pelare 1: Produktportfölj & Systembredd (20%)**
- Bärsystem (30%) — ryggsäckar, modulära bärsystem
  - Produktbredd (50%): snigel 8.0, nfm 7.5, sacci 6.0 (bärsystem, ej full ballistik), ptd 7.5 (bred teknikportfölj), savotta 6.5 (bär/sustainment), taiga 7.0 (kläder, låg inom bär/ballistik), lindnerhof 7.0, mehler 8.5, tt 7.5, equipnor 6.0 (handels/systembredd via partners)
  - Modularitet & Systemtänk (50%): snigel 8.5, nfm 7.0, sacci 5.0, ptd 6.0, savotta 5.5, taiga 4.5, lindnerhof 8.0, mehler 7.5, tt 7.0, equipnor 5.0
- Skyddslösningar (30%) — plattbärare, ballistiska västar
  - Plattbärarkompetens (50%): snigel 8.0, nfm 8.0, sacci 5.5, ptd 5.0, savotta 5.0, taiga 3.0, lindnerhof 8.5, mehler 9.0, tt 7.0, equipnor 4.0
  - Ballistisk integration (50%): snigel 7.0, nfm 7.5, sacci 4.0, ptd 5.5, savotta 4.5, taiga 2.5, lindnerhof 8.0, mehler 9.5, tt 5.0, equipnor 3.5
- Kläder (20%) — taktiska kläder, uniformer
  - Taktiskt klädsortiment (50%): snigel 7.5, nfm 7.0, sacci 4.0, ptd 4.0, savotta 4.0, taiga 9.0, lindnerhof 5.0, mehler 7.0 (UF PRO), tt 5.5, equipnor 3.0
  - Materialinnovation kläder (50%): snigel 7.0, nfm 6.5, sacci 3.5, ptd 3.5, savotta 4.5, taiga 8.5, lindnerhof 5.0, mehler 6.5, tt 5.0, equipnor 3.0
- Tillbehör & Fickor (20%) — pouches, MOLLE-system
  - Ficksortiment (50%): snigel 7.5, nfm 7.0, sacci 6.5, ptd 5.0, savotta 7.5, taiga 4.0, lindnerhof 8.0, mehler 6.0, tt 8.5, equipnor 4.0
  - MOLLE/PALS-kompatibilitet (50%): snigel 8.0, nfm 7.5, sacci 6.0, ptd 5.0, savotta 7.0, taiga 3.5, lindnerhof 8.5, mehler 6.5, tt 8.0, equipnor 4.0

**Pelare 2: Produktionskapacitet & Supply Chain (15%)**
- Produktionsvolym & Skala (35%): snigel 5.5, nfm 7.5, sacci 5.5, ptd 3.5, savotta 5.0, taiga 5.0, lindnerhof 6.0, mehler 9.5, tt 8.5, equipnor 3.0
- Tillverkningsmodell (25%): snigel 6.5, nfm 7.5, sacci 7.0, ptd 4.0, savotta 8.0, taiga 7.0, lindnerhof 7.5, mehler 8.5, tt 7.0 (Vietnam/Mountech), equipnor 3.0
- EU-sourcing & Materialspårbarhet (25%): snigel 7.0, nfm 7.5, sacci 7.5, ptd 5.0, savotta 9.0, taiga 7.5, lindnerhof 8.0, mehler 8.0, tt 5.5, equipnor 7.0
- Skalbarhet vid stora order (15%): snigel 6.0, nfm 7.0, sacci 6.0, ptd 4.5, savotta 5.5, taiga 5.0, lindnerhof 6.5, mehler 9.0, tt 8.0, equipnor 3.0

**Pelare 3: Certifieringar & Compliance (12%)**
- ISO 9001/14001 (30%): snigel 4.0, nfm 8.5, sacci 8.5, ptd 4.0, savotta 8.0, taiga 8.5, lindnerhof 5.0, mehler 7.0, tt 6.0 (SA8000), equipnor 8.0
- Militära certifieringar AQAP/NATO CAGE (35%): snigel 4.0, nfm 6.0, sacci 5.5, ptd 3.5, savotta 8.5, taiga 4.0, lindnerhof 4.5, mehler 7.0, tt 5.0, equipnor 6.0
- Produkt-/materialtestning CE/OEKO-TEX (20%): snigel 5.0, nfm 5.0, sacci 6.0, ptd 4.0, savotta 6.5, taiga 8.5, lindnerhof 5.5, mehler 7.5, tt 7.0, equipnor 5.0
- Socialt ansvar SA8000/transparens (15%): snigel 5.0, nfm 7.5, sacci 5.0, ptd 4.0, savotta 6.0, taiga 6.0, lindnerhof 5.0, mehler 6.0, tt 8.0, equipnor 5.5

**Pelare 4: Marknadsposition & Distribution (18%)**
- Geografisk närvaro Europa (30%): snigel 6.0, nfm 7.5, sacci 5.0, ptd 6.5, savotta 5.0, taiga 5.5, lindnerhof 7.5, mehler 9.0, tt 8.5, equipnor 4.0
- Återförsäljarnätverk (25%): snigel 6.5, nfm 5.0, sacci 5.5, ptd 6.0, savotta 6.0, taiga 4.5, lindnerhof 7.0, mehler 6.0, tt 9.0, equipnor 4.5
- B2G-kontraktskapacitet (25%): snigel 7.5, nfm 7.0, sacci 6.5, ptd 7.0, savotta 7.5, taiga 6.0, lindnerhof 7.0, mehler 9.0, tt 6.5, equipnor 7.0
- B2B/B2C-kanaler (20%): snigel 7.0, nfm 4.5, sacci 5.5, ptd 4.0, savotta 7.0, taiga 5.0, lindnerhof 5.0, mehler 4.0, tt 8.5, equipnor 5.0

**Pelare 5: Innovation & Differentiering (15%)**
- Designfilosofi & Ergonomi (30%): snigel 9.0, nfm 7.0, sacci 5.5, ptd 5.0, savotta 7.0, taiga 6.5, lindnerhof 8.0, mehler 7.5, tt 6.5, equipnor 4.0
- Patent & Immateriella rättigheter (20%): snigel 7.0, nfm 6.5, sacci 4.0, ptd 4.5, savotta 5.0, taiga 6.0, lindnerhof 6.5, mehler 8.0, tt 5.0, equipnor 3.0
- Materialinnovation (25%): snigel 8.0, nfm 7.0, sacci 5.0, ptd 5.0, savotta 6.5, taiga 8.0, lindnerhof 7.0, mehler 8.0, tt 5.5, equipnor 4.0
- Kundanpassningsförmåga (25%): snigel 8.5, nfm 6.5, sacci 6.5, ptd 6.0, savotta 6.0, taiga 5.5, lindnerhof 7.5, mehler 6.5, tt 5.0, equipnor 5.5

**Pelare 6: Finansiell Styrka & Tillväxt (10%)**
- Omsättning (30%): snigel 6.0, nfm 8.5, sacci 5.0, ptd 3.5, savotta 4.0, taiga 5.0, lindnerhof 6.0, mehler 9.5, tt 8.0, equipnor 6.5
- Antal anställda (20%): snigel 4.0, nfm 8.0, sacci 4.5, ptd 3.0, savotta 5.0, taiga 4.5, lindnerhof 5.5, mehler 9.5, tt 8.0, equipnor 3.0
- Strategiska investeringar (25%): snigel 7.5, nfm 8.0, sacci 6.5, ptd 5.0, savotta 6.5, taiga 5.0, lindnerhof 6.5, mehler 8.5, tt 6.0, equipnor 5.0
- Tillväxttakt (25%): snigel 8.0, nfm 7.0, sacci 6.5, ptd 5.5, savotta 6.0, taiga 5.0, lindnerhof 6.5, mehler 7.5, tt 5.5, equipnor 6.0

**Pelare 7: Varumärke & Trovärdighet (10%)**
- Referensleveranser & Kundhistorik (35%): snigel 8.0, nfm 8.0, sacci 5.5, ptd 6.0, savotta 8.5, taiga 6.0, lindnerhof 7.5, mehler 8.5, tt 7.0, equipnor 5.5
- Hållbarhetsprofil (25%): snigel 6.5, nfm 8.0, sacci 5.0, ptd 5.0, savotta 8.0, taiga 7.0, lindnerhof 5.5, mehler 6.5, tt 7.5, equipnor 6.0
- Pristransparens (20%): snigel 7.0, nfm 3.5, sacci 3.5, ptd 3.0, savotta 7.0, taiga 3.5, lindnerhof 3.5, mehler 3.0, tt 8.5, equipnor 3.5
- Branschrykte (20%): snigel 7.5, nfm 8.0, sacci 5.5, ptd 5.5, savotta 8.0, taiga 6.5, lindnerhof 8.0, mehler 8.0, tt 7.5, equipnor 5.0

Alla `rationale`-texter ska vara på svenska och baserade på PDF-innehållet.

**Step 2: Commit**

```bash
git add public/app.js
git commit -m "feat: ersätt beslutsträd med 7-pelar svensk modell baserad på konkurrentanalys"
```

---

### Task 3: Ersätt COMPANIES med svenska företagsprofiler

**Files:**
- Modify: `public/app.js:682-733` (COMPANIES-konstanten)

**Step 1: Uppdatera alla företagsprofiler**

Ändra company IDs konsekvent: `ptd-group` → `ptd`, `mehler-systems` → `mehler`, `tasmanian-tiger` → `tt`.

Varje företag ska ha:
- `name`: Fullständigt namn
- `country`: Land på svenska
- `platform`: Beskrivning på svenska
- `color`: Behåll befintliga färger
- `specs`: Nyckeldata på svenska (HQ, Omsättning, Anställda, Grundat, Fokus, Säljkanal)
- `strengths`: SWOT-styrkor från PDF på svenska
- `weaknesses`: SWOT-svagheter från PDF på svenska

Data att använda per företag (från PDFerna):

**Snigel:** Farsta, ~365 MSEK (2024), ~25 anst, grundat 1990, modulära bärsystem/plattbärare/taktisk klädsel, B2G dominant + B2B/B2C. Styrkor: Stark modulär produktlogik, "system-tänk", dokumenterad kontraktsförmåga Europa. Svagheter: Begränsad certifieringstransparens, retail-/dealernärvaro Europa-tyngd.

**NFM Group:** Ski (Norge), 243 MEUR (2023), 3400+ globalt, grundat 1996, THOR/SKJOLD/GARM/GENTO/EC-PAINT. Styrkor: Multisystemportfölj, dokumenterad industriell footprint, flera produktionssiter. Svagheter: Hög komplexitet, tender-beroende, budgetvolatilitet.

**Sacci AB:** Borlänge, ~150 MSEK (2024), 25-28 anst, ursprung 1914 (Haglöfs-rötter), Sacci Pro/Partner. Styrkor: Lång kompetens bärsystem, svensk prototypkapacitet, ISO-certifiering. Svagheter: Lägre internationell exponering, prisdata ej publik.

**PTD Group:** Svenstrup (Danmark), ~11 MDKK netto, 16 anst, grundat 1985, systemintegratör. Styrkor: Projekt-/integrationsförmåga, bred teknikportfölj, dokumenterad lönsamhet. Svagheter: Begränsad jämförbarhet soft-goods, begränsad certifieringstransparens.

**Savotta:** Karstula (Finland), 14,5 MEUR (2024), ~53 anst, grundat 1955, militär/outdoor dual-use. Styrkor: Tydlig dual-use bärsystem, stark compliance (ISO/AQAP/NATO CAGE), EU-nära supply chain. Svagheter: Mindre bredd inom ballistik, regional dealer-transparens begränsad.

**Taiga AB:** Varberg, ~156 MSEK (2025), ~30 anst, grundat 1982, avancerade arbetskläder. Styrkor: Europeisk tillverkning, stark material/testinfrastruktur, ISO/CE/OEKO-TEX-orienterad compliance. Svagheter: Smalare direkt konkurrens med Snigel i bärsystem/ballistik, prisdata ej publik.

**Lindnerhof Taktik GmbH:** Lenggries (Tyskland), 57 anst, grundat 2006, modulär taktisk utrustning. Styrkor: Premium taktisk gear-specialist, stark modulär plattform, tydlig DACH-hemmaplan. Svagheter: Pris-/kapacitetsinformation mindre transparent, delvis beroende dealer-/government-processer.

**Mehler Systems:** Fulda (Tyskland), "1600+ i Europa", åtta bolag, ballistik+bärsystem+kläder. Styrkor: Industriell skala, bevisad i stora program, bred systemportfölj. Svagheter: Mindre direkt relevant som "ren" soft-goods-jämförelse, tender-beroende, programrisk cyklicitet.

**Tasmanian Tiger (Tatonka):** Dasing (Tyskland), ~1000 anst (Tatonka), grundat 1999, taktisk/outdoor gear. Styrkor: Mycket transparent tillverkningsmodell (Open Factory), SA8000-certifierad, publika priser, global dealer-logik. Svagheter: Mindre "kundspecifik systemutveckling", risk att inte vinna nationella B2G-tenders.

**Equipnor AB:** Stockholm, 337,9 MSEK (2024), ~10 anst, system-/handelsleverantör via NFM. Styrkor: Myndighetsnära kundrelationer, upphandlings-/projektkompetens, ISO-certifierad. Svagheter: Begränsad differentiering produktplattform (handels-/integratörsroll), begränsad egenprodukt.

**Step 2: Commit**

```bash
git add public/app.js
git commit -m "feat: uppdatera företagsprofiler med svenska data från konkurrentanalys"
```

---

### Task 4: Ersätt SCENARIOS och PERSONAS med svenska versioner

**Files:**
- Modify: `public/app.js:735-763` (PERSONAS och SCENARIOS)

**Step 1: Uppdatera PERSONAS**

```javascript
const PERSONAS = {
  "upphandlare": {
    name: "Upphandlaren",
    description: "Offentlig upphandlare — prioriterar certifieringar, pris, leveranssäkerhet och compliance.",
    icon: "📋",
    weights: { "cert-iso": 3, "cert-mil": 3, "prod-volym": 2, "marknad-b2g": 2, "varumarke-ref": 1 }
  },
  "operator": {
    name: "Operatören",
    description: "Slutanvändare i fält — prioriterar ergonomi, hållbarhet, modularitet och beprövad funktion.",
    icon: "🎯",
    weights: { "innov-ergo": 3, "prod-barsystem-mod": 3, "varumarke-ref": 2, "prod-skydd-platt": 2, "prod-barsystem-bredd": 1 }
  },
  "logistiker": {
    name: "Logistikern",
    description: "Försvarslogistiker — prioriterar skalbarhet, leveranstid, modularitet och underhåll.",
    icon: "📦",
    weights: { "supply-skalbar": 3, "supply-volym": 2, "prod-tillbehor-molle": 2, "supply-eu": 2, "cert-iso": 1 }
  },
  "strategisk": {
    name: "Strategisk Ledning",
    description: "Ledningsgrupp/styrelse — prioriterar marknadsstyrka, innovation, finansiell tillväxt och varumärke.",
    icon: "🏛️",
    weights: { "finans-tillvaxt": 3, "marknad-geo": 2, "innov-ergo": 2, "finans-omsattning": 2, "varumarke-rykte": 1 }
  }
};
```

Notera: `weights`-nycklarna måste matcha de nya leaf-node-IDna i Task 2.

**Step 2: Uppdatera SCENARIOS**

```javascript
const SCENARIOS = [
  {
    id: "a", label: "Scenario A",
    title: "Aggressiv Tysk Expansion — DACH-fokus",
    cssClass: "scenario-a",
    outcome: "Mehler/Lindnerhof konsoliderar DACH-regionen och expanderar norrut med storskaliga ramavtal. Snigel pressas i europeiska upphandlingar.",
    risk: "Prispress och volymnackdelar mot koncerner med vertikal integration och masstillverkning.",
    company: "mehler"
  },
  {
    id: "b", label: "Scenario B",
    title: "Nordisk Premiumkonsolidering",
    cssClass: "scenario-b",
    outcome: "Nordiska aktörer (Snigel, Savotta, Sacci, Taiga) samarbetar eller konsolideras via investerare för att skapa en paneuropeisk utmanare.",
    risk: "Kulturella skillnader och produktöverlapp kan försvåra integration. Fokusförlust i hemmamarknader.",
    company: "snigel"
  },
  {
    id: "c", label: "Scenario C",
    title: "Europeisk Upprustningsvåg 2026-2030",
    cssClass: "scenario-c",
    outcome: "Kraftigt ökade försvarsbudgetar driver efterfrågan. Reshoring och 'buy European'-policyer gynnar europeiska leverantörer.",
    risk: "Kapacitetsbrist kan gynna stora producenter. Snigel behöver snabbt skala produktion.",
    company: null
  },
  {
    id: "d", label: "Scenario D",
    title: "Nationella Upphandlingskrav ('Buy National')",
    cssClass: "scenario-d",
    outcome: "Fler länder kräver nationell produktion. Snigel gynnas i Sverige men blockeras i Tyskland/Finland.",
    risk: "Fragmentering av den europeiska marknaden. Partnerskap och lokala tillverkningsavtal krävs.",
    company: null
  },
  {
    id: "e", label: "Scenario E",
    title: "Digitaliseringsskifte — C4ISR i Bärsystem",
    cssClass: "scenario-e",
    outcome: "Integration av sensorer, kommunikation och strömförsörjning i bärsystem blir avgörande i upphandlingar.",
    risk: "Kräver teknologipartnerskap som Snigel saknar idag. PTD och Mehler har försprång.",
    company: null
  }
];
```

**Step 3: Commit**

```bash
git add public/app.js
git commit -m "feat: ersätt scenarios och personas med svenska versioner"
```

---

### Task 5: Översätt alla renderingsfunktioner i app.js till svenska

**Files:**
- Modify: `public/app.js` (renderTree, renderDetail, renderProfiles, renderCompare, renderScenarios, renderChangelog, renderDocuments, renderPersonas, renderSimulator, renderVisualizations, och alla hjälpfunktioner)

**Step 1: Sök och ersätt alla engelska UI-strängar**

Nyckelöversättningar (systematiskt genom hela filen):

```
"Score" → "Poäng"
"Rationale" → "Motivering"
"Edit" → "Redigera"
"Save" → "Spara"
"Cancel" → "Avbryt"
"Delete" → "Ta bort"
"Reset" → "Återställ"
"Upload" → "Ladda upp"
"Analyze" → "Analysera"
"Apply" → "Tillämpa"
"Suggestions" → "Förslag"
"Confidence" → "Konfidens"
"High" → "Hög"
"Medium" → "Medel"
"Low" → "Låg"
"Change" → "Ändring"
"History" → "Historik"
"No changes" → "Inga ändringar"
"Previous" → "Föregående"
"New" → "Ny"
"Document" → "Dokument"
"Status" → "Status"
"Included" → "Inkluderad"
"Excluded" → "Exkluderad"
"Scenario" → "Scenario"
"Persona" → "Persona"
"Weighted" → "Viktad"
"Overall" → "Totalt"
"Strongest" → "Starkast"
"Weakest" → "Svagast"
"Strengths" → "Styrkor"
"Weaknesses" → "Svagheter"
"Market" → "Marknad"
"Company" → "Företag"
"Compare" → "Jämför"
"Select" → "Välj"
"Select a" → "Välj en"
"strategic analysis node" → "analysnod"
"Click any node" → "Klicka på en nod"
"Reset All Changes" → "Återställ alla ändringar"
"Upload PDF" → "Ladda upp PDF"
"Analyze Document" → "Analysera dokument"
"Apply suggestion" → "Tillämpa förslag"
"Run Scenario" → "Kör scenario"
"Ask about" → "Fråga om"
"challenge a score" → "ifrågasätt en poäng"
"explore strategies" → "utforska strategier"
```

Gå igenom alla `render*`-funktioner, alla `innerHTML`-tilldelningar, och alla string-literals.

**Step 2: Uppdatera formatMarkdown-funktion**

Inga ändringar behövs — den hanterar generiskt markdown.

**Step 3: Uppdatera AI quick-actions till svenska**

I `renderQuickActions()` eller liknande — byt alla knapptexter till svenska:
- "Challenge this score" → "Ifrågasätt denna poäng"
- "Suggest improvements" → "Föreslå förbättringar"
- "Compare competitors" → "Jämför konkurrenter"
- "Market analysis" → "Marknadsanalys"

**Step 4: Commit**

```bash
git add public/app.js
git commit -m "feat: översätt alla UI-strängar i app.js till svenska"
```

---

### Task 6: Uppdatera server.js — Svensk systemprompt och AI-kontext

**Files:**
- Modify: `server.js:203-231` (analysisPrompt)
- Modify: `server.js:319-343` (scenarioPrompt)
- Modify: `server.js:371-392` (SYSTEM_PROMPT)
- Modify: `server.js:97` (WWW-Authenticate realm)
- Modify: `server.js:217` (company list i prompts)
- Modify: `server.js:331` (company list i prompts)
- Modify: `server.js:418` (console.log startup message)

**Step 1: Ersätt SYSTEM_PROMPT med svensk version**

```javascript
const SYSTEM_PROMPT = `Du är en expertanalytiker specialiserad på europeiska försvarsmarknader, taktisk utrustningsindustri, militära upphandlingsprocesser och konkurrensanalys. Du har djup kunskap om Snigel Design AB och det taktiska militärutrustningslandskapet.

Nyckelkontext:
- Snigel Design AB är ett svenskt företag som tillverkar taktisk militärutrustning inklusive modulära bärsystem, taktisk klädsel och skyddsutrustning
- Grundat 1990 av Per-Henrik Magnusson, f.d. fallskärmsjägare med M.F.A. i industriell design
- Omsättning ~365 MSEK (2024), ~25 anställda, HQ i Farsta
- 2025: eEquity-ledd investering, investerargruppen äger ca 50% — fokus internationalisering
- Nyckelmarknader: Sverige (hemmamarknad), Norden, Tyskland, expanderande i EU
- Positionerar sig för tillväxt i den accelererande europeiska upprustningen

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
```

**Step 2: Uppdatera analysisPrompt (dokument) till svenska**

Byt ut den engelska prompten i `/api/documents/:id/analyze` med en svensk version som refererar till de 7 pelarna och nya företags-IDn.

**Step 3: Uppdatera scenarioPrompt till svenska**

Byt ut den engelska prompten i `/api/scenarios/analyze` med en svensk version.

**Step 4: Uppdatera företagslista i alla prompts**

Ändra company list till: `Snigel (snigel), NFM Group (nfm), Sacci AB (sacci), PTD Group (ptd), Savotta (savotta), Taiga AB (taiga), Lindnerhof (lindnerhof), Mehler Systems (mehler), Tasmanian Tiger (tt), Equipnor (equipnor)`

**Step 5: Uppdatera startup-meddelande och WWW-Authenticate**

```javascript
// server.js:97
res.set('WWW-Authenticate', 'Basic realm="Snigel Marknadspositioneringsverktyg"');

// server.js:418
console.log(`\n  Snigel Marknadspositioneringsverktyg körs på http://localhost:${PORT}\n`);
```

**Step 6: Commit**

```bash
git add server.js
git commit -m "feat: uppdatera server med svensk systemprompt och AI-kontext"
```

---

### Task 7: Nollställ persisterad data

**Files:**
- Modify: `data/changes.json`
- Modify: `data/documents.json`

**Step 1: Rensa gammal data**

Eftersom vi ändrat företags-IDn (ptd-group → ptd, etc.) och nod-IDn fungerar inte gammal changelog-data längre. Återställ:

```json
// data/changes.json
{ "changelog": [], "overrides": {} }

// data/documents.json
{ "documents": [] }
```

**Step 2: Commit**

```bash
git add data/changes.json data/documents.json
git commit -m "chore: nollställ persisterad data för ny datamodell"
```

---

### Task 8: Verifiera och testa

**Step 1: Starta servern**

```bash
cd /Users/nicklaslundblad/lulea-decision-tool
npm start
```

**Step 2: Verifiera i webbläsare**

Testa alla vyer:
1. Beslutsträd — verifiera 7 pelare, svenska labels, korrekt poängsättning
2. Företagsprofiler — verifiera alla 10 företag med svensk data
3. Jämför — verifiera matris med korrekta poäng
4. Scenarion — verifiera 5 svenska scenarion
5. Personas — verifiera 4 svenska personas
6. Simulator — verifiera funktionalitet
7. Visualiseringar — verifiera grafer
8. Dokument — verifiera uppladdning fungerar
9. Ändringslogg — verifiera tom vid start

**Step 3: Testa poängredigering**

Redigera en poäng, verifiera:
- Modal visar svenska texter
- Spara fungerar
- Ändringsloggen visar korrekt

**Step 4: Testa AI-chatt**

Skicka ett meddelande, verifiera att:
- AI svarar på svenska
- Kontext är korrekt

**Step 5: Commit slutversion**

```bash
git add -A
git commit -m "feat: slutverifiering — Snigel marknadspositioneringsverktyg komplett"
```

---

## Beroenden

```
Task 1 (HTML) — oberoende
Task 2 (Decision Tree) — oberoende
Task 3 (Companies) — oberoende men bör koordineras med Task 2 pga ID-byten
Task 4 (Scenarios/Personas) — beror på Task 2 (leaf node IDs i weights)
Task 5 (UI-strängar) — beror delvis på Task 2/3 (vet vilka labels som finns)
Task 6 (Server) — oberoende
Task 7 (Data reset) — bör köras sist före test
Task 8 (Verifiering) — beror på allt ovan
```

Rekommenderad ordning: Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7 → Task 8

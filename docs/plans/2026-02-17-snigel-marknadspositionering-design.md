# Snigel Design Marknadspositioneringsverktyg — Designdokument

**Datum:** 2026-02-17
**Status:** Godkänd

## Sammanfattning

Transformation av det befintliga lulea-decision-tool till ett svenskspråkigt marknadspositioneringsverktyg för Snigel Design AB. Verktyget låter företaget jämföra sig mot 9 konkurrenter inom taktisk bärutrustning, skyddssystem och yrkeskläder på den europeiska marknaden.

## Ansats

Evolutionär ombyggnad — behåll befintlig arkitektur (Node.js/Express + vanilla JS) och transformera innehåll, datamodell och UI till svenska.

## Vad som ändras

1. **Hela UI:t på svenska** — menyer, labels, beskrivningar, felmeddelanden, guider
2. **Nytt beslutsträd** — 7 pelare baserade på PDF-analysernas dimensioner
3. **All konkurrentdata** — poäng och motiveringar från PDF-analyserna
4. **Företagsprofiler** — SWOT, tidslinjer, nyckeltal per företag
5. **Produktjämförelser** — ryggsäckar, plattbärare, fickor, kläder som egna undernoder
6. **Scenarion** — svenska scenarion relevanta för europeisk försvarsmarknad
7. **AI-kontext** — svensk systemprompt med branschkunskap

## Vad som bevaras

- Express backend med Claude AI-integration
- Poängredigering med motivering och ändringslogg
- Dokumentuppladdning med AI-analys
- AI-chattfunktion
- Alla 10 vyer (översatta och anpassade)
- JSON-filbaserad persistens
- Lösenordsskydd via miljövariabel

## Nytt beslutsträd

### 7 huvudpelare

| Pelare | Vikt | ID |
|--------|------|----|
| Produktportfölj & Systembredd | 20% | produktportfolj |
| Produktionskapacitet & Supply Chain | 15% | produktion |
| Certifieringar & Compliance | 12% | certifieringar |
| Marknadsposition & Distribution | 18% | marknad |
| Innovation & Differentiering | 15% | innovation |
| Finansiell Styrka & Tillväxt | 10% | finansiell |
| Varumärke & Trovärdighet | 10% | varumarke |

### Underkategorier

**Produktportfölj & Systembredd (20%)**
- Bärsystem (ryggsäckar, modulära system) — 30%
- Skyddslösningar (plattbärare, ballistik) — 30%
- Kläder (taktiska kläder, uniformer) — 20%
- Tillbehör & Fickor (pouches, MOLLE) — 20%

**Produktionskapacitet & Supply Chain (15%)**
- Produktionsvolym & Skala — 35%
- Tillverkningsmodell (egen vs. partner) — 25%
- EU-sourcing & Materialspårbarhet — 25%
- Skalbarhet vid stora order — 15%

**Certifieringar & Compliance (12%)**
- ISO 9001/14001 — 30%
- Militära certifieringar (AQAP, NATO CAGE) — 35%
- Produkt-/materialtestning (CE, OEKO-TEX) — 20%
- Socialt ansvar (SA8000, transparens) — 15%

**Marknadsposition & Distribution (18%)**
- Geografisk närvaro i Europa — 30%
- Återförsäljarnätverk — 25%
- B2G-kontraktskapacitet — 25%
- B2B/B2C-kanaler — 20%

**Innovation & Differentiering (15%)**
- Designfilosofi & Ergonomi — 30%
- Patent & Immateriella rättigheter — 20%
- Materialinnovation — 25%
- Kundanpassningsförmåga — 25%

**Finansiell Styrka & Tillväxt (10%)**
- Omsättning — 30%
- Antal anställda — 20%
- Strategiska investeringar — 25%
- Tillväxttakt — 25%

**Varumärke & Trovärdighet (10%)**
- Referensleveranser & Kundhistorik — 35%
- Hållbarhetsprofil — 25%
- Pristransparens — 20%
- Branschrykte — 20%

## 10 företag

| ID | Namn | Land | Färg |
|----|------|------|------|
| snigel | Snigel Design AB | Sverige | #4a9eff |
| nfm | NFM Group | Norge | #ff6b6b |
| sacci | Sacci AB | Sverige | #51cf66 |
| ptd | PTD Group | Danmark | #ffd43b |
| savotta | Savotta (Finn-Savotta Oy) | Finland | #20c997 |
| taiga | Taiga AB | Sverige | #cc5de8 |
| lindnerhof | Lindnerhof Taktik GmbH | Tyskland | #ff922b |
| mehler | Mehler Systems | Tyskland | #f06595 |
| tt | Tasmanian Tiger (Tatonka) | Tyskland | #845ef7 |
| equipnor | Equipnor AB | Sverige/Norge | #5c7cfa |

## Scenarion (svenska)

1. **Aggressiv tysk expansion** — Mehler/Lindnerhof konsoliderar DACH och expanderar norrut
2. **Nordisk premiumkonsolidering** — Nordiska aktörer slås samman eller samarbetar
3. **Europeisk upprustningsvåg** — Kraftigt ökade försvarsbudgetar driver efterfrågan
4. **Nationella upphandlingskrav** — "Buy national"-policies begränsar internationell handel
5. **Digitaliseringsskifte** — C4ISR-integration blir avgörande i bärsystem

## Personas (svenska)

1. **Upphandlare** — Fokus på certifieringar, pris, leveranssäkerhet
2. **Operatör** — Fokus på ergonomi, funktion, hållbarhet
3. **Logistiker** — Fokus på skalbarhet, modularitet, underhåll
4. **Strategisk ledning** — Fokus på marknadsstyrka, innovation, tillväxt

## AI-integration

Befintlig Claude-integration behålls men med:
- Svensk systemprompt med branschkontext
- Dokumentanalys som extraherar konkurrentdata på svenska
- Scenarioanalys med svenska marknadsförhållanden
- Chattfunktion med svensk terminologi

## Tekniska beslut

- **Ingen ny ramverk** — vanilla JS behålls för enkelhet
- **Samma persistensmodell** — JSON-filer i data/
- **Samma API-struktur** — Express endpoints behålls
- **Samma deployment** — Railway-kompatibelt

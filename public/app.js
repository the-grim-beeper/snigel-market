/* ═══════════════════════════════════════════════════════
   Snigel Marknadspositioneringsverktyg — Applikationslogik
   ═══════════════════════════════════════════════════════ */

let DECISION_TREE = {
  id: "root", label: "Snigel Strategisk Position", weight: "100%",
  description: "Övergripande konkurrenspositionering inom europeisk taktisk bärutrustning, skyddssystem och yrkeskläder.",
  children: [
    { id: "prod", label: "Produktportfölj & Systembredd", weight: "20%",
      description: "Bredd och djup i produkterbjudandet — bärsystem, skyddslösningar, kläder och tillbehör.",
      children: [
        { id: "prod-bar", label: "Bärsystem", weight: "30%",
          description: "Ryggsäckar och modulära bärsystem.",
          children: [
            { id: "prod-bar-bredd", label: "Produktbredd bärsystem", weight: "50%",
              description: "Sortimentsbredd inom ryggsäckar och bärlösningar.",
              scores: {
                "snigel": { score: 8.0, rationale: "Brett modulärt sortiment från 30L till 120L+, specialistpack och väst/rig-ekosystem" },
                "nfm": { score: 7.5, rationale: "THOR-systemet med flera plattformar, bra bredd men fokuserat på ballistik-integration" },
                "sacci": { score: 6.0, rationale: "Sacci Pro med bärsystem, medicinsk och taktisk men begränsad bredd" },
                "ptd": { score: 7.5, rationale: "Bred teknikportfölj via 250+ partners men ej egenutvecklat" },
                "savotta": { score: 6.5, rationale: "Robust dual-use-sortiment, militärpack och sustainment-fokus" },
                "taiga": { score: 4.0, rationale: "Primärt kläder, mycket begränsat inom bärsystem" },
                "lindnerhof": { score: 7.0, rationale: "Plate carriers, bälten och modulära pouches, bra inom taktiskt bär" },
                "mehler": { score: 8.5, rationale: "Helhetslösning via Mehler Protection+Lindnerhof+UF PRO, bredast i urvalet" },
                "tt": { score: 7.5, rationale: "Bred katalog med ryggsäckar, bags och taktisk utrustning" },
                "equipnor": { score: 6.0, rationale: "Systembredd via partners/NFM, begränsad egenproduktplattform" }
              }
            },
            { id: "prod-bar-mod", label: "Modularitet & Systemtänk", weight: "50%",
              description: "Moduläritet, konfigurabilitet och systemintegration i bärlösningar.",
              scores: {
                "snigel": { score: 8.5, rationale: "Squeeze-systemet: skalbar plattform med vest/carrier/long vest, stark systemtänk" },
                "nfm": { score: 7.0, rationale: "THOR: ultralätt skalbar plattbärare med utbytbara paneler/placard" },
                "sacci": { score: 5.0, rationale: "Pro/Partner-logik men begränsad modulär kundanpassning" },
                "ptd": { score: 6.0, rationale: "Integrationskapacitet via partnerportfölj snarare än eget modulärt system" },
                "savotta": { score: 5.5, rationale: "Del av load-carrying ekosystem men traditionell design" },
                "taiga": { score: 4.5, rationale: "Minimal modularitet i klädbaserat sortiment" },
                "lindnerhof": { score: 8.0, rationale: "Fullt modulärt MOLLE/PALS-system med plate carrier LT042/2" },
                "mehler": { score: 7.5, rationale: "Koncernnivå: ballistik+bär+kläder men komplext multi-brand-system" },
                "tt": { score: 7.0, rationale: "180° frontöppning, hook-and-loop, laser-cut MOLLE, hög modularitet" },
                "equipnor": { score: 5.0, rationale: "Begränsad egen modulär plattform, handels-/integratörsroll" }
              }
            }
          ]
        },
        { id: "prod-skydd", label: "Skyddslösningar", weight: "30%",
          description: "Plattbärare och ballistiska skyddssystem.",
          children: [
            { id: "prod-skydd-platt", label: "Plattbärarkompetens", weight: "50%",
              description: "Kapacitet inom plate carriers och skyddsvästar.",
              scores: {
                "snigel": { score: 8.0, rationale: "Squeeze vest/plate carrier med skalbart system, 850g, integrationspunkter" },
                "nfm": { score: 8.0, rationale: "THOR Plate Carrier: ultralätt, skalbar med utbytbara paneler" },
                "sacci": { score: 5.5, rationale: "Begränsad publik plattbärarportfölj i öppna källor" },
                "ptd": { score: 5.0, rationale: "Systemintegratör snarare än plattbärartillverkare" },
                "savotta": { score: 5.0, rationale: "Fokus på bärkapacitet snarare än ballistiskt skydd" },
                "taiga": { score: 3.0, rationale: "Klädfokus, ingen plattbärarproduktion" },
                "lindnerhof": { score: 8.5, rationale: "LT042/2: fullt modulärt MOLLE/PALS, MX-laminat, 750g" },
                "mehler": { score: 9.0, rationale: "Mehler Protection: industriledande ballistisk plattform" },
                "tt": { score: 7.0, rationale: "LP LC Frame: lågprofil, Tegris-förstärkt, 618g" },
                "equipnor": { score: 4.0, rationale: "Handels-/leverantörsroll, ej egentillverkning" }
              }
            },
            { id: "prod-skydd-ballistik", label: "Ballistisk integration", weight: "50%",
              description: "Förmåga att integrera ballistiskt skydd i system.",
              scores: {
                "snigel": { score: 7.0, rationale: "Kan integrera extra ballistik via yoke/sleeves i Squeeze-systemet" },
                "nfm": { score: 7.5, rationale: "SKJOLD-systemet: dedikerad ballistisk kroppsskyddslinje" },
                "sacci": { score: 4.0, rationale: "Ej primärt ballistikfokuserat i öppna källor" },
                "ptd": { score: 5.5, rationale: "Integration via partners men ej egentillverkare" },
                "savotta": { score: 4.5, rationale: "Begränsat inom ballistik, fokus robust bärsystem" },
                "taiga": { score: 2.5, rationale: "Ingen ballistikkapacitet, rena kläder/uniformer" },
                "lindnerhof": { score: 8.0, rationale: "Del av Mehler Systems-gruppen, direkt ballistikintegration" },
                "mehler": { score: 9.5, rationale: "Kärnkompetens: ballistiskt skydd med över 200 000 plattor/år" },
                "tt": { score: 5.0, rationale: "Plate carrier-fokus men ej egen ballistiktillverkning" },
                "equipnor": { score: 3.5, rationale: "Ingen egen ballistikproduktion" }
              }
            }
          ]
        },
        { id: "prod-klader", label: "Kläder", weight: "20%",
          description: "Taktiska kläder, uniformer och specialplagg.",
          children: [
            { id: "prod-klader-sort", label: "Taktiskt klädsortiment", weight: "50%",
              description: "Bredd inom taktisk och militär klädsel.",
              scores: {
                "snigel": { score: 7.5, rationale: "Combat shirt, skalplagg, termiska lager som del av helhetssystem" },
                "nfm": { score: 7.0, rationale: "GARM-linjen: combat clothing som del av systemportfölj" },
                "sacci": { score: 4.0, rationale: "Begränsat klädsortiment, fokus på bärsystem" },
                "ptd": { score: 4.0, rationale: "Ej primärt klädtillverkare" },
                "savotta": { score: 4.0, rationale: "Minimal klädproduktion, outdoor-fokus" },
                "taiga": { score: 9.0, rationale: "Kärnkompetens: uniformssystem med TMTP/TCIP-mönster för militär/polis/ambulans" },
                "lindnerhof": { score: 5.0, rationale: "Visst klädsortiment men primärt taktisk utrustning" },
                "mehler": { score: 7.0, rationale: "UF PRO: premium tactical clothing på gruppnivå" },
                "tt": { score: 5.5, rationale: "Viss klädsel i katalogen men inte kärnkompetens" },
                "equipnor": { score: 3.0, rationale: "Ej klädfokuserat" }
              }
            },
            { id: "prod-klader-material", label: "Materialinnovation kläder", weight: "50%",
              description: "Innovation inom material och textilteknologi för kläder.",
              scores: {
                "snigel": { score: 7.0, rationale: "Flamskyddade material, integrerade fickor under stridsväst" },
                "nfm": { score: 6.5, rationale: "Bra material men ej primärt kläddriven innovation" },
                "sacci": { score: 3.5, rationale: "Begränsad synlig materialinnovation i kläder" },
                "ptd": { score: 3.5, rationale: "Ej textilproducent" },
                "savotta": { score: 4.5, rationale: "Fokus tungt slitstarkt 1000D Cordura, ej klädinnovation" },
                "taiga": { score: 8.5, rationale: "Branschledande: Gore-Tex-licensierad sedan 1983, TMB-block barriärmaterial, OEKO-TEX" },
                "lindnerhof": { score: 5.0, rationale: "Standard taktiska material" },
                "mehler": { score: 6.5, rationale: "UF PRO materialinnovation, 440 000 plagg/år på gruppnivå" },
                "tt": { score: 5.0, rationale: "Standardmaterial med SA8000-certifierad tillverkning" },
                "equipnor": { score: 3.0, rationale: "Ej materialleverantör" }
              }
            }
          ]
        },
        { id: "prod-tillbehor", label: "Tillbehör & Fickor", weight: "20%",
          description: "Ficksystem, pouches och MOLLE-tillbehör.",
          children: [
            { id: "prod-tillbehor-fickor", label: "Ficksortiment", weight: "50%",
              description: "Bredd och kvalitet i pouches/fickportföljen.",
              scores: {
                "snigel": { score: 7.5, rationale: "Carrier pouches med MOLLE, integreras på plattbärare/strap on-system" },
                "nfm": { score: 7.0, rationale: "Fickor inom THOR-ekosystem, MOLLE/PALS-kompatibla" },
                "sacci": { score: 6.5, rationale: "Sacci Pro Tactical med medicinska och taktiska fickor" },
                "ptd": { score: 5.0, rationale: "Via partnerportfölj, ej eget ficksortiment" },
                "savotta": { score: 7.5, rationale: "PALS-kompatibla pouches, Jääkäri-ekosystem med fickor" },
                "taiga": { score: 4.0, rationale: "Minimalt ficksortiment utanför kläder" },
                "lindnerhof": { score: 8.0, rationale: "Brett pouch-ekosystem kopplat till carriers/rigs" },
                "mehler": { score: 6.0, rationale: "Pouches via Lindnerhof-brand, ej primärt koncernfokus" },
                "tt": { score: 8.5, rationale: "Stort sortiment med publika EUR-priser, brett utbud IRR-varianter" },
                "equipnor": { score: 4.0, rationale: "Handelsvaror via NFM-partners" }
              }
            },
            { id: "prod-tillbehor-molle", label: "MOLLE/PALS-kompatibilitet", weight: "50%",
              description: "MOLLE/PALS-standardefterlevnad och integration.",
              scores: {
                "snigel": { score: 8.0, rationale: "Zippers/Velcro/buckles/kabelföring, kompatibel med extra ballistik" },
                "nfm": { score: 7.5, rationale: "Laser-cut MOLLE/PALS, kompatibilitet inom THOR-linjen" },
                "sacci": { score: 6.0, rationale: "PALS och bälteskompatibelt fästsystem" },
                "ptd": { score: 5.0, rationale: "Standard MOLLE via partners" },
                "savotta": { score: 7.0, rationale: "PALS-kompatibla pouches, militärstandarder" },
                "taiga": { score: 3.5, rationale: "Minimal MOLLE-integration i klädbaserat sortiment" },
                "lindnerhof": { score: 8.5, rationale: "Brett MOLLE/PALS-system med SAPI L-kompatibilitet" },
                "mehler": { score: 6.5, rationale: "Via Lindnerhof, gruppnivå standardkompatibilitet" },
                "tt": { score: 8.0, rationale: "Tegris-ram, laser-cut MOLLE, IRR-varianter med tydlig produktfamilj" },
                "equipnor": { score: 4.0, rationale: "Via partners, ej eget MOLLE-system" }
              }
            }
          ]
        }
      ]
    },
    { id: "supply", label: "Produktionskapacitet & Supply Chain", weight: "15%",
      description: "Tillverkningsförmåga, volymkapacitet och leveranskedjans robusthet.",
      children: [
        { id: "supply-volym", label: "Produktionsvolym & Skala", weight: "35%",
          description: "Total produktionskapacitet och antal anställda som skalproxy.",
          scores: {
            "snigel": { score: 5.5, rationale: "~25 anst, kontraktsdriven med partnerproduktion, snabb kundanpassning" },
            "nfm": { score: 7.5, rationale: "1000+ anställda, produktionssiter i Lebork (8000 kvm) och Pleven (3300 kvm)" },
            "sacci": { score: 5.5, rationale: "25-28 anst, produktionsenhet Borlänge, vissa volymer via EU/Asien" },
            "ptd": { score: 3.5, rationale: "16 anst, systemintegratör snarare än volymproducent" },
            "savotta": { score: 5.0, rationale: "53 anst + 120 i Estland, tillverkning Finland/Estland" },
            "taiga": { score: 5.0, rationale: "~30 anst, europeisk tillverkning och klimatlabb vid HQ" },
            "lindnerhof": { score: 6.0, rationale: "57 anst, egna design-/sömnadsavdelningar, växande" },
            "mehler": { score: 9.5, rationale: "1600+ anst Europa, 200 000 plattor, >1,7M pouches, 440 000 plagg/år" },
            "tt": { score: 8.5, rationale: "Tatonka ~1000 anst, Mountech Co i Vietnam, hög volymkapacitet" },
            "equipnor": { score: 3.0, rationale: "~10 anst, dispatch center snarare än tillverkare" }
          }
        },
        { id: "supply-modell", label: "Tillverkningsmodell", weight: "25%",
          description: "Egen vs partner-tillverkning och produktionskontroll.",
          scores: {
            "snigel": { score: 6.5, rationale: "Designar, utvecklar och tillverkar system; viss produktion i Asien (sekundärkälla)" },
            "nfm": { score: 7.5, rationale: "Egna anläggningar i Europa med vertikal integration" },
            "sacci": { score: 7.0, rationale: "Svensk produktionsenhet Borlänge för prototyp och små serier, EU/Asien för volym" },
            "ptd": { score: 4.0, rationale: "Systemintegratör/leverantör, ej egen textilproduktion" },
            "savotta": { score: 8.0, rationale: "Huvudproduktion Finland/Estland, kontroll över hela kedjan inkl metallarbete" },
            "taiga": { score: 7.0, rationale: "Design i Sverige, tillverkning i Europa, klimatlabb vid HQ" },
            "lindnerhof": { score: 7.5, rationale: "In-house development and production, egna design- och sömnadsavdelningar" },
            "mehler": { score: 8.5, rationale: "Egna fabriker i flera EU-länder, ny hall 6200 kvm Zrenjanin" },
            "tt": { score: 7.0, rationale: "Mountech Co i Vietnam med Open Factory-transparens, SA8000-certifierad" },
            "equipnor": { score: 3.0, rationale: "Ingen egen produktion, handels-/integratörsmodell" }
          }
        },
        { id: "supply-eu", label: "EU-sourcing & Materialspårbarhet", weight: "25%",
          description: "Andel EU-producerat material och transparens i leveranskedjan.",
          scores: {
            "snigel": { score: 7.0, rationale: "Mestadels europeisk sourcing, prototyper vid HQ" },
            "nfm": { score: 7.5, rationale: "Europeiska produktionssiter, ISO 9001:2015-10 och ISO 14001:2015-09" },
            "sacci": { score: 7.5, rationale: "Svensk produktion Borlänge + EU/Asien-fabriker, ISO 9001/14001 certifikat" },
            "ptd": { score: 5.0, rationale: "Global leverantörsportfölj men begränsad transparens" },
            "savotta": { score: 9.0, rationale: "97% av material från EU, REACH-compliance, ISO 14001:2015" },
            "taiga": { score: 7.5, rationale: "Europeiska materialeverantörer, OEKO-TEX-certifierade komponenter" },
            "lindnerhof": { score: 8.0, rationale: "Europeisk produktionsbas med TÜV-certifiering" },
            "mehler": { score: 8.0, rationale: "Mestadels EU supply chain med flera produktionssiter" },
            "tt": { score: 5.5, rationale: "Vietnam-tillverkning men SA8000-certifierad, Open Factory-transparens" },
            "equipnor": { score: 7.0, rationale: "ISO 9001/14001-certifierad, europeisk leveranskedja via NFM" }
          }
        },
        { id: "supply-skalbar", label: "Skalbarhet vid stora order", weight: "15%",
          description: "Förmåga att snabbt skala produktion vid ramavtal och stororder.",
          scores: {
            "snigel": { score: 6.0, rationale: "Leverans >500 000 ryggsäckar till Bundeswehr visar historisk skalbarhet" },
            "nfm": { score: 7.0, rationale: "Kapacitet för större program via europeiska anläggningar" },
            "sacci": { score: 6.0, rationale: "Skalbar via EU/Asien-fabriker vid behov" },
            "ptd": { score: 4.5, rationale: "Liten organisation, begränsad egen skalbarhet" },
            "savotta": { score: 5.5, rationale: "M23-ramavtal 37 MEUR visar kapacitet, men relativt liten" },
            "taiga": { score: 5.0, rationale: "Medelstor organisation, begränsad stororderkapacitet" },
            "lindnerhof": { score: 6.5, rationale: "Växande kapacitet, ny lagerkapacitet 2022" },
            "mehler": { score: 9.0, rationale: "MOBAST-programmet: hundratusental, bevisad storprogramleverantör" },
            "tt": { score: 8.0, rationale: "Mountech Vietnam möjliggör hög volym vid stororder" },
            "equipnor": { score: 3.0, rationale: "Liten organisation, begränsad skalbarhet" }
          }
        }
      ]
    },
    { id: "cert", label: "Certifieringar & Compliance", weight: "12%",
      description: "Kvalitets-, miljö- och militärcertifieringar samt social standard.",
      children: [
        { id: "cert-iso", label: "ISO 9001/14001", weight: "30%",
          description: "Certifiering enligt kvalitets- och miljöledningsstandarder.",
          scores: {
            "snigel": { score: 4.0, rationale: "Inga tydliga ISO-certifikat i granskade primärkällor" },
            "nfm": { score: 8.5, rationale: "PN-EN ISO 9001:2015-10 och PN-EN ISO 14001:2015-09 explicit angivna" },
            "sacci": { score: 8.5, rationale: "SS-EN ISO 9001:2015 och SS-EN ISO 14001:2015 certifikat 2025, giltighet 2028" },
            "ptd": { score: 4.0, rationale: "Inga explicit verifierade ISO/AQAP-certifikat i öppna källor" },
            "savotta": { score: 8.0, rationale: "ISO 9001 listad, verksamhet under ISO 14001:2015" },
            "taiga": { score: 8.5, rationale: "ISO 14001-certifierad, anger även ISO 9001 och ISO 14001" },
            "lindnerhof": { score: 5.0, rationale: "TÜV-certifiering för abseilsystem men ISO ej explicit verifierad" },
            "mehler": { score: 7.0, rationale: "Delvis kontrakts-/programstyrd, ej explicit ISO-lista i granskade källor" },
            "tt": { score: 6.0, rationale: "SA8000 fokus snarare än ISO 9001, social standard kommunicerad" },
            "equipnor": { score: 8.0, rationale: "Equipnor AB anger ISO 9001:2015 och ISO 14001:2015" }
          }
        },
        { id: "cert-mil", label: "Militära certifieringar (AQAP/NATO CAGE)", weight: "35%",
          description: "Militärspecifika certifieringar och NATO-kvalificeringar.",
          scores: {
            "snigel": { score: 4.0, rationale: "Data ej tillgänglig i öppna källor, låg-medel certifieringstransparens" },
            "nfm": { score: 6.0, rationale: "SA8000-spår men explicita AQAP/NATO CAGE ej verifierade här" },
            "sacci": { score: 5.5, rationale: "ISO 9001/14001 för försvarsprodukter men AQAP ej explicit" },
            "ptd": { score: 3.5, rationale: "Inga explicit verifierade militärcertifikat i granskade källor" },
            "savotta": { score: 8.5, rationale: "ISO 9001, AQAP 2110, Facility Security Clearance, NATO CAGE-kod" },
            "taiga": { score: 4.0, rationale: "CE-testning och EN/ISO-standarder men AQAP ej angivet" },
            "lindnerhof": { score: 4.5, rationale: "Bundeswehr/GSG9-historia men AQAP ej explicit verifierad" },
            "mehler": { score: 7.0, rationale: "Testning och certifieringsskott kommunicerat men explicit lista saknas" },
            "tt": { score: 5.0, rationale: "Bundeswehr-standarder (TL 8305-0278) på produktnivå" },
            "equipnor": { score: 6.0, rationale: "Som NFM-division, SOFF-medlem 'Military Equipment'" }
          }
        },
        { id: "cert-test", label: "Produkt-/materialtestning (CE/OEKO-TEX)", weight: "20%",
          description: "Produkttestning och materialcertifieringar.",
          scores: {
            "snigel": { score: 5.0, rationale: "Produkttestning antyds men ej publikt dokumenterad" },
            "nfm": { score: 5.0, rationale: "Materialpåstående hydrofob/noiseless men certifieringsdetaljer begränsade" },
            "sacci": { score: 6.0, rationale: "ISO-certifierat kvalitetssystem täcker produkttestning" },
            "ptd": { score: 4.0, rationale: "Begränsad transparens kring produktcertifieringar" },
            "savotta": { score: 6.5, rationale: "REACH-compliance för material, AQAP 2110 kvalitetssystem" },
            "taiga": { score: 8.5, rationale: "OEKO-TEX-certifierade material, CE-testning, EN/ISO-standarder i produkt/standarddok" },
            "lindnerhof": { score: 5.5, rationale: "TÜV-certifiering för specifika produkter" },
            "mehler": { score: 7.5, rationale: "Omfattande ballistisk testning, certifieringsskott på gruppnivå" },
            "tt": { score: 7.0, rationale: "IRR-produkter med Bundeswehr-hänvisning, SA8000 på produktionsnivå" },
            "equipnor": { score: 5.0, rationale: "Via NFM-partners, begränsad egen produkttestning" }
          }
        },
        { id: "cert-social", label: "Socialt ansvar (SA8000/transparens)", weight: "15%",
          description: "Social standard, arbetsvillkor och leverantörstransparens.",
          scores: {
            "snigel": { score: 5.0, rationale: "Begränsad publik kommunikation om socialt ansvar" },
            "nfm": { score: 7.5, rationale: "Norska öppenhetsloven, SA8000-spår, Transparency Act-rapport" },
            "sacci": { score: 5.0, rationale: "Begränsad publik kommunikation" },
            "ptd": { score: 4.0, rationale: "DGNB Guld-certifierat kontor men ej SA8000" },
            "savotta": { score: 6.0, rationale: "EU-nära tillverkning men inte explicit SA8000" },
            "taiga": { score: 6.0, rationale: "OEKO-TEX signalerar viss medvetenhet" },
            "lindnerhof": { score: 5.0, rationale: "Begränsad publik transparens" },
            "mehler": { score: 6.0, rationale: "Viss certifieringskommunikation på gruppnivå" },
            "tt": { score: 8.0, rationale: "SA8000-certifierad Mountech sedan 2011, Open Factory-program" },
            "equipnor": { score: 5.5, rationale: "Via NFM Group, norsk transparenslagstiftning" }
          }
        }
      ]
    },
    { id: "marknad", label: "Marknadsposition & Distribution", weight: "18%",
      description: "Geografisk räckvidd, distributionskanaler och kontraktskapacitet.",
      children: [
        { id: "marknad-geo", label: "Geografisk närvaro Europa", weight: "30%",
          description: "Spridning och närvaro på europeiska marknader.",
          scores: {
            "snigel": { score: 6.0, rationale: "Återförsäljare i Centraleuropa/Norden, expanderande via eEquity-investering" },
            "nfm": { score: 7.5, rationale: "Kontor i 6 europeiska länder, Frankrike och Chile" },
            "sacci": { score: 5.0, rationale: "Primärt B2B/B2G-försäljning, ej full regional verifierbarhet" },
            "ptd": { score: 6.5, rationale: "Global footprint 'från Australien till Arktis', 17 danska ramavtal" },
            "savotta": { score: 5.0, rationale: "Tre finska retailers, worldwide shipping men regionalt begränsad" },
            "taiga": { score: 5.5, rationale: "Bred global kommunikation men exportmarknader ej specificerade" },
            "lindnerhof": { score: 7.5, rationale: "Störst i DACH-regionen, säljteam, online, partners, statliga kanaler" },
            "mehler": { score: 9.0, rationale: "Global närvaro 'in operational use worldwide', dotterbolag per region" },
            "tt": { score: 8.5, rationale: "Find your nearest retailer-struktur, explicit global dealer-nätverk" },
            "equipnor": { score: 4.0, rationale: "Primärt svenskt myndighetsfokus, dispatch/hub för nordiska kunder" }
          }
        },
        { id: "marknad-aterforsal", label: "Återförsäljarnätverk", weight: "25%",
          description: "Styrka i distributionsnätverk och partnerkanaler.",
          scores: {
            "snigel": { score: 6.5, rationale: "TacNGear, Terräng, Equipt i Sverige; FinnProtec, RECON, Black Shadow i Europa" },
            "nfm": { score: 5.0, rationale: "Primärt B2G/tenders, begränsad öppen dealer-lista" },
            "sacci": { score: 5.5, rationale: "Konsument-återförsäljarnät men begränsad publik lista" },
            "ptd": { score: 6.0, rationale: "250+ partners globalt i leverantörsportfölj" },
            "savotta": { score: 6.0, rationale: "Tre stora finska retailers, viss worldwide shipping" },
            "taiga": { score: 4.5, rationale: "Begränsad dealer-transparens utanför Norden" },
            "lindnerhof": { score: 7.0, rationale: "Online shop + dealer-nätverk i DACH, partners + statliga kanaler" },
            "mehler": { score: 6.0, rationale: "Primärt programbaserad distribution, ej konsumentfokus" },
            "tt": { score: 9.0, rationale: "Bredast dealer-distribution globalt, ASMC, TacNGear m.fl." },
            "equipnor": { score: 4.5, rationale: "NFM facilities som sales hub, begränsat eget nätverk" }
          }
        },
        { id: "marknad-b2g", label: "B2G-kontraktskapacitet", weight: "25%",
          description: "Förmåga att vinna och leverera offentliga kontrakt.",
          scores: {
            "snigel": { score: 7.5, rationale: "Dokumenterad kontraktsförmåga, Försvarsmakten 20+ år, Bundeswehr-leveranser" },
            "nfm": { score: 7.0, rationale: "Stark B2G/tenders med norska och NATO-kunder" },
            "sacci": { score: 6.5, rationale: "B2B/B2G med ambition accelerera försvarsindustrin" },
            "ptd": { score: 7.0, rationale: "17 danska ramavtal med försvarsmakten, myndighetsfokus" },
            "savotta": { score: 7.5, rationale: "M23-ramavtal 37 MEUR, finska försvarsmakten sedan 1960-talet" },
            "taiga": { score: 6.0, rationale: "B2G/B2B primärt militär/polis/ambulans" },
            "lindnerhof": { score: 7.0, rationale: "Bundeswehr/GSG9-historia, statliga upphandlingskanaler" },
            "mehler": { score: 9.0, rationale: "MOBAST och storskaliga program, hundratusental enheter" },
            "tt": { score: 6.5, rationale: "Institutionell försäljning men primärt dealer-fokus" },
            "equipnor": { score: 7.0, rationale: "FMV, Försvarsmakten, Polisen, Kustbevakningen, MSB som kunder" }
          }
        },
        { id: "marknad-b2b2c", label: "B2B/B2C-kanaler", weight: "20%",
          description: "Styrka i kommersiella och konsumentkanaler.",
          scores: {
            "snigel": { score: 7.0, rationale: "Egen webshop med SEK-priser, B2B industriella kunder, B2C privat" },
            "nfm": { score: 4.5, rationale: "Primärt B2G, begränsad publik prisposition" },
            "sacci": { score: 5.5, rationale: "Partner-logiken ger viss B2B, konsument via återförsäljare" },
            "ptd": { score: 4.0, rationale: "Primärt tender-/projektbaserad, ej konsumentkanal" },
            "savotta": { score: 7.0, rationale: "D2C med publika EUR-priser, Jääkäri M 229,90€" },
            "taiga": { score: 5.0, rationale: "Primärt professionell B2B/B2G" },
            "lindnerhof": { score: 5.0, rationale: "Send inquiry/find a dealer-modell, ej publik konsumentprissättning" },
            "mehler": { score: 4.0, rationale: "Tender-drivet, premium/high-end, ingen konsumentkanal" },
            "tt": { score: 8.5, rationale: "Starkast D2C: publika EUR-priser, global dealer-logik, kommersiell pricing" },
            "equipnor": { score: 5.0, rationale: "Primärt myndighetsfokuserad, ej konsumentkanal" }
          }
        }
      ]
    },
    { id: "innov", label: "Innovation & Differentiering", weight: "15%",
      description: "Designfilosofi, patent, materialinnovation och kundanpassningsförmåga.",
      children: [
        { id: "innov-ergo", label: "Designfilosofi & Ergonomi", weight: "30%",
          description: "Ergonomisk design och designfilosofisk differentiering.",
          scores: {
            "snigel": { score: 9.0, rationale: "Spoon-systemet: biomekanisk viktöverföring, polispunktsbälten, grundare = industridesigner+fallskärmsjägare" },
            "nfm": { score: 7.0, rationale: "SOF-driven design med fokus på ultralätta lösningar" },
            "sacci": { score: 5.5, rationale: "Funktionell design, Fidlock-spännen för snabböppning" },
            "ptd": { score: 5.0, rationale: "Systemintegration snarare än designdriven innovation" },
            "savotta": { score: 7.0, rationale: "Balans vikt/ergonomi, tungt slitstarkt men ej designlett" },
            "taiga": { score: 6.5, rationale: "Trelagersystem där varje plagg designat för att fungera i synergi" },
            "lindnerhof": { score: 8.0, rationale: "Quick-release LT025-patent, premium ergonomisk engineering" },
            "mehler": { score: 7.5, rationale: "ExoM-exoskelett för viktomfördelning, teknisk innovation" },
            "tt": { score: 6.5, rationale: "Solid massmarknadsergonomi, bred produktkatalog" },
            "equipnor": { score: 4.0, rationale: "Handels-/integratörsroll, ej designdriven" }
          }
        },
        { id: "innov-patent", label: "Patent & Immateriella rättigheter", weight: "20%",
          description: "Patent, designskydd och rättsliga tvister.",
          scores: {
            "snigel": { score: 7.0, rationale: "Spoon-system och Squeeze-plattformen som unika innovationer" },
            "nfm": { score: 6.5, rationale: "NFM Alpha/Omega innovativa material, rättslig tvist om GRID-design" },
            "sacci": { score: 4.0, rationale: "Begränsad synlig IP-portfölj i öppna källor" },
            "ptd": { score: 4.5, rationale: "Integrationsexpertis men begränsad IP" },
            "savotta": { score: 5.0, rationale: "Produktdesign men ej publik patentportfölj" },
            "taiga": { score: 6.0, rationale: "TMTP/TCIP-kamouflage, TMB-block barriärmaterial" },
            "lindnerhof": { score: 6.5, rationale: "LT025 quick-release patent, designinnovationer" },
            "mehler": { score: 8.0, rationale: "ExoM-exoskelett, omfattande IP i ballistik och bärsystem" },
            "tt": { score: 5.0, rationale: "Open Factory-filosofi, transparens snarare än IP-skydd" },
            "equipnor": { score: 3.0, rationale: "Ej innovationsdriven, handelsroll" }
          }
        },
        { id: "innov-material", label: "Materialinnovation", weight: "25%",
          description: "Innovation inom material, textil och skyddsteknologi.",
          scores: {
            "snigel": { score: 8.0, rationale: "Biometriska data från hundratals värnpliktiga, proprietära bärsystem" },
            "nfm": { score: 7.0, rationale: "NFM Alpha/Omega extremt lätta modulära konstruktioner" },
            "sacci": { score: 5.0, rationale: "Standard industrimaterial, ej materialinnovationsfokus" },
            "ptd": { score: 5.0, rationale: "Teknikleverantör men ej materialinnovatör" },
            "savotta": { score: 6.5, rationale: "Extremt slitstarkt material (1000D Cordura), fokus livslängd" },
            "taiga": { score: 8.0, rationale: "Gore-Tex-licensierad 1983, TMB-block 1997, OEKO-TEX, avancerad textilvetenskap" },
            "lindnerhof": { score: 7.0, rationale: "MX-laminat i plate carriers, premiumtextiler" },
            "mehler": { score: 8.0, rationale: "Ballistisk materialinnovation, ExoM, kontinuerlig R&D" },
            "tt": { score: 5.5, rationale: "Standardmaterial med Tegris-förstärkning i vissa produkter" },
            "equipnor": { score: 4.0, rationale: "Ej materialinnovatör, handelsroll" }
          }
        },
        { id: "innov-kundanpass", label: "Kundanpassningsförmåga", weight: "25%",
          description: "Förmåga att anpassa produkter efter specifika kundbehov.",
          scores: {
            "snigel": { score: 8.5, rationale: "Snabb kundanpassning, nischade bär-/skyddssystem, specialiserade uniformssystem flygvapnet" },
            "nfm": { score: 6.5, rationale: "Viss anpassning inom THOR men primärt standardportfölj" },
            "sacci": { score: 6.5, rationale: "Sacci Partner = private label/utvecklingspartner" },
            "ptd": { score: 6.0, rationale: "Feedback-loopar via 250+ partners anpassar utrustning" },
            "savotta": { score: 6.0, rationale: "Militäranpassning men primärt standardprodukter" },
            "taiga": { score: 5.5, rationale: "Professionell anpassning inom kläder men begränsad bredd" },
            "lindnerhof": { score: 7.5, rationale: "Premium kundanpassning för specialenheter" },
            "mehler": { score: 6.5, rationale: "Anpassning inom stora program men långsammare pga skala" },
            "tt": { score: 5.0, rationale: "Standardproduktfokus, ej kundspecifik systemutveckling" },
            "equipnor": { score: 5.5, rationale: "Projektkompetens att paketera systemlösningar" }
          }
        }
      ]
    },
    { id: "finans", label: "Finansiell Styrka & Tillväxt", weight: "10%",
      description: "Omsättning, investeringar och tillväxttakt.",
      children: [
        { id: "finans-omsattning", label: "Omsättning", weight: "30%",
          description: "Totala intäkter som skalproxy.",
          scores: {
            "snigel": { score: 6.0, rationale: "~365 MSEK (2024), genombrott >500 MSEK-order 2022" },
            "nfm": { score: 8.5, rationale: "243 MEUR (2023), konsoliderad koncernomsättning" },
            "sacci": { score: 5.0, rationale: "~150,6 MSEK (senaste bokslut 2024)" },
            "ptd": { score: 3.5, rationale: "Nettoomsättning 5,68 MDKK (2023/24), litet bolag" },
            "savotta": { score: 4.0, rationale: "14,5 MEUR (2024), nischaktör" },
            "taiga": { score: 5.0, rationale: "~156,6 MSEK (2025)" },
            "lindnerhof": { score: 6.0, rationale: ">10 MEUR årsintäkt (2016), växande sedan dess" },
            "mehler": { score: 9.5, rationale: "Miljardomsättning (ej publicerad exakt), åtta bolag, störst i urvalet" },
            "tt": { score: 8.0, rationale: "Tatonka ~1000 anst globalt, betydande omsättning (ej separat redovisad)" },
            "equipnor": { score: 6.5, rationale: "337,9 MSEK (2024), kraftig tillväxt" }
          }
        },
        { id: "finans-anstallda", label: "Antal anställda", weight: "20%",
          description: "Personalstyrka som skalproxy.",
          scores: {
            "snigel": { score: 4.0, rationale: "~25 anst SE-data, liten men hög omsättning/anställd" },
            "nfm": { score: 8.0, rationale: "1000+ personer i sex europeiska länder" },
            "sacci": { score: 4.5, rationale: "25-28 anst (bolagsdata)" },
            "ptd": { score: 3.0, rationale: "16 anst genomsnitt (årsredovisning)" },
            "savotta": { score: 5.0, rationale: "53 FI + 120 EE via Finder" },
            "taiga": { score: 4.5, rationale: "~30 anst (bolagsdata)" },
            "lindnerhof": { score: 5.5, rationale: "57 anst vid internationell expansion 2022" },
            "mehler": { score: 9.5, rationale: "1600+ i Europa (2025 yearly review)" },
            "tt": { score: 8.0, rationale: "Tatonka ~1000 anst worldwide" },
            "equipnor": { score: 3.0, rationale: "~10 anst (bolagsdata)" }
          }
        },
        { id: "finans-invest", label: "Strategiska investeringar", weight: "25%",
          description: "Investeringsrundor, förvärv och strategiska satsningar.",
          scores: {
            "snigel": { score: 7.5, rationale: "eEquity-investering 2025, ~50% ägarandel, fokus internationalisering" },
            "nfm": { score: 8.0, rationale: "Förvärv Paul Boyé 2025, expansion Frankrike, strategiska M&A" },
            "sacci": { score: 6.5, rationale: "Strategiskt förvärv 2025 för kapacitet och svensk andel" },
            "ptd": { score: 5.0, rationale: "Nya lokaler och Business Development Managers 2024" },
            "savotta": { score: 6.5, rationale: "Rite Ventures minoritetspost 2025, ny HQ-byggnation Karstula" },
            "taiga": { score: 5.0, rationale: "Inga publik kommunicerade strategiska investeringar" },
            "lindnerhof": { score: 6.5, rationale: "Del av Mehler Systems sedan 2017, internationell expansion" },
            "mehler": { score: 8.5, rationale: "Stilmotor SXP-förvärv 2025, ny hall Zrenjanin 6200 kvm" },
            "tt": { score: 6.0, rationale: "Open Factory-fokus snarare än extern M&A" },
            "equipnor": { score: 5.0, rationale: "Förvärv SafeNor AS 2021, NFM Group-division" }
          }
        },
        { id: "finans-tillvaxt", label: "Tillväxttakt", weight: "25%",
          description: "Historisk och förväntad omsättningstillväxt.",
          scores: {
            "snigel": { score: 8.0, rationale: "Genombrott >500 MSEK, siktar mot 1 MdSEK, kraftig tillväxtambition" },
            "nfm": { score: 7.0, rationale: "Stabil tillväxt, Paul Boyé-förvärvet accelererar" },
            "sacci": { score: 6.5, rationale: "Strategiskt förvärv och kapacitetsökning 2025" },
            "ptd": { score: 5.5, rationale: "Ökad lönsamhet enligt årsredovisning" },
            "savotta": { score: 6.0, rationale: "M23-ramavtal och Rite Ventures-investering visar tillväxtfas" },
            "taiga": { score: 5.0, rationale: "Stabil men begränsad publik tillväxtkommunikation" },
            "lindnerhof": { score: 6.5, rationale: "International expansion 2022, Mehler-synergi" },
            "mehler": { score: 7.5, rationale: "Kontinuerlig expansion, nya förvärv, produktionsökning" },
            "tt": { score: 5.5, rationale: "Stabil volymtillväxt, ej dramatisk expansion" },
            "equipnor": { score: 6.0, rationale: "Kraftig omsättningstillväxt 2024 vs 2023" }
          }
        }
      ]
    },
    { id: "varumarke", label: "Varumärke & Trovärdighet", weight: "10%",
      description: "Branschrykte, referensleveranser, hållbarhet och pristransparens.",
      children: [
        { id: "varumarke-ref", label: "Referensleveranser & Kundhistorik", weight: "35%",
          description: "Dokumenterade leveranser och kundrelationer.",
          scores: {
            "snigel": { score: 8.0, rationale: "Svenska Försvarsmakten 20+ år, Bundeswehr, nyckeleverantör i Sverige" },
            "nfm": { score: 8.0, rationale: "Globalt erkänt, SOF-combat-proven, Paul Boyé-förvärvet" },
            "sacci": { score: 5.5, rationale: "Försvar, vård, polis men begränsade internationella referenser" },
            "ptd": { score: 6.0, rationale: "17 danska ramavtal, PTD AB i SOFF, 40-årsjubileum" },
            "savotta": { score: 8.5, rationale: "Finska försvarsmakten sedan 1960-talet, M23-ramavtal 37 MEUR" },
            "taiga": { score: 6.0, rationale: "Militär/polis/ambulans i Norden, Gore-Tex sedan 1983" },
            "lindnerhof": { score: 7.5, rationale: "Bundeswehr/GSG9-historia, internationell expansion" },
            "mehler": { score: 8.5, rationale: "MOBAST-program, miljonvolymer, global operativ användning" },
            "tt": { score: 7.0, rationale: "Bred institutionell användning inklusive Bundeswehr" },
            "equipnor": { score: 5.5, rationale: "FMV, Polisen, Kustbevakningen som namngivna kunder" }
          }
        },
        { id: "varumarke-hallbar", label: "Hållbarhetsprofil", weight: "25%",
          description: "Miljöarbete, hållbarhet och ESG-kommunikation.",
          scores: {
            "snigel": { score: 6.5, rationale: "Begränsad publik ESG-kommunikation, god svensk standard" },
            "nfm": { score: 8.0, rationale: "Åpenhetsloven/Transparency Act, omfattande leverantörsriskbedömning" },
            "sacci": { score: 5.0, rationale: "ISO 14001 men begränsad hållbarhetskommunikation" },
            "ptd": { score: 5.0, rationale: "DGNB Guld-kontor men begränsad produkthållbarhet" },
            "savotta": { score: 8.0, rationale: "97% EU-material, REACH, ISO 14001, Griffin Tech Days-medverkan" },
            "taiga": { score: 7.0, rationale: "ISO 14001, OEKO-TEX, hållbarhetsfokus i materialkommunikation" },
            "lindnerhof": { score: 5.5, rationale: "Europeisk produktion men begränsad publik hållbarhetsprofil" },
            "mehler": { score: 6.5, rationale: "Certifieringsskott men ESG-detaljer begränsade i öppna källor" },
            "tt": { score: 7.5, rationale: "Open Factory-transparens, SA8000, tydligt hållbarhetsåtagande" },
            "equipnor": { score: 6.0, rationale: "ISO 14001, norsk ESG-standard via NFM" }
          }
        },
        { id: "varumarke-pris", label: "Pristransparens", weight: "20%",
          description: "Publikt tillgänglig prisinformation och pristransparens.",
          scores: {
            "snigel": { score: 7.0, rationale: "Publika SEK-priser i egen webshop, variantberoende" },
            "nfm": { score: 3.5, rationale: "Ej publika priser, tender-driven premium/mission-critical" },
            "sacci": { score: 3.5, rationale: "Icke-publikt för stora delar, kontraktsfokus" },
            "ptd": { score: 3.0, rationale: "Tender-/avtalsstyrd, inga publika listpriser" },
            "savotta": { score: 7.0, rationale: "D2C-priser i EUR, Jääkäri M 229,90€" },
            "taiga": { score: 3.5, rationale: "Priser framgår ej generellt, B2G/B2B-fokus" },
            "lindnerhof": { score: 3.5, rationale: "Send inquiry/find a dealer-modell, ej publikt" },
            "mehler": { score: 3.0, rationale: "Tender-driven, premium/high-end utan publika priser" },
            "tt": { score: 8.5, rationale: "Publika EUR-priser på webb, konsekvent 'commercial pricing', IRR-varianter" },
            "equipnor": { score: 3.5, rationale: "Inga publika listpriser, myndighetsfokus" }
          }
        },
        { id: "varumarke-rykte", label: "Branschrykte", weight: "20%",
          description: "Generellt rykte och varumärkesstatus i branschen.",
          scores: {
            "snigel": { score: 7.5, rationale: "Smidigt, innovationsdrivet, 'skräddarsydd precision', stark nordisk profil" },
            "nfm": { score: 8.0, rationale: "Erkänt som pan-europeisk kraftmätning, Paul Boyé-förvärv 2025" },
            "sacci": { score: 5.5, rationale: "Respekterat svenskt arv men begränsad internationell synlighet" },
            "ptd": { score: 5.5, rationale: "Specialistroll som integratör, 40-årsjubileum" },
            "savotta": { score: 8.0, rationale: "Kultstatus bland användare, legendär finsk robusthet" },
            "taiga": { score: 6.5, rationale: "Respekterad klädspecialist med vetenskapligt anslag" },
            "lindnerhof": { score: 8.0, rationale: "Premium-status, Josef Seppo Sixt-grundarhistoria" },
            "mehler": { score: 8.0, rationale: "Industriell referens, Top 100 Innovators Tyskland" },
            "tt": { score: 7.5, rationale: "Stark D2C-varumärkeslojalitet, 'for the pros'" },
            "equipnor": { score: 5.0, rationale: "Funktionell leverantörsroll, begränsad varumärkesidentitet" }
          }
        }
      ]
    }
  ]
};

// Deep copy of original tree for AI reference and reset
const DEFAULT_DECISION_TREE = JSON.parse(JSON.stringify(DECISION_TREE));

const COMPANIES = {
  "snigel": { name: "Snigel Design AB", country: "Sverige", platform: "Modulära bärsystem, plattbärare och taktisk klädsel", color: "#4a9eff",
    specs: { "HQ": "Farsta, Sverige", "Grundat": "1990", "Omsättning": "~365 MSEK (2024)", "Anställda": "~25", "Fokus": "Bärsystem, skyddslösningar, taktisk klädsel", "Säljkanal": "B2G dominant, B2B/B2C" },
    strengths: ["Stark modulär produktlogik och tydlig 'system-tänk'-positionering", "Dokumenterad kontraktsförmåga i Europa (Försvarsmakten, Bundeswehr)", "Snabb kundanpassning inom nischade bär- och skyddssystem", "eEquity-investering 2025 stärker internationaliseringskapacitet", "Unik designfilosofi: industridesigner × fallskärmsjägare"],
    weaknesses: ["Begränsad certifieringstransparens (inga tydliga ISO i öppna källor)", "Retail-/dealernärvaro primärt Europa-tyngd", "Liten organisation (~25 anst) jämfört med tyska koncerner", "Beroendet av kontraktsbaserad intäktsmodell"]
  },
  "nfm": { name: "NFM Group", country: "Norge", platform: "Multisystem: THOR, SKJOLD, GARM, GENTO, EC-PAINT", color: "#ff6b6b",
    specs: { "HQ": "Ski, Norge", "Grundat": "1996", "Omsättning": "243 MEUR (2023)", "Anställda": "3400+ globalt", "Fokus": "Hjälmsystem, kroppsskydd, bärsystem, stridskläder", "Säljkanal": "B2G/tenders" },
    strengths: ["Multisystemportfölj med dokumenterad industriell footprint", "Flera produktionssiter i Europa (Lebork, Pleven)", "ISO 9001/14001 och SA8000-spår", "Förvärv Paul Boyé 2025 stärker europeisk närvaro", "Transparency Act-rapport visar hållbarhetsambition"],
    weaknesses: ["Hög komplexitet i portfölj och compliance-krav", "Tender-beroende kan ge budgetvolatilitet", "Mindre prisgenomskinlighet i öppna källor"]
  },
  "sacci": { name: "Sacci AB", country: "Sverige", platform: "Bärsystem, medicinsk och taktisk utrustning", color: "#51cf66",
    specs: { "HQ": "Borlänge, Sverige", "Grundat": "1914 (Haglöfs-rötter), 1992 nuvarande namn", "Omsättning": "~150,6 MSEK (2024)", "Anställda": "25-28", "Fokus": "Sacci Pro/Partner: försvar, vård, polis", "Säljkanal": "B2B/B2G" },
    strengths: ["Lång kompetens inom bärsystem, svenskt arv sedan 1914", "Svensk prototypkapacitet i Borlänge + EU/Asien skalbar produktion", "ISO 9001/14001-certifierad (2025, giltighet till 2028)", "Sacci Partner ger private label-/utvecklingsmöjligheter"],
    weaknesses: ["Lägre internationell varumärkesexponering", "Prisdata ofta icke-publik i Pro/Partner-logiken", "Konsumentled begränsat jämfört med rivaler"]
  },
  "ptd": { name: "PTD Group", country: "Danmark", platform: "Systemintegratör: avancerade försvarslösningar", color: "#ffd43b",
    specs: { "HQ": "Svenstrup, Danmark", "Grundat": "1985", "Omsättning": "~11 MDKK netto (2024/25)", "Anställda": "16", "Fokus": "Integrerade system, C4ISR, sensorer/optik", "Säljkanal": "Projekt/tenders" },
    strengths: ["Projekt-/integrationsförmåga med bred teknikportfölj", "250+ partners globalt, 'house of agencies'", "Dokumenterad lönsamhet i årsredovisning", "17 ramavtal med danska försvarsmakten"],
    weaknesses: ["Begränsad direkt jämförbarhet med Snigel i soft-goods", "Litet bolag (16 anst), begränsad skalbarhet", "Begränsad publik transparens om certifieringar"]
  },
  "savotta": { name: "Savotta (Finn-Savotta Oy)", country: "Finland", platform: "Militär och outdoor dual-use bärsystem", color: "#20c997",
    specs: { "HQ": "Karstula, Finland", "Grundat": "1955", "Omsättning": "14,5 MEUR (2024)", "Anställda": "~53 (FI) + 120 (EE)", "Fokus": "Ryggsäckar, pouches, bälten, sustainment", "Säljkanal": "Dual-use: B2G + D2C" },
    strengths: ["Tydlig dual-use bärsystem med robust kvalitet", "Stark compliance-profil: ISO/AQAP/NATO CAGE/Facility Security", "EU-nära supply chain: 97% EU-material, REACH-compliance", "M23-ramavtal 37 MEUR med finska försvarsmakten", "Rite Ventures-investering 2025 för internationalisering"],
    weaknesses: ["Mindre bredd inom ballistik jämfört med systemhusen", "Regional dealer-transparens utanför Europa begränsad", "Risk för kapacitetsstress vid stora program"]
  },
  "taiga": { name: "Taiga AB", country: "Sverige", platform: "Avancerade arbetskläder och uniformssystem", color: "#cc5de8",
    specs: { "HQ": "Varberg, Sverige", "Grundat": "1982", "Omsättning": "~156,6 MSEK (2025)", "Anställda": "~30", "Fokus": "Kläd-/uniformssystem: militär, polis, ambulans, räddning", "Säljkanal": "B2G/B2B" },
    strengths: ["Europeisk tillverkning med stark material-/testinfrastruktur", "ISO 9001/14001 och OEKO-TEX-orienterad compliance", "Branschledande materialinnovation: Gore-Tex 1983, TMTP/TCIP-kamouflage", "Trelagersystem med CE-testning och klimatlaboratorium"],
    weaknesses: ["Smalare direkt konkurrens med Snigel i bärsystem/ballistik", "Prisdata ofta icke-publik, B2G/B2B-fokus", "Begränsad dealer-transparens utanför Norden"]
  },
  "lindnerhof": { name: "Lindnerhof Taktik GmbH", country: "Tyskland", platform: "Premium modulär taktisk utrustning", color: "#ff922b",
    specs: { "HQ": "Lenggries, Tyskland", "Grundat": "2006", "Omsättning": ">10 MEUR (2016, växande)", "Anställda": "57", "Fokus": "Plate carriers, modulära pouches, bälten, taktisk klädsel", "Säljkanal": "Dealer + government" },
    strengths: ["Premium taktisk gear-specialist med stark modulär plattform", "Tydlig DACH-hemmaplan med Bundeswehr/GSG9-historia", "Del av Mehler Systems-gruppen sedan 2017, synergieffekter", "Quick-release LT025-patent, designinnovation"],
    weaknesses: ["Pris-/kapacitetsinformation mindre transparent", "Delvis beroende av dealer-/government-processer", "Direkt konkurrens mot Snigel i plate carriers/pouches"]
  },
  "mehler": { name: "Mehler Systems", country: "Tyskland", platform: "Integrerad koncern: ballistik + bärsystem + kläder", color: "#f06595",
    specs: { "HQ": "Fulda, Tyskland", "Grundat": "1986 (Mehler Vario System)", "Omsättning": "Miljardomsättning (ej publ.)", "Anställda": "1600+ i Europa", "Fokus": "Mehler Protection + Lindnerhof + UF PRO", "Säljkanal": "B2G/program" },
    strengths: ["Industriell skala: 200 000 plattor, >1,7M pouches, 440 000 plagg/år", "Bevisad leverans i hundratusental via MOBAST och storskaliga program", "Bred systemportfölj: ballistik + bär + kläder", "Top 100 Innovators Tyskland, ExoM-exoskelett"],
    weaknesses: ["Mindre direkt relevant som 'ren' soft-goods-jämförelse", "Tender-beroende och programrisk kan ge cyklicitet", "Komplex multi-brand-struktur"]
  },
  "tt": { name: "Tasmanian Tiger (Tatonka)", country: "Tyskland", platform: "Taktisk och outdoor-utrustning", color: "#845ef7",
    specs: { "HQ": "Dasing, Tyskland", "Grundat": "1999 (Tatonka 1989)", "Omsättning": "Ej separat redovisad", "Anställda": "~1000 (Tatonka)", "Fokus": "Ryggsäckar, bags, pouches, taktisk utrustning", "Säljkanal": "Dealer/retail global" },
    strengths: ["Mycket transparent tillverkningsmodell: Open Factory, SA8000", "Publika EUR-priser och global dealer-logik", "Bredast dealer-distribution i urvalet", "Bundeswehr-standarder på produktnivå (TL 8305-0278)"],
    weaknesses: ["Mindre 'kundspecifik systemutveckling' än kontraktsorienterade OEM:er", "Risk att inte vinna nationella B2G-tenders som kräver lokalt innehåll", "Vietnam-produktion kan uppfattas negativt i 'buy European'-kontext"]
  },
  "equipnor": { name: "Equipnor AB", country: "Sverige/Norge", platform: "Myndighetsfokuserad system-/handelsleverantör", color: "#5c7cfa",
    specs: { "HQ": "Stockholm (NFM facilities)", "Grundat": "2008-2014", "Omsättning": "337,9 MSEK (2024)", "Anställda": "~10", "Fokus": "High-end systems solutions: SEA/AIR/LAND", "Säljkanal": "Myndighetsupphandling" },
    strengths: ["Myndighetsnära kundrelationer: FMV, Försvarsmakten, Polisen, MSB", "Upphandlings-/projektkompetens inom systemlösningar", "ISO 9001/14001-certifierad", "Spiritus Systems-samarbete, transatlantisk länk"],
    weaknesses: ["Begränsad differentiering på produktplattform (handels-/integratörsroll)", "Liten egen organisation (~10 anst)", "Hård konkurrens i offentlig upphandling när tillverkare bygger direktkanaler"]
  }
};

const PERSONAS = {
  "upphandlare": { name: "Upphandlaren", description: "Offentlig upphandlare \u2014 prioriterar certifieringar, pris, leveranss\u00e4kerhet och compliance.", icon: "\ud83d\udccb",
    weights: { "cert-iso": 3, "cert-mil": 3, "supply-volym": 2, "marknad-b2g": 2, "varumarke-ref": 1 }
  },
  "operator": { name: "Operat\u00f6ren", description: "Slutanv\u00e4ndare i f\u00e4lt \u2014 prioriterar ergonomi, h\u00e5llbarhet, modularitet och bepr\u00f6vad funktion.", icon: "\ud83c\udfaf",
    weights: { "innov-ergo": 3, "prod-bar-mod": 3, "varumarke-ref": 2, "prod-skydd-platt": 2, "prod-bar-bredd": 1 }
  },
  "logistiker": { name: "Logistikern", description: "F\u00f6rsvarslogistiker \u2014 prioriterar skalbarhet, leveranstid, modularitet och underh\u00e5ll.", icon: "\ud83d\udce6",
    weights: { "supply-skalbar": 3, "supply-volym": 2, "prod-tillbehor-molle": 2, "supply-eu": 2, "cert-iso": 1 }
  },
  "strategisk": { name: "Strategisk Ledning", description: "Ledningsgrupp/styrelse \u2014 prioriterar marknadsst\u00e4rka, innovation, finansiell tillv\u00e4xt och varum\u00e4rke.", icon: "\ud83c\udfe9",
    weights: { "finans-tillvaxt": 3, "marknad-geo": 2, "innov-ergo": 2, "finans-omsattning": 2, "varumarke-rykte": 1 }
  }
};

const SCENARIOS = [
  { id: "a", label: "Scenario A", title: "Aggressiv Tysk Expansion \u2014 DACH-fokus", cssClass: "scenario-a",
    outcome: "Mehler/Lindnerhof konsoliderar DACH-regionen och expanderar norrut med storskaliga ramavtal. Snigel pressas i europeiska upphandlingar.",
    risk: "Prispress och volymnackdelar mot koncerner med vertikal integration och masstillverkning.", company: "mehler" },
  { id: "b", label: "Scenario B", title: "Nordisk Premiumkonsolidering", cssClass: "scenario-b",
    outcome: "Nordiska akt\u00f6rer (Snigel, Savotta, Sacci, Taiga) samarbetar eller konsolideras via investerare f\u00f6r att skapa en paneuropeisk utmanare.",
    risk: "Kulturella skillnader och produkt\u00f6verlapp kan f\u00f6rsv\u00e5ra integration. Fokusf\u00f6rlust i hemmamarknader.", company: "snigel" },
  { id: "c", label: "Scenario C", title: "Europeisk Upprustningsv\u00e5g 2026-2030", cssClass: "scenario-c",
    outcome: "Kraftigt \u00f6kade f\u00f6rsvarsbudgetar driver efterfr\u00e5gan. Reshoring och 'buy European'-policyer gynnar europeiska leverant\u00f6rer.",
    risk: "Kapacitetsbrist kan gynna stora producenter. Snigel beh\u00f6ver snabbt skala produktion.", company: null },
  { id: "d", label: "Scenario D", title: "Nationella Upphandlingskrav ('Buy National')", cssClass: "scenario-d",
    outcome: "Fler l\u00e4nder kr\u00e4ver nationell produktion. Snigel gynnas i Sverige men blockeras i Tyskland/Finland.",
    risk: "Fragmentering av den europeiska marknaden. Partnerskap och lokala tillverkningsavtal kr\u00e4vs.", company: null },
  { id: "e", label: "Scenario E", title: "Digitaliseringsskifte \u2014 C4ISR i B\u00e4rsystem", cssClass: "scenario-e",
    outcome: "Integration av sensorer, kommunikation och str\u00f6mf\u00f6rs\u00f6rjning i b\u00e4rsystem blir avg\u00f6rande i upphandlingar.",
    risk: "Kr\u00e4ver teknologipartnerskap som Snigel saknar idag. PTD och Mehler har f\u00f6rspr\u00e5ng.", company: null }
];

// ── State ──
let selectedNode = null;
let scoreChangeLog = [];
let scoreOverrides = {};
let documents = [];
let expandedDocId = null;
let aiMessages = [];
let currentView = 'tree';
let selectedPersona = null;
let simVariables = {};

const companyKeys = Object.keys(COMPANIES);

// ── Tree Helpers ──
function findNode(tree, id) {
  if (tree.id === id) return tree;
  if (tree.children) {
    for (const child of tree.children) {
      const found = findNode(child, id);
      if (found) return found;
    }
  }
  return null;
}

function findPath(tree, id, path = []) {
  if (tree.id === id) return [...path, tree.label];
  if (tree.children) {
    for (const child of tree.children) {
      const found = findPath(child, id, [...path, tree.label]);
      if (found) return found;
    }
  }
  return null;
}

function collectScores(node, company) {
  if (node.scores && node.scores[company]) {
    return node.scores[company].score;
  }
  if (node.children) {
    let totalWeight = 0;
    let weightedSum = 0;
    for (const child of node.children) {
      const w = parseFloat(child.weight) || 1;
      const s = collectScores(child, company);
      if (s !== null) {
        weightedSum += s * w;
        totalWeight += w;
      }
    }
    return totalWeight > 0 ? weightedSum / totalWeight : null;
  }
  return null;
}

function collectLeafNodes(node, results = []) {
  if (node.scores) {
    results.push({ id: node.id, label: node.label, scores: node.scores });
  }
  if (node.children) {
    for (const child of node.children) {
      collectLeafNodes(child, results);
    }
  }
  return results;
}

// ── View Switching ──
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelector(`.nav-btn[data-view="${view}"]`).classList.add('active');

  if (view === 'profiles') renderProfiles();
  if (view === 'compare') renderCompare();
  if (view === 'scenarios') renderScenarios();
  if (view === 'changelog') renderChangelog();
  if (view === 'documents') renderDocuments();
  if (view === 'personas') renderPersonas();
  if (view === 'simulator') renderSimulator();
  if (view === 'visualizations') renderVisualizations();
}

// ── Tree Rendering ──
// Note: innerHTML usage here is intentional for rendering the app's own UI.
// All user-provided text is sanitized via escapeHtml() before insertion.
function renderTree() {
  const container = document.getElementById('tree-container');
  container.innerHTML = renderNode(DECISION_TREE, 0, true);
}

function renderNode(node, depth, expanded) {
  const isLeaf = !!node.scores;
  const isSelected = selectedNode && selectedNode.id === node.id;
  const hasChildren = node.children && node.children.length > 0;

  let html = `<div class="tree-node depth-${Math.min(depth, 3)} ${isSelected ? 'selected' : ''} ${isLeaf ? 'leaf' : ''}"
    onclick="event.stopPropagation(); selectNode('${node.id}')" data-id="${node.id}">`;

  html += `<div class="tree-node-header">`;
  if (hasChildren) {
    html += `<span class="tree-toggle ${expanded ? 'open' : ''}" onclick="event.stopPropagation(); toggleNode(this)">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </span>`;
  } else {
    html += `<span class="tree-toggle-spacer"></span>`;
  }

  html += `<span class="tree-node-label">${escapeHtml(node.label)}</span>`;
  if (node.weight) html += `<span class="tree-node-weight">${escapeHtml(node.weight)}</span>`;

  // Edit tree icon on root node
  if (node.id === 'root') {
    html += `<button class="tree-edit-icon" title="Redigera trädstruktur" onclick="event.stopPropagation(); openTreeEditor()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
    </button>`;
  }

  // Mini score bar for leaf nodes
  if (isLeaf) {
    const snigelScore = node.scores.snigel?.score || 0;
    const avgOther = companyKeys.filter(k => k !== 'snigel').reduce((sum, k) => sum + (node.scores[k]?.score || 0), 0) / (companyKeys.length - 1);
    const diff = snigelScore - avgOther;
    const diffClass = diff > 0.5 ? 'positive' : diff < -0.5 ? 'negative' : 'neutral';
    html += `<span class="tree-node-score">${snigelScore.toFixed(1)}</span>`;
    html += `<span class="tree-node-diff ${diffClass}">${diff > 0 ? '+' : ''}${diff.toFixed(1)}</span>`;
  } else if (hasChildren) {
    const score = collectScores(node, 'snigel');
    if (score !== null) {
      html += `<span class="tree-node-score">${score.toFixed(1)}</span>`;
    }
  }

  html += `</div>`;

  if (hasChildren) {
    html += `<div class="tree-children ${expanded ? '' : 'collapsed'}">`;
    for (const child of node.children) {
      html += renderNode(child, depth + 1, depth < 1);
    }
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

function toggleNode(el) {
  const children = el.closest('.tree-node').querySelector('.tree-children');
  if (children) {
    children.classList.toggle('collapsed');
    el.classList.toggle('open');
  }
}

function selectNode(nodeId) {
  const node = findNode(DECISION_TREE, nodeId);
  if (!node) return;
  selectedNode = node;

  document.querySelectorAll('.tree-node').forEach(n => n.classList.remove('selected'));
  const el = document.querySelector(`.tree-node[data-id="${nodeId}"]`);
  if (el) el.classList.add('selected');

  renderDetail(node);
}

// ── Detail Panel ──
function renderDetail(node) {
  const panel = document.getElementById('detail-panel');
  const path = findPath(DECISION_TREE, node.id);
  const pathHtml = path ? path.map((p, i) => {
    if (i < path.length - 1) {
      const nid = findNodeIdByLabel(DECISION_TREE, p);
      return `<span class="breadcrumb-item" onclick="selectNode('${nid}')">${escapeHtml(p)}</span>`;
    }
    return `<span class="breadcrumb-current">${escapeHtml(p)}</span>`;
  }).join('<span class="breadcrumb-sep">&rsaquo;</span>') : '';

  let html = `
    <div class="detail-header">
      <div class="detail-breadcrumb">${pathHtml}</div>
      <h2>${escapeHtml(node.label)}</h2>
      ${node.weight ? `<span class="detail-weight">${escapeHtml(node.weight)}</span>` : ''}
      <p class="detail-description">${escapeHtml(node.description || '')}</p>
    </div>
  `;

  if (node.scores) {
    html += renderScoreCards(node);
  } else if (node.children) {
    html += renderPillarOverview(node);
  }

  html += `
    <div class="detail-actions">
      <button class="ai-trigger-btn" onclick="openAIPanel('${node.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        Diskutera med AI
      </button>
    </div>
  `;

  panel.innerHTML = html;
}

function findNodeIdByLabel(tree, label) {
  if (tree.label === label) return tree.id;
  if (tree.children) {
    for (const child of tree.children) {
      const found = findNodeIdByLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

function renderScoreCards(node) {
  let html = '<div class="score-cards">';
  const sorted = [...companyKeys].sort((a, b) => (node.scores[b]?.score || 0) - (node.scores[a]?.score || 0));

  for (let rank = 0; rank < sorted.length; rank++) {
    const key = sorted[rank];
    const data = node.scores[key];
    if (!data) continue;
    const company = COMPANIES[key];
    const score = data.score;
    const pct = (score / 10) * 100;
    const isSnigel = key === 'snigel';

    html += `
      <div class="score-card ${isSnigel ? 'highlight' : ''}">
        <div class="score-card-header">
          <span class="score-rank">#${rank + 1}</span>
          <span class="score-company-name ${key}">${escapeHtml(company.name)}</span>
          <span class="score-country">${escapeHtml(company.country)}</span>
          <button class="score-edit-btn" onclick="openEditModal('${node.id}', '${key}')" title="Redigera">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
        </div>
        <div class="score-bar-container">
          <div class="score-bar-fill ${key}" style="width:${pct}%"></div>
          <span class="score-value">${score.toFixed(1)}</span>
        </div>
        <div class="score-rationale">${escapeHtml(data.rationale)}</div>
      </div>
    `;
  }

  html += '</div>';
  return html;
}

function renderPillarOverview(node) {
  let html = '<div class="pillar-overview">';
  for (const child of node.children) {
    html += `<div class="pillar-card" onclick="selectNode('${child.id}')">`;
    html += `<div class="pillar-card-header"><h4>${escapeHtml(child.label)}</h4>`;
    if (child.weight) html += `<span class="pillar-weight">${escapeHtml(child.weight)}</span>`;
    html += `</div>`;
    if (child.description) html += `<p class="pillar-description">${escapeHtml(child.description)}</p>`;

    const scores = companyKeys.map(k => ({ key: k, score: collectScores(child, k) })).filter(s => s.score !== null).sort((a, b) => b.score - a.score);
    html += '<div class="pillar-rankings">';
    for (let i = 0; i < Math.min(3, scores.length); i++) {
      const s = scores[i];
      const c = COMPANIES[s.key];
      html += `<div class="pillar-rank-item"><span class="score-company-name ${s.key}">${escapeHtml(c.name)}</span><span class="pillar-rank-score">${s.score.toFixed(1)}</span></div>`;
    }
    html += '</div></div>';
  }
  html += '</div>';
  return html;
}

// ── Company Profiles ──
// Note: All dynamic text is sanitized via escapeHtml() before DOM insertion.
let profileSearchQuery = '';

function filterProfiles(query) {
  profileSearchQuery = query.toLowerCase();
  renderProfiles();
}

function renderProfiles() {
  const container = document.getElementById('profiles-container');

  // Search bar
  let html = `<div class="profiles-search-bar">
    <div class="profiles-search-input-wrap">
      <svg class="profiles-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" class="profiles-search-input" placeholder="S\u00f6k f\u00f6retag, styrkor, specifikationer..." value="${escapeHtml(profileSearchQuery)}" oninput="filterProfiles(this.value)">
    </div>
    <span class="profiles-search-count"></span>
  </div>`;

  html += '<div class="profiles-grid">';

  let matchCount = 0;
  for (const key of companyKeys) {
    const c = COMPANIES[key];

    // Filter logic
    if (profileSearchQuery) {
      const haystack = [
        c.name, c.country, c.platform,
        ...Object.keys(c.specs), ...Object.values(c.specs),
        ...(c.strengths || []),
        ...(c.weaknesses || [])
      ].join(' ').toLowerCase();
      if (!haystack.includes(profileSearchQuery)) continue;
    }
    matchCount++;

    const overallScore = collectScores(DECISION_TREE, key);
    const isSnigel = key === 'snigel';

    html += `<div class="profile-card ${isSnigel ? 'highlight' : ''}">`;
    html += `<div class="profile-header">
      <div class="profile-name-row">
        <h3 class="score-company-name ${key}">${escapeHtml(c.name)}</h3>
        <span class="profile-country">${escapeHtml(c.country)}</span>
      </div>
      <p class="profile-platform">${escapeHtml(c.platform)}</p>
      <div class="profile-overall">
        <span class="profile-overall-label">Totalpo\u00e4ng</span>
        <span class="profile-overall-score">${overallScore !== null ? overallScore.toFixed(1) : '\u2014'}</span>
      </div>
    </div>`;

    // Pillar scores
    html += '<div class="profile-pillars">';
    for (const pillar of DECISION_TREE.children) {
      const ps = collectScores(pillar, key);
      const pct = ps !== null ? (ps / 10) * 100 : 0;
      html += `<div class="profile-pillar-row">
        <span class="profile-pillar-label">${escapeHtml(pillar.label)}</span>
        <div class="profile-pillar-bar"><div class="score-bar-fill ${key}" style="width:${pct}%"></div></div>
        <span class="profile-pillar-score">${ps !== null ? ps.toFixed(1) : '\u2014'}</span>
      </div>`;
    }
    html += '</div>';

    // Specs
    html += '<div class="profile-specs">';
    for (const [k, v] of Object.entries(c.specs)) {
      html += `<div class="profile-spec"><span class="spec-label">${escapeHtml(k)}</span><span class="spec-value">${escapeHtml(v)}</span></div>`;
    }
    html += '</div>';

    // Strengths/Weaknesses
    if (c.strengths?.length) {
      html += '<div class="profile-section"><h4>Styrkor</h4><ul>';
      for (const s of c.strengths) html += `<li class="strength">${escapeHtml(s)}</li>`;
      html += '</ul></div>';
    }
    if (c.weaknesses?.length) {
      html += '<div class="profile-section"><h4>Svagheter</h4><ul>';
      for (const w of c.weaknesses) html += `<li class="weakness">${escapeHtml(w)}</li>`;
      html += '</ul></div>';
    }

    // Explore button
    html += `<div class="profile-actions">
      <button class="profile-explore-btn" onclick="openCompanyChat('${key}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        Utforska med AI
      </button>
    </div>`;

    html += '</div>';
  }

  html += '</div>';
  container.innerHTML = html;

  // Update search count
  const countEl = container.querySelector('.profiles-search-count');
  if (countEl) {
    countEl.textContent = profileSearchQuery
      ? `${matchCount} av ${companyKeys.length} f\u00f6retag`
      : `${companyKeys.length} f\u00f6retag`;
  }

  // Restore focus to search input if it was active
  if (profileSearchQuery) {
    const input = container.querySelector('.profiles-search-input');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
}

// ── Compare View ──
function renderCompare() {
  const container = document.getElementById('compare-container');
  let html = '<div class="compare-table-wrapper"><table class="compare-table">';

  // Header
  html += '<thead><tr><th class="compare-node-col">Kriterium</th>';
  for (const key of companyKeys) {
    const c = COMPANIES[key];
    html += `<th class="compare-company-col"><span class="score-company-name ${key}">${escapeHtml(c.name)}</span></th>`;
  }
  html += '</tr></thead><tbody>';

  // Overall
  html += '<tr class="compare-overall"><td><strong>Totalpoäng</strong></td>';
  for (const key of companyKeys) {
    const s = collectScores(DECISION_TREE, key);
    html += `<td class="compare-score"><strong>${s !== null ? s.toFixed(1) : '\u2014'}</strong></td>`;
  }
  html += '</tr>';

  // Pillars
  for (const pillar of DECISION_TREE.children) {
    html += `<tr class="compare-pillar"><td>${escapeHtml(pillar.label)} <span class="compare-weight">${escapeHtml(pillar.weight || '')}</span></td>`;
    for (const key of companyKeys) {
      const s = collectScores(pillar, key);
      const scoreClass = s >= 8 ? 'score-color-high' : s >= 6 ? 'score-color-mid' : 'score-color-low';
      html += `<td class="compare-score ${scoreClass}">${s !== null ? s.toFixed(1) : '\u2014'}</td>`;
    }
    html += '</tr>';

    // Leaf nodes under this pillar
    const leaves = collectLeafNodes(pillar);
    for (const leaf of leaves) {
      html += `<tr class="compare-leaf"><td class="compare-leaf-label">${escapeHtml(leaf.label)}</td>`;
      for (const key of companyKeys) {
        const score = leaf.scores[key]?.score;
        const scoreClass = score >= 8 ? 'score-color-high' : score >= 6 ? 'score-color-mid' : 'score-color-low';
        html += `<td class="compare-score ${scoreClass}">${score != null ? score.toFixed(1) : '\u2014'}</td>`;
      }
      html += '</tr>';
    }
  }

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// ── Scenarios View ──
function renderScenarios() {
  const container = document.getElementById('scenarios-container');
  let html = '<div class="scenarios-layout">';

  for (const scenario of SCENARIOS) {
    html += `
      <div class="scenario-card ${scenario.cssClass}">
        <div class="scenario-header">
          <span class="scenario-label">${escapeHtml(scenario.label)}</span>
          <h3>${escapeHtml(scenario.title)}</h3>
        </div>
        <div class="scenario-body">
          <div class="scenario-section">
            <h4>Förväntat utfall</h4>
            <p>${escapeHtml(scenario.outcome)}</p>
          </div>
          <div class="scenario-section">
            <h4>Nyckelrisker</h4>
            <p>${escapeHtml(scenario.risk)}</p>
          </div>
        </div>
        <div class="scenario-actions">
          <button class="scenario-analyze-btn" onclick="analyzeScenario('${scenario.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            AI-konsekvensanalys
          </button>
        </div>
      </div>
    `;
  }

  // Custom scenario input
  html += `
    <div class="scenario-card scenario-custom">
      <div class="scenario-header">
        <span class="scenario-label">Eget</span>
        <h3>Egen scenarioanalys</h3>
      </div>
      <div class="scenario-body">
        <textarea id="custom-scenario-input" rows="4" placeholder="Beskriv ett strategiskt scenario att analysera..."></textarea>
      </div>
      <div class="scenario-actions">
        <button class="scenario-analyze-btn" onclick="analyzeCustomScenario()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Analysera eget scenario
        </button>
      </div>
      <div id="scenario-results" class="scenario-results"></div>
    </div>
  `;

  html += '</div>';
  container.innerHTML = html;
}

async function analyzeScenario(scenarioId) {
  const scenario = SCENARIOS.find(s => s.id === scenarioId);
  if (!scenario) return;
  const text = `${scenario.title}: ${scenario.outcome} Risks: ${scenario.risk}`;
  await runScenarioAnalysis(text);
}

async function analyzeCustomScenario() {
  const input = document.getElementById('custom-scenario-input');
  const text = input?.value?.trim();
  if (!text) { alert('Beskriv ett scenario att analysera.'); return; }
  await runScenarioAnalysis(text);
}

async function runScenarioAnalysis(scenarioText) {
  const resultsDiv = document.getElementById('scenario-results');
  if (resultsDiv) resultsDiv.textContent = 'Analyserar scenariopåverkan...';

  const leafNodes = collectLeafNodes(DECISION_TREE);
  try {
    const res = await fetch('/api/scenarios/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ scenario: scenarioText, leafNodes })
    });
    if (!res.ok) throw new Error('Analysis failed');
    const data = await res.json();

    if (resultsDiv && data.suggestions?.length) {
      let html = `<h4>${data.suggestions.length} Projicerade poängändringar</h4><div class="scenario-suggestions">`;
      for (const s of data.suggestions) {
        const node = findNode(DECISION_TREE, s.nodeId);
        const companyName = COMPANIES[s.company]?.name || s.company;
        const current = node?.scores?.[s.company]?.score;
        html += `<div class="scenario-suggestion-row">
          <span class="score-company-name ${s.company}">${escapeHtml(companyName)}</span>
          <span>${escapeHtml(node?.label || s.nodeId)}</span>
          <span>${current != null ? current.toFixed(1) : '?'} \u2192 <strong>${s.suggestedScore.toFixed(1)}</strong></span>
          <span class="suggestion-confidence ${s.confidence || 'medium'}">${escapeHtml(s.confidence || 'medium')}</span>
        </div>`;
      }
      html += '</div>';
      resultsDiv.innerHTML = html;
    } else if (resultsDiv) {
      resultsDiv.textContent = 'Inga betydande poängändringar projicerade.';
    }
  } catch (err) {
    console.error('Scenario analysis error:', err);
    if (resultsDiv) resultsDiv.textContent = 'Analysen misslyckades. Kontrollera API-nyckel.';
  }
}

// ── Personas View ──
// Security note: All user-facing text is sanitized through escapeHtml()
// before DOM insertion. The innerHTML usage renders app-controlled templates only.
function renderPersonas() {
  const container = document.getElementById('personas-container');
  let html = '<div class="personas-layout">';

  // Persona selector
  html += '<div class="persona-selector">';
  for (const [key, persona] of Object.entries(PERSONAS)) {
    html += `<button class="persona-btn ${selectedPersona === key ? 'active' : ''}" onclick="selectPersona('${key}')">
      <span class="persona-icon">${persona.icon}</span>
      <span class="persona-name">${escapeHtml(persona.name)}</span>
    </button>`;
  }
  html += '</div>';

  if (selectedPersona && PERSONAS[selectedPersona]) {
    const persona = PERSONAS[selectedPersona];
    html += `<div class="persona-detail">
      <div class="persona-info">
        <h3>${persona.icon} ${escapeHtml(persona.name)}</h3>
        <p>${escapeHtml(persona.description)}</p>
      </div>`;

    // Calculate weighted scores per company for this persona
    const personaScores = {};
    for (const key of companyKeys) {
      let totalWeight = 0;
      let weightedSum = 0;
      for (const [nodeId, weight] of Object.entries(persona.weights)) {
        const node = findNode(DECISION_TREE, nodeId);
        if (node?.scores?.[key]) {
          weightedSum += node.scores[key].score * weight;
          totalWeight += weight;
        }
      }
      personaScores[key] = totalWeight > 0 ? weightedSum / totalWeight : 0;
    }

    // Sort and display
    const sorted = companyKeys.map(k => ({ key: k, score: personaScores[k] })).sort((a, b) => b.score - a.score);

    html += '<div class="persona-rankings">';
    for (let i = 0; i < sorted.length; i++) {
      const s = sorted[i];
      const c = COMPANIES[s.key];
      const pct = (s.score / 10) * 100;
      html += `<div class="persona-rank-row ${s.key === 'snigel' ? 'highlight' : ''}">
        <span class="persona-rank">#${i + 1}</span>
        <span class="score-company-name ${s.key}">${escapeHtml(c.name)}</span>
        <div class="persona-bar"><div class="score-bar-fill ${s.key}" style="width:${pct}%"></div></div>
        <span class="persona-score">${s.score.toFixed(1)}</span>
      </div>`;
    }
    html += '</div>';

    // Show which criteria matter for this persona
    html += '<div class="persona-criteria"><h4>Viktiga beslutskriterier</h4>';
    for (const [nodeId, weight] of Object.entries(persona.weights)) {
      const node = findNode(DECISION_TREE, nodeId);
      if (node) {
        const dots = '\u2588'.repeat(weight);
        html += `<div class="persona-criterion">
          <span class="persona-criterion-weight">${dots}</span>
          <span class="persona-criterion-label">${escapeHtml(node.label)}</span>
        </div>`;
      }
    }
    html += '</div></div>';
  } else {
    html += '<div class="persona-placeholder"><p>Välj en persona ovan för att se hur olika intressenter bedömer varje företag.</p></div>';
  }

  html += '</div>';
  container.innerHTML = html; // Safe: all dynamic content escaped via escapeHtml()
}

function selectPersona(key) {
  selectedPersona = key;
  renderPersonas();
}

// ── Simulator View ──
function renderSimulator() {
  const container = document.getElementById('simulator-container');
  const leaves = collectLeafNodes(DECISION_TREE);

  // Initialize sim variables from current Snigel scores
  if (Object.keys(simVariables).length === 0) {
    for (const leaf of leaves) {
      if (leaf.scores.snigel) {
        simVariables[leaf.id] = leaf.scores.snigel.score;
      }
    }
  }

  let html = '<div class="simulator-layout">';
  html += '<div class="simulator-controls">';
  html += '<h3>Strategisk rörelsesimulator</h3>';
  html += '<p class="simulator-description">Justera Snigels poäng för att projicera påverkan på övergripande positionering. Jämför nuläge mot projicerat läge.</p>';

  // Reset button
  html += '<button class="scenario-analyze-btn" onclick="resetSimulator()">Återställ till nuläge</button>';

  // Sliders grouped by pillar
  for (const pillar of DECISION_TREE.children) {
    html += `<div class="sim-pillar-group"><h4>${escapeHtml(pillar.label)}</h4>`;
    const pillarLeaves = collectLeafNodes(pillar);
    for (const leaf of pillarLeaves) {
      const current = leaf.scores.snigel?.score || 5;
      const simVal = simVariables[leaf.id] !== undefined ? simVariables[leaf.id] : current;
      const changed = Math.abs(simVal - current) > 0.1;
      html += `<div class="sim-slider-row ${changed ? 'changed' : ''}">
        <label>${escapeHtml(leaf.label)}</label>
        <input type="range" min="1" max="10" step="0.5" value="${simVal}"
          oninput="updateSimVariable('${leaf.id}', this.value)">
        <span class="sim-value" id="sim-val-${leaf.id}">${Number(simVal).toFixed(1)}</span>
      </div>`;
    }
    html += '</div>';
  }
  html += '</div>';

  // Results panel
  html += '<div class="simulator-results">';
  html += renderSimResults();
  html += '</div>';

  html += '</div>';
  container.innerHTML = html; // Safe: all dynamic content is numeric or escaped
}

function updateSimVariable(nodeId, value) {
  simVariables[nodeId] = parseFloat(value);
  const valSpan = document.getElementById(`sim-val-${nodeId}`);
  if (valSpan) valSpan.textContent = parseFloat(value).toFixed(1);

  // Update results
  const resultsDiv = document.querySelector('.simulator-results');
  if (resultsDiv) resultsDiv.innerHTML = renderSimResults(); // Safe: numeric data only
}

function renderSimResults() {
  let html = '<h4>Projicerad påverkan</h4>';

  const currentOverall = collectScores(DECISION_TREE, 'snigel');

  // Calculate simulated overall
  let simOverall = 0;
  let totalWeight = 0;
  for (const pillar of DECISION_TREE.children) {
    const pw = parseFloat(pillar.weight) || 1;
    let pillarSum = 0;
    let pillarWeight = 0;
    const pillarLeaves = collectLeafNodes(pillar);
    for (const leaf of pillarLeaves) {
      const lw = parseFloat(leaf.scores?.snigel ? '1' : '0');
      const simScore = simVariables[leaf.id] !== undefined ? simVariables[leaf.id] : (leaf.scores.snigel?.score || 0);
      pillarSum += simScore * lw;
      pillarWeight += lw;
    }
    if (pillarWeight > 0) {
      simOverall += (pillarSum / pillarWeight) * pw;
      totalWeight += pw;
    }
  }
  simOverall = totalWeight > 0 ? simOverall / totalWeight : 0;

  const diff = simOverall - currentOverall;
  const diffClass = diff > 0.1 ? 'positive' : diff < -0.1 ? 'negative' : 'neutral';

  html += `<div class="sim-overall-comparison">
    <div class="sim-metric"><span>Nuvarande totalpoäng</span><strong>${currentOverall.toFixed(1)}</strong></div>
    <div class="sim-arrow">\u2192</div>
    <div class="sim-metric"><span>Projicerad</span><strong>${simOverall.toFixed(1)}</strong></div>
    <div class="sim-metric ${diffClass}"><span>Förändring</span><strong>${diff > 0 ? '+' : ''}${diff.toFixed(2)}</strong></div>
  </div>`;

  // Per-pillar breakdown
  html += '<div class="sim-pillar-results">';
  for (const pillar of DECISION_TREE.children) {
    const currentPillar = collectScores(pillar, 'snigel');
    const leaves = collectLeafNodes(pillar);
    let simPillar = 0;
    let cnt = 0;
    for (const leaf of leaves) {
      const sv = simVariables[leaf.id] !== undefined ? simVariables[leaf.id] : (leaf.scores.snigel?.score || 0);
      simPillar += sv;
      cnt++;
    }
    simPillar = cnt > 0 ? simPillar / cnt : 0;
    const pd = simPillar - currentPillar;
    const pClass = pd > 0.1 ? 'positive' : pd < -0.1 ? 'negative' : 'neutral';

    html += `<div class="sim-pillar-row">
      <span>${escapeHtml(pillar.label)}</span>
      <span>${currentPillar.toFixed(1)} \u2192 ${simPillar.toFixed(1)}</span>
      <span class="${pClass}">${pd > 0 ? '+' : ''}${pd.toFixed(2)}</span>
    </div>`;
  }
  html += '</div>';

  // Ranking impact
  html += '<h4>Rankingprojektion</h4><div class="sim-rankings">';
  const rankings = companyKeys.map(k => {
    if (k === 'snigel') return { key: k, score: simOverall };
    return { key: k, score: collectScores(DECISION_TREE, k) };
  }).sort((a, b) => b.score - a.score);

  for (let i = 0; i < rankings.length; i++) {
    const r = rankings[i];
    const c = COMPANIES[r.key];
    html += `<div class="sim-rank-row ${r.key === 'snigel' ? 'highlight' : ''}">
      <span class="sim-rank">#${i + 1}</span>
      <span class="score-company-name ${r.key}">${escapeHtml(c.name)}</span>
      <span>${r.score.toFixed(1)}</span>
    </div>`;
  }
  html += '</div>';

  return html;
}

function resetSimulator() {
  simVariables = {};
  renderSimulator();
}

// ── Visualizations View ──
// Security note: All user-facing text is sanitized through escapeHtml()
// before DOM insertion. innerHTML renders app-controlled template strings only.
let currentViz = 'radar';

function renderVisualizations() {
  const container = document.getElementById('visualizations-container');
  let html = '<div class="viz-layout">';
  html += '<div class="viz-tabs">';
  html += `<button class="viz-tab ${currentViz === 'radar' ? 'active' : ''}" onclick="showViz('radar')">Radardiagram</button>`;
  html += `<button class="viz-tab ${currentViz === 'heatmap' ? 'active' : ''}" onclick="showViz('heatmap')">Värmekarta</button>`;
  html += `<button class="viz-tab ${currentViz === 'gap' ? 'active' : ''}" onclick="showViz('gap')">Gapanalys</button>`;
  html += `<button class="viz-tab ${currentViz === 'position' ? 'active' : ''}" onclick="showViz('position')">Positionskarta</button>`;
  html += '</div>';
  html += '<div class="viz-content" id="viz-content"></div>';
  html += '</div>';
  container.innerHTML = html;
  renderCurrentViz();
}

function showViz(viz) {
  currentViz = viz;
  document.querySelectorAll('.viz-tab').forEach(t => t.classList.remove('active'));
  const idx = viz === 'radar' ? 1 : viz === 'heatmap' ? 2 : viz === 'gap' ? 3 : 4;
  document.querySelector(`.viz-tab:nth-child(${idx})`).classList.add('active');
  renderCurrentViz();
}

function renderCurrentViz() {
  const content = document.getElementById('viz-content');
  if (!content) return;
  if (currentViz === 'radar') drawRadarChart(content);
  else if (currentViz === 'heatmap') renderHeatmap(content);
  else if (currentViz === 'gap') renderGapAnalysis(content);
  else if (currentViz === 'position') drawPositionMap(content);
}

function drawRadarChart(container) {
  const pillars = DECISION_TREE.children;
  const n = pillars.length;
  const size = 500;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.38;

  let svg = `<svg viewBox="0 0 ${size} ${size}" class="radar-svg">`;

  for (let ring = 2; ring <= 10; ring += 2) {
    const r = (ring / 10) * maxR;
    let points = '';
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      points += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `;
    }
    svg += `<polygon points="${points}" fill="none" stroke="var(--border)" stroke-width="0.5" opacity="0.5"/>`;
    const labelAngle = -Math.PI / 2;
    svg += `<text x="${cx + r * Math.cos(labelAngle) + 3}" y="${cy + r * Math.sin(labelAngle) - 3}" fill="var(--text-muted)" font-size="9">${ring}</text>`;
  }

  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x2 = cx + maxR * Math.cos(angle);
    const y2 = cy + maxR * Math.sin(angle);
    svg += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="var(--border)" stroke-width="0.5"/>`;
    const lx = cx + (maxR + 25) * Math.cos(angle);
    const ly = cy + (maxR + 25) * Math.sin(angle);
    const anchor = Math.abs(angle + Math.PI / 2) < 0.1 ? 'middle' : angle > -Math.PI / 2 && angle < Math.PI / 2 ? 'start' : 'end';
    svg += `<text x="${lx}" y="${ly}" text-anchor="${anchor}" dominant-baseline="middle" fill="var(--text)" font-size="11" font-weight="500">${escapeHtml(pillars[i].label)}</text>`;
  }

  const companiesToShow = ['snigel'];
  const otherScores = companyKeys.filter(k => k !== 'snigel').map(k => ({
    key: k, score: collectScores(DECISION_TREE, k)
  })).sort((a, b) => b.score - a.score);
  for (let i = 0; i < Math.min(3, otherScores.length); i++) {
    companiesToShow.push(otherScores[i].key);
  }

  for (const key of companiesToShow) {
    const c = COMPANIES[key];
    let points = '';
    for (let i = 0; i < n; i++) {
      const score = collectScores(pillars[i], key) || 0;
      const r = (score / 10) * maxR;
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      points += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `;
    }
    const opacity = key === 'snigel' ? '0.25' : '0.08';
    const strokeWidth = key === 'snigel' ? '2.5' : '1.5';
    svg += `<polygon points="${points}" fill="${c.color}" fill-opacity="${opacity}" stroke="${c.color}" stroke-width="${strokeWidth}"/>`;
  }

  svg += '</svg>';

  let legend = '<div class="radar-legend">';
  for (const key of companiesToShow) {
    const c = COMPANIES[key];
    legend += `<span class="radar-legend-item"><span class="radar-legend-dot" style="background:${c.color}"></span>${escapeHtml(c.name)}</span>`;
  }
  legend += '</div>';

  container.innerHTML = svg + legend;
}

function drawPositionMap(container) {
  const size = 500;
  const xPillar = DECISION_TREE.children.find(p => p.id === 'varumarke');
  const yPillar = DECISION_TREE.children.find(p => p.id === 'innov');

  if (!xPillar || !yPillar) {
    container.textContent = 'Kan inte rendera positionskarta: pelardata saknas';
    return;
  }

  let svg = `<svg viewBox="0 0 ${size} ${size}" class="position-map-svg">`;

  for (let i = 0; i <= 10; i += 2) {
    const x = (i / 10) * (size - 80) + 50;
    const y = size - ((i / 10) * (size - 80) + 50);
    svg += `<line x1="${x}" y1="30" x2="${x}" y2="${size - 30}" stroke="var(--border)" stroke-width="0.5" opacity="0.3"/>`;
    svg += `<line x1="30" y1="${y}" x2="${size - 30}" y2="${y}" stroke="var(--border)" stroke-width="0.5" opacity="0.3"/>`;
    svg += `<text x="${x}" y="${size - 10}" text-anchor="middle" fill="var(--text-muted)" font-size="9">${i}</text>`;
    svg += `<text x="15" y="${y + 3}" text-anchor="middle" fill="var(--text-muted)" font-size="9">${i}</text>`;
  }

  svg += `<text x="${size / 2}" y="${size}" text-anchor="middle" fill="var(--text)" font-size="12">${escapeHtml(xPillar.label)}</text>`;
  svg += `<text x="5" y="${size / 2}" text-anchor="middle" fill="var(--text)" font-size="12" transform="rotate(-90, 5, ${size / 2})">${escapeHtml(yPillar.label)}</text>`;

  for (const key of companyKeys) {
    const c = COMPANIES[key];
    const xScore = collectScores(xPillar, key) || 0;
    const yScore = collectScores(yPillar, key) || 0;
    const overall = collectScores(DECISION_TREE, key) || 5;
    const r = 8 + (overall / 10) * 12;
    const px = (xScore / 10) * (size - 80) + 50;
    const py = size - ((yScore / 10) * (size - 80) + 50);
    svg += `<circle cx="${px}" cy="${py}" r="${r}" fill="${c.color}" fill-opacity="0.6" stroke="${c.color}" stroke-width="${key === 'snigel' ? 2.5 : 1}"/>`;
    svg += `<text x="${px}" y="${py - r - 4}" text-anchor="middle" fill="var(--text)" font-size="10" font-weight="${key === 'snigel' ? '700' : '400'}">${escapeHtml(c.name)}</text>`;
  }

  svg += '</svg>';
  container.innerHTML = svg;
}

function renderHeatmap(container) {
  const pillars = DECISION_TREE.children;
  let html = '<div class="heatmap-wrapper"><table class="heatmap-table">';
  html += '<thead><tr><th></th>';
  for (const key of companyKeys) {
    html += `<th class="score-company-name ${key}">${escapeHtml(COMPANIES[key].name)}</th>`;
  }
  html += '</tr></thead><tbody>';

  for (const pillar of pillars) {
    const leaves = collectLeafNodes(pillar);
    html += `<tr class="heatmap-pillar-row"><td colspan="${companyKeys.length + 1}"><strong>${escapeHtml(pillar.label)}</strong></td></tr>`;
    for (const leaf of leaves) {
      html += `<tr><td class="heatmap-label">${escapeHtml(leaf.label)}</td>`;
      for (const key of companyKeys) {
        const score = leaf.scores[key]?.score || 0;
        const intensity = score / 10;
        const hue = intensity > 0.7 ? 142 : intensity > 0.5 ? 48 : 0;
        const sat = 70;
        const light = 95 - intensity * 40;
        html += `<td class="heatmap-cell" style="background:hsl(${hue},${sat}%,${light}%)" title="${escapeHtml(COMPANIES[key].name)}: ${score.toFixed(1)}">${score.toFixed(1)}</td>`;
      }
      html += '</tr>';
    }
  }

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

function renderGapAnalysis(container) {
  const leaves = collectLeafNodes(DECISION_TREE);
  let gaps = [];

  for (const leaf of leaves) {
    const snigelScore = leaf.scores.snigel?.score || 0;
    let bestKey = 'snigel';
    let bestScore = snigelScore;
    for (const key of companyKeys) {
      const s = leaf.scores[key]?.score || 0;
      if (s > bestScore) { bestScore = s; bestKey = key; }
    }
    if (bestKey !== 'snigel' && bestScore > snigelScore) {
      gaps.push({ leaf, snigelScore, bestKey, bestScore, gap: bestScore - snigelScore });
    }
  }

  gaps.sort((a, b) => b.gap - a.gap);

  let html = '<div class="gap-analysis">';
  html += '<h3>Snigel Gapanalys vs. Kategoriledarare</h3>';
  html += `<p class="gap-summary">${gaps.length} områden där Snigel släpar efter kategoriledararen.</p>`;

  for (const g of gaps) {
    const c = COMPANIES[g.bestKey];
    const pct = (g.gap / 10) * 100;
    html += `<div class="gap-row">
      <div class="gap-label">${escapeHtml(g.leaf.label)}</div>
      <div class="gap-bar-container">
        <div class="gap-bar snigel-bar" style="width:${(g.snigelScore / 10) * 100}%">
          <span>${g.snigelScore.toFixed(1)}</span>
        </div>
        <div class="gap-bar leader-bar ${g.bestKey}" style="width:${(g.bestScore / 10) * 100}%">
          <span>${escapeHtml(c.name)} ${g.bestScore.toFixed(1)}</span>
        </div>
      </div>
      <span class="gap-value">-${g.gap.toFixed(1)}</span>
    </div>`;
  }

  html += '</div>';
  container.innerHTML = html;
}

// ── Changelog View ──
function renderChangelog() {
  const container = document.getElementById('changelog-container');
  let html = '<div class="changelog-layout">';
  html += '<div class="changelog-header"><h3>Ändringslogg för poäng</h3>';
  if (scoreChangeLog.length > 0) {
    html += '<button class="scenario-analyze-btn" onclick="resetAllChanges()">Återställ alla ändringar</button>';
  }
  html += '</div>';

  if (scoreChangeLog.length === 0) {
    html += '<div class="changelog-empty"><p>Inga ändringar registrerade ännu.</p></div>';
  } else {
    html += '<div class="changelog-entries">';
    for (let i = scoreChangeLog.length - 1; i >= 0; i--) {
      const e = scoreChangeLog[i];
      const node = findNode(DECISION_TREE, e.nodeId);
      const companyName = COMPANIES[e.company]?.name || e.company;
      html += `<div class="changelog-entry">
        <div class="changelog-entry-header">
          <span class="score-company-name ${e.company}">${escapeHtml(companyName)}</span>
          <span class="changelog-node">${escapeHtml(node?.label || e.nodeId)}</span>
          <span class="changelog-scores">${e.oldScore?.toFixed(1) || '?'} \u2192 ${e.newScore?.toFixed(1) || '?'}</span>
          <span class="changelog-date">${e.timestamp ? new Date(e.timestamp).toLocaleDateString() : ''}</span>
          <button class="doc-delete-btn" onclick="deleteChange(${i})" title="Radera">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
          </button>
        </div>
        <div class="changelog-motivation">${escapeHtml(e.motivation || '')}</div>
      </div>`;
    }
    html += '</div>';
  }

  html += '</div>';
  container.innerHTML = html;
}

async function deleteChange(index) {
  if (!confirm('Återställ denna poängändring?')) return;
  try {
    const res = await fetch(`/api/changes/${index}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Delete failed');
    location.reload();
  } catch (err) {
    console.error('Delete error:', err);
    alert('Kunde inte återställa ändringen');
  }
}

async function resetAllChanges() {
  if (!confirm('Är du säker? Detta tar bort alla poängändringar.')) return;
  try {
    const res = await fetch('/api/changes/reset', { method: 'POST' });
    if (!res.ok) throw new Error('Reset failed');
    location.reload();
  } catch (err) {
    console.error('Reset error:', err);
  }
}

// ── Documents View ──
function renderDocuments() {
  const container = document.getElementById('documents-container');
  let html = '<div class="documents-layout">';

  // Upload area
  html += `<div class="document-upload-area" ondragover="event.preventDefault()" ondrop="event.preventDefault(); handleFileDrop(event)">
    <div class="upload-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></div>
    <p>Dra en PDF hit eller <label class="upload-link">bläddra<input type="file" accept=".pdf" onchange="handleFileSelect(event)" hidden></label></p>
  </div>`;

  // Build set of applied suggestion keys
  const appliedKeys = new Set();
  for (const e of scoreChangeLog) {
    if (e.documentId) appliedKeys.add(`${e.nodeId}::${e.company}`);
  }

  // Document list
  if (documents.length > 0) {
    html += '<div class="document-list">';
    for (const doc of documents) {
      const isExpanded = expandedDocId === doc.id;
      html += `<div class="document-card ${isExpanded ? 'expanded' : ''}" onclick="toggleDocExpand('${doc.id}')">
          <div class="document-card-header">
            <span class="document-filename">${escapeHtml(doc.filename || doc.id)}</span>
            <span class="document-status ${doc.status}">${escapeHtml(doc.status)}</span>
            ${doc.status === 'uploaded' ? `<button class="scenario-analyze-btn" onclick="event.stopPropagation(); analyzeDocument('${doc.id}')">Analysera</button>` : ''}
            ${doc.status === 'analyzed' ? `<label class="include-toggle" onclick="event.stopPropagation()"><input type="checkbox" ${doc.included ? 'checked' : ''} onchange="toggleDocumentIncluded('${doc.id}', this.checked)"></label>` : ''}
            <div class="document-card-actions">
              <button class="doc-delete-btn" onclick="event.stopPropagation(); deleteDocument('${doc.id}')" title="Radera">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              </button>
              <svg class="doc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
          <div class="document-card-body">
            ${renderDocumentSuggestions(doc, appliedKeys)}
          </div>
        </div>`;
    }
    html += '</div>';
  }

  html += '</div>';
  container.innerHTML = html;
}

function renderDocumentSuggestions(doc, appliedKeys) {
  if (!doc.suggestions || doc.suggestions.length === 0) {
    if (doc.status === 'analyzed') return '<div class="document-suggestions"><div class="doc-empty-state">Inga relevanta förslag hittades.</div></div>';
    if (doc.status === 'analyzing') return '<div class="document-suggestions"><div class="doc-empty-state">Analyserar dokument...</div></div>';
    if (doc.status === 'error') return '<div class="document-suggestions"><div class="doc-empty-state" style="color:var(--red)">Analysen misslyckades.</div></div>';
    return '';
  }

  let html = '<div class="document-suggestions">';
  html += `<div class="suggestions-header"><h4>${doc.suggestions.length} förslag från analys</h4></div>`;

  for (let i = 0; i < doc.suggestions.length; i++) {
    const s = doc.suggestions[i];
    const key = `${s.nodeId}::${s.company}`;
    const isApplied = appliedKeys.has(key);
    const node = findNode(DECISION_TREE, s.nodeId);
    const currentScore = node?.scores?.[s.company]?.score;
    const companyName = COMPANIES[s.company]?.name || s.company;
    const scoreColor = s.suggestedScore >= 8 ? 'score-color-high' : s.suggestedScore >= 6 ? 'score-color-mid' : 'score-color-low';

    html += `<div class="suggestion-row ${isApplied ? 'applied' : ''}">
        <div class="suggestion-node">
          <div class="suggestion-node-label">${escapeHtml(node?.label || s.nodeId)}</div>
          <div class="suggestion-rationale">${escapeHtml(s.rationale || '')}</div>
          ${s.excerpt ? `<div class="suggestion-excerpt">${escapeHtml(s.excerpt)}</div>` : ''}
        </div>
        <span class="suggestion-company score-company-name ${s.company}">${escapeHtml(companyName)}</span>
        <div class="suggestion-scores">
          <span style="color:var(--text-muted)">${currentScore != null ? currentScore.toFixed(1) : '?'}</span>
          <span class="suggestion-arrow">\u2192</span>
          <span class="${scoreColor}" style="font-weight:700">${s.suggestedScore.toFixed(1)}</span>
        </div>
        <span class="suggestion-confidence ${s.confidence || 'medium'}">${escapeHtml(s.confidence || 'medium')}</span>
        ${isApplied
          ? '<span class="suggestion-apply-btn applied">Tillämpad</span>'
          : `<button class="suggestion-apply-btn" onclick="event.stopPropagation(); applyDocumentSuggestion('${doc.id}', ${i})">Tillämpa</button>`
        }
      </div>`;
  }

  html += '</div>';
  return html;
}

function toggleDocExpand(docId) {
  expandedDocId = expandedDocId === docId ? null : docId;
  renderDocuments();
}

function handleFileDrop(event) {
  const files = event.dataTransfer.files;
  if (files.length > 0 && files[0].type === 'application/pdf') uploadDocument(files[0]);
}

function handleFileSelect(event) {
  const files = event.target.files;
  if (files.length > 0) uploadDocument(files[0]);
  event.target.value = '';
}

async function uploadDocument(file) {
  const formData = new FormData();
  formData.append('pdf', file);
  try {
    const res = await fetch('/api/documents/upload', { method: 'POST', body: formData });
    if (!res.ok) { const err = await res.json(); alert('Uppladdning misslyckades: ' + (err.error || 'Okänt')); return; }
    const doc = await res.json();
    documents.push(doc);
    expandedDocId = doc.id;
    renderDocuments();
  } catch (err) {
    console.error('Upload error:', err);
    alert('Uppladdning misslyckades: ' + err.message);
  }
}

async function analyzeDocument(docId) {
  const doc = documents.find(d => d.id === docId);
  if (!doc) return;
  doc.status = 'analyzing';
  renderDocuments();
  const leafNodes = collectLeafNodes(DECISION_TREE);
  try {
    const res = await fetch(`/api/documents/${docId}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leafNodes })
    });
    if (!res.ok) { doc.status = 'error'; renderDocuments(); return; }
    const result = await res.json();
    doc.status = result.status;
    doc.suggestions = result.suggestions;
    expandedDocId = docId;
    renderDocuments();
  } catch (err) {
    console.error('Analysis error:', err);
    doc.status = 'error';
    renderDocuments();
  }
}

async function applyDocumentSuggestion(docId, suggestionIndex) {
  const doc = documents.find(d => d.id === docId);
  if (!doc || !doc.suggestions[suggestionIndex]) return;
  const s = doc.suggestions[suggestionIndex];
  const node = findNode(DECISION_TREE, s.nodeId);
  if (!node?.scores?.[s.company]) return;
  const currentData = node.scores[s.company];
  const motivation = `[Dokument: ${doc.filename}] ${s.rationale || 'AI-föreslagen poänguppdatering'}`;
  const newRationale = s.rationale || currentData.rationale;
  await saveScoreChange(s.nodeId, s.company, currentData.score, s.suggestedScore, currentData.rationale, newRationale, motivation, docId);
  node.scores[s.company].score = s.suggestedScore;
  node.scores[s.company].rationale = newRationale;
  renderDocuments();
  if (selectedNode) renderDetail(selectedNode);
  renderCompare();
}

async function toggleDocumentIncluded(docId, included) {
  try {
    const res = await fetch(`/api/documents/${docId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ included })
    });
    if (!res.ok) { alert('Kunde inte ändra dokumentinkludering'); return; }
    location.reload();
  } catch (err) {
    console.error('Toggle error:', err);
  }
}

async function deleteDocument(docId) {
  const doc = documents.find(d => d.id === docId);
  if (!confirm(`Radera "${doc?.filename || docId}" och ta bort alla tillhörande poängändringar?`)) return;
  try {
    const res = await fetch(`/api/documents/${docId}`, { method: 'DELETE' });
    if (!res.ok) { alert('Kunde inte radera dokumentet'); return; }
    location.reload();
  } catch (err) {
    console.error('Delete error:', err);
  }
}

// ── Score Editing ──
let editingNodeId = null;
let editingCompany = null;

function openEditModal(nodeId, company) {
  editingNodeId = nodeId;
  editingCompany = company;
  const node = findNode(DECISION_TREE, nodeId);
  if (!node?.scores?.[company]) return;
  const data = node.scores[company];
  const companyName = COMPANIES[company]?.name || company;

  document.getElementById('edit-modal-company').textContent = companyName;
  document.getElementById('edit-modal-node').textContent = node.label;
  document.getElementById('edit-score-slider').value = data.score;
  document.getElementById('edit-score-value').textContent = data.score.toFixed(1);
  document.getElementById('edit-rationale').value = data.rationale || '';
  document.getElementById('edit-motivation').value = '';
  document.getElementById('edit-impact-preview').textContent = '';

  document.getElementById('edit-modal').classList.add('open');
  document.getElementById('edit-modal-overlay').classList.add('open');
}

function closeEditModal() {
  document.getElementById('edit-modal').classList.remove('open');
  document.getElementById('edit-modal-overlay').classList.remove('open');
  editingNodeId = null;
  editingCompany = null;
}

function updateScorePreview(value) {
  document.getElementById('edit-score-value').textContent = parseFloat(value).toFixed(1);
}

async function saveEdit() {
  if (!editingNodeId || !editingCompany) return;
  const motivation = document.getElementById('edit-motivation').value.trim();
  if (!motivation) { alert('Ange en motivering för ändringen.'); return; }

  const node = findNode(DECISION_TREE, editingNodeId);
  const oldData = node.scores[editingCompany];
  const newScore = parseFloat(document.getElementById('edit-score-slider').value);
  const newRationale = document.getElementById('edit-rationale').value.trim() || oldData.rationale;

  await saveScoreChange(editingNodeId, editingCompany, oldData.score, newScore, oldData.rationale, newRationale, motivation);

  node.scores[editingCompany].score = newScore;
  node.scores[editingCompany].rationale = newRationale;

  closeEditModal();
  renderDetail(node);
  renderCompare();
  renderProfiles();
  renderChangelog();
}

async function saveScoreChange(nodeId, company, oldScore, newScore, oldRationale, newRationale, motivation, documentId) {
  const entry = {
    nodeId, company, oldScore, newScore, oldRationale, newRationale, motivation,
    documentId: documentId || null,
    timestamp: new Date().toISOString()
  };
  try {
    const res = await fetch('/api/changes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    });
    if (res.ok) {
      const data = await res.json();
      scoreChangeLog = data.changelog;
      scoreOverrides = data.overrides;
    }
  } catch (err) {
    console.error('Save error:', err);
  }
}

// ── AI Chat ──
let aiNodeContext = null;
let aiCompanyContext = null;

function openAIPanel(nodeId) {
  aiNodeContext = nodeId ? findNode(DECISION_TREE, nodeId) : null;
  aiCompanyContext = null;
  const label = document.getElementById('ai-context-label');
  if (label) label.textContent = aiNodeContext ? `Diskuterar: ${aiNodeContext.label}` : 'Snigel AI-r\u00e5dgivare';

  document.getElementById('ai-panel').classList.add('open');
  document.getElementById('ai-overlay').classList.add('open');

  // Quick actions
  const qa = document.getElementById('ai-quick-actions');
  if (qa && aiNodeContext) {
    qa.innerHTML = [
      'Ifr\u00e5gas\u00e4tt denna bed\u00f6mning',
      'F\u00f6resl\u00e5 f\u00f6rb\u00e4ttringar f\u00f6r Snigel',
      'J\u00e4mf\u00f6r toppkonkurrenter h\u00e4r',
      'Strategiska rekommendationer'
    ].map(q => `<button class="ai-quick-btn" onclick="sendQuickMessage('${q}')">${q}</button>`).join('');
  } else if (qa) {
    qa.innerHTML = '';
  }
}

function openCompanyChat(companyKey) {
  aiNodeContext = null;
  aiCompanyContext = companyKey;
  const company = COMPANIES[companyKey];
  if (!company) return;

  // Clear previous messages for fresh company conversation
  aiMessages = [];

  const label = document.getElementById('ai-context-label');
  if (label) label.textContent = `Utforskar: ${company.name}`;

  document.getElementById('ai-panel').classList.add('open');
  document.getElementById('ai-overlay').classList.add('open');

  // Company-specific quick actions
  const qa = document.getElementById('ai-quick-actions');
  if (qa) {
    const isSnigel = companyKey === 'snigel';
    const actions = isSnigel
      ? [
          'Analysera v\u00e5ra styrkor och svagheter',
          'J\u00e4mf\u00f6r oss med st\u00f6rsta konkurrenterna',
          'Strategiska tillv\u00e4xtm\u00f6jligheter',
          'Vilka hot m\u00f6ter vi?'
        ]
      : [
          `Hur konkurrerar ${company.name} mot Snigel?`,
          `Analysera ${company.name}s styrkor och svagheter`,
          `Vad kan Snigel l\u00e4ra av ${company.name}?`,
          `Marknadsm\u00f6jligheter mot ${company.name}`
        ];
    qa.innerHTML = actions
      .map(q => `<button class="ai-quick-btn" onclick="sendQuickMessage('${escapeHtml(q)}')">${escapeHtml(q)}</button>`)
      .join('');
  }

  // Render messages (empty state with welcome)
  renderAIMessages();
}

function closeAIPanel() {
  document.getElementById('ai-panel').classList.remove('open');
  document.getElementById('ai-overlay').classList.remove('open');
  aiCompanyContext = null;
}

function sendQuickMessage(text) {
  document.getElementById('ai-input').value = text;
  sendMessage();
}

async function sendMessage() {
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  aiMessages.push({ role: 'user', content: text });
  renderAIMessages();

  // Build context
  let context = '';
  if (aiNodeContext) {
    context = `Aktuell nod: ${aiNodeContext.label} (${aiNodeContext.id}). `;
    if (aiNodeContext.scores) {
      const scoreLines = companyKeys.map(k => {
        const s = aiNodeContext.scores[k];
        return s ? `${COMPANIES[k].name}: ${s.score}/10 - ${s.rationale}` : null;
      }).filter(Boolean).join('; ');
      context += `Po\u00e4ng: ${scoreLines}`;
    }
  } else if (aiCompanyContext) {
    const company = COMPANIES[aiCompanyContext];
    if (company) {
      context = `F\u00f6retag i fokus: ${company.name} (${company.country}). `;
      context += `Plattform: ${company.platform}. `;

      // Add specs
      const specLines = Object.entries(company.specs).map(([k, v]) => `${k}: ${v}`).join(', ');
      context += `Specifikationer: ${specLines}. `;

      // Add strengths and weaknesses
      if (company.strengths?.length) {
        context += `Styrkor: ${company.strengths.join('; ')}. `;
      }
      if (company.weaknesses?.length) {
        context += `Svagheter: ${company.weaknesses.join('; ')}. `;
      }

      // Add all pillar scores for this company
      const overallScore = collectScores(DECISION_TREE, aiCompanyContext);
      context += `Totalpo\u00e4ng: ${overallScore !== null ? overallScore.toFixed(1) : 'ej bed\u00f6md'}/10. `;
      const pillarScores = DECISION_TREE.children.map(pillar => {
        const ps = collectScores(pillar, aiCompanyContext);
        return ps !== null ? `${pillar.label}: ${ps.toFixed(1)}/10` : null;
      }).filter(Boolean).join(', ');
      if (pillarScores) {
        context += `Pelarpo\u00e4ng: ${pillarScores}. `;
      }

      // Add Snigel comparison context
      if (aiCompanyContext !== 'snigel') {
        const snigelOverall = collectScores(DECISION_TREE, 'snigel');
        context += `(Snigel Design AB totalpo\u00e4ng: ${snigelOverall !== null ? snigelOverall.toFixed(1) : 'ej bed\u00f6md'}/10 f\u00f6r j\u00e4mf\u00f6relse.)`;
      }
    }
  }

  // Show typing indicator
  const messagesDiv = document.getElementById('ai-messages');
  const typing = document.createElement('div');
  typing.className = 'ai-message assistant typing';
  typing.textContent = 'Tänker...';
  messagesDiv.appendChild(typing);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: aiMessages, context })
    });
    const data = await res.json();
    typing.remove();

    if (data.content) {
      aiMessages.push({ role: 'assistant', content: data.content });
    } else if (data.error) {
      aiMessages.push({ role: 'assistant', content: `Fel: ${data.error}` });
    }
    renderAIMessages();
  } catch (err) {
    typing.remove();
    aiMessages.push({ role: 'assistant', content: `Anslutningsfel: ${err.message}` });
    renderAIMessages();
  }
}

function renderAIMessages() {
  const messagesDiv = document.getElementById('ai-messages');
  let html = '';
  for (const msg of aiMessages) {
    const cssClass = msg.role === 'user' ? 'user' : 'assistant';
    const content = msg.role === 'assistant' ? formatMarkdown(msg.content) : escapeHtml(msg.content);
    html += `<div class="ai-message ${cssClass}">${content}</div>`;
  }
  messagesDiv.innerHTML = html;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ── Utilities ──
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatMarkdown(text) {
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  const lines = html.split('\n');
  const output = [];
  let inList = false;
  let listType = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h3 = line.match(/^### (.+)$/);
    const h2 = line.match(/^## (.+)$/);
    const h1 = line.match(/^# (.+)$/);
    if (h3) { closeList(); output.push(`<h4>${h3[1]}</h4>`); continue; }
    if (h2) { closeList(); output.push(`<h3>${h2[1]}</h3>`); continue; }
    if (h1) { closeList(); output.push(`<h2>${h1[1]}</h2>`); continue; }
    if (/^---+$/.test(line.trim())) { closeList(); output.push('<hr>'); continue; }

    const ul = line.match(/^[\s]*[-*] (.+)$/);
    if (ul) {
      if (!inList || listType !== 'ul') { closeList(); output.push('<ul>'); inList = true; listType = 'ul'; }
      output.push(`<li>${ul[1]}</li>`);
      continue;
    }

    const ol = line.match(/^[\s]*(\d+)\. (.+)$/);
    if (ol) {
      if (!inList || listType !== 'ol') { closeList(); output.push('<ol>'); inList = true; listType = 'ol'; }
      output.push(`<li>${ol[2]}</li>`);
      continue;
    }

    closeList();
    if (line.trim() === '') { output.push('<br>'); }
    else { output.push(`<p>${line}</p>`); }
  }
  closeList();
  return output.join('\n');

  function closeList() {
    if (inList) {
      output.push(listType === 'ol' ? '</ol>' : '</ul>');
      inList = false;
      listType = '';
    }
  }
}

// ── Initialization ──
async function init() {
  // Load persisted tree structure
  try {
    const treeRes = await fetch('/api/tree');
    const treeData = await treeRes.json();
    if (treeData.tree) {
      DECISION_TREE = treeData.tree;
    }
  } catch (e) {
    console.error('Failed to load tree:', e);
  }

  // Load persisted changes
  try {
    const changesRes = await fetch('/api/changes');
    const changesData = await changesRes.json();
    scoreChangeLog = changesData.changelog || [];
    scoreOverrides = changesData.overrides || {};

    // Apply overrides to DECISION_TREE
    for (const [key, override] of Object.entries(scoreOverrides)) {
      const [nodeId, company] = key.split('::');
      const node = findNode(DECISION_TREE, nodeId);
      if (node?.scores?.[company]) {
        node.scores[company].score = override.score;
        if (override.rationale) node.scores[company].rationale = override.rationale;
      }
    }
  } catch (e) {
    console.error('Failed to load changes:', e);
  }

  // Load documents
  try {
    const docsRes = await fetch('/api/documents');
    const docsData = await docsRes.json();
    documents = docsData.documents || [];
  } catch (e) {
    console.error('Failed to load documents:', e);
  }

  renderTree();
}

init();

/* ═══════════════════════════════════════════════════════
   Tree Structure Editor
   All rendering uses DOM APIs (createElement/textContent)
   to avoid innerHTML-based XSS risks.
   ═══════════════════════════════════════════════════════ */

function generateNodeId() {
  return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function findParentInTree(tree, nodeId) {
  if (tree.children) {
    for (const child of tree.children) {
      if (child.id === nodeId) return tree;
      const found = findParentInTree(child, nodeId);
      if (found) return found;
    }
  }
  return null;
}

function openTreeEditor() {
  const overlay = document.getElementById('tree-editor-overlay');
  overlay.style.display = 'flex';
  renderEditorTree();
}

function closeTreeEditor() {
  document.getElementById('tree-editor-overlay').style.display = 'none';
}

function renderEditorTree() {
  const body = document.getElementById('tree-editor-body');
  while (body.firstChild) body.removeChild(body.firstChild);
  body.appendChild(renderEditorNode(DECISION_TREE, 0));
}

function renderEditorNode(node, depth) {
  const div = document.createElement('div');
  div.className = `tree-editor-node depth-${Math.min(depth, 4)}`;
  div.dataset.nodeId = node.id;

  const hasChildren = node.children && node.children.length > 0;
  const isRoot = node.id === 'root';
  const isLeaf = !hasChildren;

  const header = document.createElement('div');
  header.className = 'tree-editor-node-header';

  const labelInput = document.createElement('input');
  labelInput.type = 'text';
  labelInput.className = 'tree-editor-node-label';
  labelInput.value = node.label;
  labelInput.addEventListener('change', () => updateEditorField(node.id, 'label', labelInput.value));
  header.appendChild(labelInput);

  const weightInput = document.createElement('input');
  weightInput.type = 'text';
  weightInput.className = 'tree-editor-node-weight';
  weightInput.value = node.weight || '';
  weightInput.placeholder = '0%';
  weightInput.addEventListener('change', () => updateEditorField(node.id, 'weight', weightInput.value));
  header.appendChild(weightInput);

  if (isLeaf) {
    const badge = document.createElement('span');
    badge.className = 'tree-editor-node-leaf-badge';
    badge.textContent = 'löv';
    header.appendChild(badge);
  }

  const actions = document.createElement('div');
  actions.className = 'tree-editor-node-actions';

  const descBtn = document.createElement('button');
  descBtn.className = 'tree-editor-desc-btn';
  descBtn.textContent = 'Beskr.';
  descBtn.addEventListener('click', () => {
    const descInput = div.querySelector('.tree-editor-node-description');
    if (descInput) descInput.classList.toggle('visible');
  });
  actions.appendChild(descBtn);

  const addBtn = document.createElement('button');
  addBtn.className = 'tree-editor-add-btn';
  addBtn.textContent = '+ Lägg till';
  addBtn.addEventListener('click', () => addEditorChild(node.id));
  actions.appendChild(addBtn);

  if (hasChildren) {
    const aiBtn = document.createElement('button');
    aiBtn.className = 'tree-editor-ai-btn';
    aiBtn.textContent = 'AI Balansera';
    aiBtn.addEventListener('click', () => aiBalanceWeights(node.id, aiBtn));
    actions.appendChild(aiBtn);
  }

  if (!isRoot) {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'tree-editor-remove-btn';
    removeBtn.textContent = '\u2715';
    removeBtn.addEventListener('click', () => removeEditorNode(node.id));
    actions.appendChild(removeBtn);
  }

  header.appendChild(actions);
  div.appendChild(header);

  const descInput = document.createElement('input');
  descInput.type = 'text';
  descInput.className = 'tree-editor-node-description';
  descInput.value = node.description || '';
  descInput.placeholder = 'Nodbeskrivning...';
  descInput.addEventListener('change', () => updateEditorField(node.id, 'description', descInput.value));
  div.appendChild(descInput);

  if (hasChildren) {
    const weightSum = node.children.reduce((sum, child) => {
      const w = parseFloat((child.weight || '0').replace('%', ''));
      return sum + (isNaN(w) ? 0 : w);
    }, 0);
    const rounded = Math.round(weightSum * 100) / 100;
    if (Math.abs(rounded - 100) > 0.01) {
      const warning = document.createElement('div');
      warning.className = 'tree-editor-weight-warning';
      warning.textContent = `Barnvikter summerar till ${rounded}% (ska vara 100%)`;
      div.appendChild(warning);
    }
  }

  if (hasChildren) {
    const childrenDiv = document.createElement('div');
    childrenDiv.className = 'tree-editor-children';
    node.children.forEach(child => {
      childrenDiv.appendChild(renderEditorNode(child, depth + 1));
    });
    div.appendChild(childrenDiv);
  }

  return div;
}

function updateEditorField(nodeId, field, value) {
  const node = findNode(DECISION_TREE, nodeId);
  if (node) {
    node[field] = value;
    if (field === 'weight') renderEditorTree();
  }
}

function addEditorChild(parentId) {
  const parent = findNode(DECISION_TREE, parentId);
  if (!parent) return;

  if (!parent.children) parent.children = [];

  const defaultScores = {};
  for (const key of companyKeys) {
    defaultScores[key] = { score: 5.0, rationale: 'Standardpoäng \u2014 uppdatera med bed\u00f6mning.' };
  }

  const newNode = {
    id: generateNodeId(),
    label: 'Ny nod',
    weight: '0%',
    description: '',
    scores: defaultScores
  };

  parent.children.push(newNode);

  if (parent.scores && parent.children.length === 1) {
    delete parent.scores;
  }

  renderEditorTree();
}

function removeEditorNode(nodeId) {
  const node = findNode(DECISION_TREE, nodeId);
  if (!node) return;

  const hasChildren = node.children && node.children.length > 0;
  if (hasChildren) {
    if (!confirm('Ta bort "' + node.label + '" och alla undernoder?')) return;
  }

  const parent = findParentInTree(DECISION_TREE, nodeId);
  if (parent && parent.children) {
    parent.children = parent.children.filter(c => c.id !== nodeId);

    if (parent.children.length === 0) {
      delete parent.children;
      if (!parent.scores) {
        const defaultScores = {};
        for (const key of companyKeys) {
          defaultScores[key] = { score: 5.0, rationale: 'Standardpoäng \u2014 uppdatera med bed\u00f6mning.' };
        }
        parent.scores = defaultScores;
      }
    }
  }

  renderEditorTree();
}

async function aiBalanceWeights(nodeId, btnElement) {
  const node = findNode(DECISION_TREE, nodeId);
  if (!node || !node.children || !node.children.length) return;

  if (btnElement) {
    btnElement.disabled = true;
    btnElement.textContent = 'Balanserar...';
  }

  try {
    const res = await fetch('/api/tree/ai-balance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ node, originalTree: DEFAULT_DECISION_TREE })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'AI-balansering misslyckades');
    }

    const { balancedNode } = await res.json();
    if (balancedNode && balancedNode.children) {
      for (const balancedChild of balancedNode.children) {
        const treeChild = node.children.find(c => c.id === balancedChild.id);
        if (treeChild && balancedChild.weight) {
          treeChild.weight = balancedChild.weight;
        }
      }
    }

    renderEditorTree();
  } catch (err) {
    console.error('AI balance error:', err);
    alert('AI Balansering misslyckades: ' + err.message);
  } finally {
    if (btnElement) {
      btnElement.disabled = false;
      btnElement.textContent = 'AI Balansera';
    }
  }
}

async function saveTreeEdits() {
  try {
    const res = await fetch('/api/tree', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tree: DECISION_TREE })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Sparning misslyckades');
    }

    closeTreeEditor();
    renderTree();

    if (selectedNode) {
      const updated = findNode(DECISION_TREE, selectedNode.id);
      if (updated) {
        selectedNode = updated;
        renderDetail(updated, selectedNodePath);
      }
    }
  } catch (err) {
    console.error('Save tree error:', err);
    alert('Kunde inte spara tr\u00e4d: ' + err.message);
  }
}

async function resetTreeToDefault() {
  if (!confirm('\u00c5terst\u00e4ll beslutstr\u00e4det till originalstrukturen? Alla anpassade \u00e4ndringar f\u00f6rloras.')) return;

  try {
    await fetch('/api/tree', { method: 'DELETE' });
    DECISION_TREE = JSON.parse(JSON.stringify(DEFAULT_DECISION_TREE));
    renderTree();
    closeTreeEditor();
  } catch (err) {
    console.error('Reset tree error:', err);
    alert('Kunde inte \u00e5terst\u00e4lla tr\u00e4d: ' + err.message);
  }
}

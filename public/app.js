/* ═══════════════════════════════════════════════════════
   Luleå-Class Decision Tool — Application Logic
   ═══════════════════════════════════════════════════════ */

// ── Decision Tree Data ──
const DECISION_TREE = {
  id: "root",
  label: "Luleå-Class Procurement Decision",
  weight: "100%",
  description: "Sweden is procuring four Luleå-class surface combatants (frigates) to replace the Visby corvettes as the backbone of the Swedish Navy's surface fleet. This SEK 40-60 billion procurement represents one of Sweden's largest ever defence acquisitions, with the decision expected in early 2026.",
  children: [
    {
      id: "cap",
      label: "Operational Capability",
      weight: "35%",
      description: "The ships must deliver NATO-grade air defence, ASW, surface warfare, and maritime force command capabilities. Sweden explicitly frames this as a contribution to NATO's Integrated Air and Missile Defence (IAMD) with emphasis on endurance and multi-domain operations in the Baltic, North Sea, and Arctic.",
      influences: [
        { text: "NATO IAMD requirements pull", level: "high" },
        { text: "Swedish Navy operational doctrine", level: "high" },
        { text: "Lessons from Ukraine conflict", level: "medium" },
        { text: "Sea Ceptor/CAMM on Visby (doctrinal direction)", level: "medium" }
      ],
      children: [
        {
          id: "cap-aaw",
          label: "Air Defence & IAMD",
          weight: "12%",
          description: "The primary capability gap driving the Luleå-class programme. Ships must carry longer-range interceptors (Aster 30-class) and integrate into NATO's IAMD architecture, providing area air defence beyond the point-defence capability of current Visby corvettes with Sea Ceptor/CAMM.",
          influences: [
            { text: "Aster 30 vs CAMM-ER debate", level: "high" },
            { text: "VLS cell count (16-32 cells)", level: "high" },
            { text: "Territorial air defence SEK 15B programme synergy", level: "medium" }
          ],
          children: [
            {
              id: "cap-aaw-radar",
              label: "Radar System (AESA)",
              weight: "4%",
              description: "The ship's radar suite must perform both air surveillance and fire control in high-threat environments. Key discriminator between candidates: Sea Fire 500 (fixed-panel AESA, FDI), Giraffe 4A/1X (rotating AESA, Saab), or to-be-specified NATO-standard radar (Navantia).",
              influences: [
                { text: "Sensor fusion with GlobalEye/Erieye", level: "high" },
                { text: "Saab radar ecosystem (Giraffe) vs Thales (Sea Fire)", level: "high" }
              ],
              scores: {
                "naval-group": { score: 9.0, rationale: "Sea Fire 500 is an in-service, fixed-panel AESA radar with proven fire-control integration. Already operational on FDI lead ship Amiral Ronarc'h. Digital-first architecture." },
                "babcock-saab": { score: 7.5, rationale: "Saab Giraffe 4A and 1X radars offer seamless integration with Swedish 9LV CMS. Rotating AESA design. Already in NATO service. Sensor fusion advantage with Swedish C2 ecosystem." },
                "navantia": { score: 5.5, rationale: "Radar to be specified — ALFA 4000 designed for NATO-standard radar integration. No confirmed sensor choice yet, creating uncertainty. Could integrate either Saab or third-party radar." }
              }
            },
            {
              id: "cap-aaw-vls",
              label: "VLS & Missile Configuration",
              weight: "4%",
              description: "Vertical Launch System cell count and missile types are critical. FDI natively uses Sylver A50 with Aster 15/30. Alternatives include Mk 41 VLS (SM-2/SM-6 family) or scaled CAMM-ER installation. Sweden needs mix of local and wide-area defence missiles.",
              influences: [
                { text: "Aster 30 native integration on FDI", level: "high" },
                { text: "Visby CAMM precedent (doctrinal continuity)", level: "medium" },
                { text: "US export control on Mk 41/SM-series", level: "medium" }
              ],
              scores: {
                "naval-group": { score: 9.0, rationale: "Native Sylver A50 VLS with Aster 15/30 integration. French Navy moving from 16 to 32 cells. Proven area air defence capability to 120km+. No adaptation needed." },
                "babcock-saab": { score: 6.5, rationale: "Space reserved for 16-28 VLS cells. Must demonstrate integration of Aster 30 or equivalent NATO-standard alternative (Mk 41). Integration work required but flexible architecture." },
                "navantia": { score: 6.0, rationale: "16 VLS cells planned. Designed for NATO-standard missile integration but specific VLS/missile pairing not yet confirmed. Lower cell count than competitors." }
              }
            },
            {
              id: "cap-aaw-iamd",
              label: "NATO IAMD Integration",
              weight: "2.5%",
              description: "Ships must operate as sensor-shooter nodes within NATO's Integrated Air and Missile Defence architecture, including Link 16 data sharing, cooperative engagement capability, and integration with ground-based Patriot/IRIS-T systems.",
              influences: [
                { text: "Sweden's NATO accession (March 2024)", level: "high" },
                { text: "Interoperability standards becoming mandatory", level: "high" }
              ],
              scores: {
                "naval-group": { score: 8.5, rationale: "FDI designed as NATO-integrated platform from inception. Sea Fire + Aster suite proven in French Navy NATO exercises. Strong IAMD architecture." },
                "babcock-saab": { score: 7.5, rationale: "9LV CMS has extensive NATO integration track record (250+ platforms). Link 16 and cooperative engagement capability. Swedish C2 ecosystem provides unique national integration advantage." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 explicitly designed for NATO force structures. Spanish Navy has extensive NATO operational experience. Integration pathway credible but less proven on this specific platform." }
              }
            },
            {
              id: "cap-aaw-cuas",
              label: "Counter-UAS Capability",
              weight: "1.5%",
              description: "FMV explicitly references lessons from Ukraine — drones and unmanned threats require current and future countermeasures. Ships need integrated counter-UAS systems for drone swarms, loitering munitions, and low-flying cruise missiles in cluttered coastal environments.",
              influences: [
                { text: "Ukraine conflict lessons (FMV cited)", level: "high" },
                { text: "Baltic littoral clutter challenges", level: "medium" }
              ],
              scores: {
                "naval-group": { score: 7.5, rationale: "Sea Fire 500's digital architecture enables rapid software updates for emerging threats. French Navy actively developing counter-UAS doctrine. Bofors 40mm/57mm integration possible." },
                "babcock-saab": { score: 7.0, rationale: "Bofors 57mm Mk3 gun confirmed — excellent for counter-UAS with programmable ammunition. Saab developing directed-energy and electronic warfare counter-UAS solutions." },
                "navantia": { score: 6.0, rationale: "Counter-UAS capability to be defined. Navantia's broader portfolio includes counter-UAS concepts but specific ALFA 4000 integration plan not detailed." }
              }
            }
          ]
        },
        {
          id: "cap-asw",
          label: "Anti-Submarine Warfare",
          weight: "7%",
          description: "ASW is a core mission area alongside AAW. The ships must carry an ASW helicopter (MH-60R class), towed sonar arrays, and torpedo systems for deep-water submarine hunting in the North Sea and Arctic, as well as shallow-water Baltic operations.",
          influences: [
            { text: "Russian submarine threat in Baltic/North Atlantic", level: "high" },
            { text: "MH-60R helicopter acquisition linked to programme", level: "high" },
            { text: "Subsea infrastructure protection mission", level: "medium" }
          ],
          children: [
            {
              id: "cap-asw-sonar",
              label: "Sonar Suite",
              weight: "2%",
              description: "Hull-mounted sonar for shallow water plus towed array for deep water operations. Critical for both Baltic littoral and North Atlantic/Arctic deep-water ASW missions.",
              scores: {
                "naval-group": { score: 7.5, rationale: "FDI has integrated ASW sonar suite. Thales sonar systems well-proven. Adaptation for Swedish-specific requirements (Baltic shallow water + Arctic deep water) needed." },
                "babcock-saab": { score: 7.0, rationale: "Sonar suite to be specified for Swedish configuration. Arrowhead platform designed with ASW mission in mind. Integration with Swedish torpedo systems required." },
                "navantia": { score: 6.5, rationale: "ALFA 4000 ASW sonar to be specified. Navantia has experience with ASW frigates (F-100 series) but specific sonar selection for Swedish requirements not disclosed." }
              }
            },
            {
              id: "cap-asw-helo",
              label: "ASW Helicopter Capability",
              weight: "3%",
              description: "Full hangar and flight deck for medium ASW helicopter (MH-60R Seahawk class). Armed Forces budget explicitly links Luleå-class with acquisition of new shipborne ASW helicopter. Critical capability enabler for deep-water operations.",
              scores: {
                "naval-group": { score: 8.0, rationale: "FDI has proven helicopter facilities (hangar + flight deck) for medium helicopters. Aviation facilities already qualified on lead ship. Full MH-60R class accommodation." },
                "babcock-saab": { score: 8.5, rationale: "Arrowhead 120 explicitly designed with full hangar for medium helicopters and potential uncrewed rotary aircraft. Flight deck/hangar accommodates MH-60R. Strong aviation integration concept." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 helicopter facilities expected but detailed accommodation specifications not publicly available. Navantia has helicopter integration experience from F-100/F-110 programmes." }
              }
            },
            {
              id: "cap-asw-torp",
              label: "Torpedo & ASW Weapons",
              weight: "2%",
              description: "Lightweight torpedo systems, depth charges, and potential integration with Swedish torpedo systems. Must address both Baltic shallow-water and deep-water scenarios.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI equipped with torpedo tubes for MU90 lightweight torpedoes. Integration with Swedish-preference torpedo systems would require adaptation." },
                "babcock-saab": { score: 7.5, rationale: "Swedish combat system integration enables natural fit with Swedish Navy preferred torpedo systems. Saab has integration experience with Bofors/Saab torpedo weapons." },
                "navantia": { score: 6.5, rationale: "Torpedo integration to be specified. ALFA 4000 designed for NATO-standard torpedo systems. Adaptation for Swedish-specific systems feasible but unconfirmed." }
              }
            }
          ]
        },
        {
          id: "cap-suw",
          label: "Surface Warfare",
          weight: "5%",
          description: "Anti-surface capability including anti-ship missiles, naval gun systems, and electronic warfare. Multi-domain employment across the conflict spectrum — peace, crisis, and war. Ships must engage surface targets effectively across all threat levels.",
          children: [
            {
              id: "cap-suw-ashm",
              label: "Anti-Ship Missiles",
              weight: "2%",
              description: "Anti-ship missile system integration. Options include RBS15 Mk4 (Swedish), NSM (Norwegian), or Exocet (French). Swedish industrial preference may favor RBS15 continuation.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI natively carries Exocet MM40 Block 3. Integration of Swedish-preferred RBS15 would require adaptation. Exocet is NATO-proven but not Swedish industrial preference." },
                "babcock-saab": { score: 8.5, rationale: "Natural integration of Saab RBS15 Mk4 via 9LV CMS. Swedish combat system ensures seamless anti-ship missile integration. Strongest domestic solution." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 designed for national weapon system integration. Can accommodate RBS15 or NATO-standard alternatives. Flexibility stated but integration unproven." }
              }
            },
            {
              id: "cap-suw-gun",
              label: "Naval Gun System",
              weight: "1.5%",
              description: "Bofors 57mm Mk3 is expected for continuity with Swedish naval doctrine. Dual-purpose capability against surface, air, and counter-UAS targets with programmable ammunition.",
              scores: {
                "naval-group": { score: 6.5, rationale: "FDI's baseline French configuration uses a 76mm gun. Integration of Bofors 57mm Mk3 possible but requires design adaptation and would diverge from proven French configuration." },
                "babcock-saab": { score: 9.0, rationale: "Bofors 57mm Mk3 confirmed in the offer. Natural fit with Swedish industrial base and naval doctrine. Programmable ammunition capability. Already specified." },
                "navantia": { score: 7.5, rationale: "ALFA 4000 can integrate Bofors 57mm Mk3. Navantia has experience with various gun systems. Integration pathway straightforward." }
              }
            },
            {
              id: "cap-suw-ew",
              label: "Electronic Warfare Suite",
              weight: "1.5%",
              description: "Comprehensive EW suite for self-protection and offensive electronic attack. Must operate in the contested electromagnetic environment of the Baltic, detecting and countering anti-ship missile seekers, radar threats, and communications intelligence.",
              scores: {
                "naval-group": { score: 8.0, rationale: "FDI has integrated Thales EW suite. French Navy has extensive EW capability. Proven in-service system with identified performance baseline." },
                "babcock-saab": { score: 8.0, rationale: "Saab EW systems integration via 9LV CMS. Saab has deep EW expertise across platforms. Swedish-specific EW requirements naturally addressed." },
                "navantia": { score: 6.5, rationale: "EW suite to be specified for ALFA 4000. Navantia typically integrates third-party EW systems. Selection and integration pathway not yet detailed." }
              }
            }
          ]
        },
        {
          id: "cap-cmd",
          label: "Maritime Force Command",
          weight: "4%",
          description: "Sjöstyrkeledning — a key added function per the Riksdag proposition. Ships must serve as maritime force command platforms, integrating into Swedish air command-and-surveillance systems and providing command capability for naval task groups.",
          influences: [
            { text: "Riksdag proposition explicit requirement", level: "high" },
            { text: "Integration with Swedish air C2/surveillance", level: "high" },
            { text: "System-of-Systems with GlobalEye", level: "medium" }
          ],
          children: [
            {
              id: "cap-cmd-c2",
              label: "Command & Control Systems",
              weight: "1.5%",
              description: "On-board C2 infrastructure for task force command, including additional command spaces, communication links, and staff positions beyond single-ship operations.",
              scores: {
                "naval-group": { score: 7.5, rationale: "FDI has staff officer positions and C2 facilities. Adaptation for Swedish C2 systems required but physical infrastructure exists." },
                "babcock-saab": { score: 8.5, rationale: "Saab 9LV CMS is the Swedish Navy's native C2 backbone. Direct integration with national command architecture. Lowest adaptation risk for Swedish force command requirements." },
                "navantia": { score: 6.5, rationale: "ALFA 4000 command facilities to be specified. Designed for NATO command concepts but Swedish-specific C2 integration requires full adaptation." }
              }
            },
            {
              id: "cap-cmd-integ",
              label: "Swedish C2 Integration",
              weight: "1.5%",
              description: "Integration with Swedish armed forces command and surveillance systems, including air force Stridsledning, maritime domain awareness networks, and national security infrastructure.",
              scores: {
                "naval-group": { score: 6.0, rationale: "Requires significant adaptation to integrate with Swedish national C2 architecture. French C2 concepts differ from Swedish structure. Saab partnership may mitigate." },
                "babcock-saab": { score: 9.5, rationale: "Saab 9LV CMS already integrated into Swedish C2 ecosystem. Direct interface with Stridsledning and national surveillance. Lowest integration risk by far." },
                "navantia": { score: 6.0, rationale: "Full C2 integration with Swedish systems required from scratch. ALFA 4000 designed for national system integration but no Swedish-specific work demonstrated." }
              }
            },
            {
              id: "cap-cmd-comms",
              label: "Multi-Domain Communications",
              weight: "1%",
              description: "Secure NATO-standard and Swedish national communications, including SATCOM, Link 16, and emerging datalinks for multi-domain operations.",
              scores: {
                "naval-group": { score: 7.5, rationale: "FDI has comprehensive NATO communications suite. Link 16, SATCOM, and secure French military communications. Adaptation for Swedish national systems needed." },
                "babcock-saab": { score: 8.0, rationale: "Saab provides integrated communications with Swedish national standards. NATO Link 16 integration proven. Dual Swedish-NATO communications architecture." },
                "navantia": { score: 6.5, rationale: "NATO-standard communications designed in. Spanish Navy has NATO comms experience. Swedish national communications require full integration." }
              }
            }
          ]
        },
        {
          id: "cap-end",
          label: "Endurance & Seakeeping",
          weight: "4%",
          description: "Ships must stay at sea longer than current corvettes, operating across Baltic, North Sea, and Arctic regions. FMV explicitly compares endurance to support vessel HMS Carlskrona. Shift from days-long patrol to weeks-long sustained operations.",
          influences: [
            { text: "North Atlantic/Arctic operational requirement", level: "high" },
            { text: "Sea lines of communication (SLOC) protection", level: "high" },
            { text: "Baltic shallow-water operations", level: "medium" }
          ],
          children: [
            {
              id: "cap-end-range",
              label: "Operational Range & Endurance",
              weight: "1.5%",
              description: "Fuel capacity, provisions, and self-sufficiency for extended blue-water operations. Must sustain weeks-long patrols in the North Atlantic.",
              scores: {
                "naval-group": { score: 8.0, rationale: "FDI designed for ocean-going operations with French Navy's blue-water doctrine. 4,500t displacement provides good endurance baseline. Proven long-range patrol capability." },
                "babcock-saab": { score: 8.0, rationale: "4,650t displacement — largest of the three candidates. Arrowhead hull designed for ocean-going endurance. Good fuel and provisions capacity." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 at 4,000t is the smallest candidate. Adequate for regional operations but may have less endurance margin for extended North Atlantic patrols." }
              }
            },
            {
              id: "cap-end-arctic",
              label: "Arctic/North Atlantic Capability",
              weight: "1%",
              description: "Seakeeping in rough North Atlantic conditions, ice-strengthening, and cold-weather operations. High sea states and harsh conditions in the Arctic operational environment.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI hull designed for ocean conditions but French Navy doctrine centres on warmer waters. Arctic-specific adaptations (ice, cold weather) would need adding." },
                "babcock-saab": { score: 8.0, rationale: "Arrowhead concept explicitly pitched for Baltic/North Sea/Arctic operations. UK Royal Navy's North Atlantic experience informs design. Steel hull suitable for ice conditions." },
                "navantia": { score: 6.5, rationale: "Spanish Navy operates primarily in temperate/Mediterranean waters. ALFA 4000 Arctic adaptations would need significant engineering. Weakest Arctic operational pedigree." }
              }
            },
            {
              id: "cap-end-prop",
              label: "Propulsion System",
              weight: "1.5%",
              description: "Likely CODLAG or CODAG arrangement balancing high-speed intercept capability with ultra-quiet low-speed operation for sonar deployments. Acoustic signature management critical for ASW mission.",
              scores: {
                "naval-group": { score: 8.0, rationale: "FDI uses CODAD propulsion with proven acoustic management. French naval propulsion engineering is mature. Electric drive option available for quiet operations." },
                "babcock-saab": { score: 7.5, rationale: "Propulsion to be specified for Swedish configuration. Arrowhead platform adaptable to CODLAG/CODAG. Design flexibility but final propulsion choice not confirmed." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 propulsion arrangement to be specified. Navantia has experience with various propulsion configurations from F-100/F-110 programmes." }
              }
            }
          ]
        },
        {
          id: "cap-future",
          label: "Future-Proofing & Growth",
          weight: "3%",
          description: "FMV describes deliberate reserved volume/space for future upgrades across a 40-year lifecycle baseline. Modern threat adaptation including counter-UAS, unmanned platform integration, and modular mission capabilities.",
          influences: [
            { text: "40-year lifecycle requirement (FMV stated)", level: "high" },
            { text: "Unmanned systems evolution", level: "medium" },
            { text: "Technology obsolescence management", level: "medium" }
          ],
          children: [
            {
              id: "cap-future-growth",
              label: "Growth Margin",
              weight: "1%",
              description: "Physical space and weight margin for future weapon systems, sensors, and equipment. Ships must accommodate unpredictable capability additions over 40 years.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI described as somewhat smaller than newer-generation designs. Growth margin debate noted in reporting. 4,500t displacement provides reasonable but not exceptional growth room." },
                "babcock-saab": { score: 8.0, rationale: "Largest displacement at 4,650t provides the most physical growth margin. Arrowhead design philosophy emphasizes adaptability. Composite superstructure reduces topside weight." },
                "navantia": { score: 6.5, rationale: "Smallest candidate at 4,000t. Growth margin may be more constrained. Light-frigate concept inherently has less headroom for future additions." }
              }
            },
            {
              id: "cap-future-unmanned",
              label: "Unmanned Platform Integration",
              weight: "1%",
              description: "Capability to deploy and recover unmanned aerial, surface, and underwater vehicles. Sweden's capability requirements include unmanned-platform integration as part of the desired ship profile.",
              scores: {
                "naval-group": { score: 7.5, rationale: "FDI has 'digital-first' architecture facilitating unmanned systems integration. French Navy actively developing unmanned naval concepts. Multi-mission deck space available." },
                "babcock-saab": { score: 8.0, rationale: "Aviation facilities designed for both helicopters and uncrewed rotary aircraft. Saab has UAV expertise across platforms. Flexible mission bay concept supports UUVs and USVs." },
                "navantia": { score: 6.5, rationale: "ALFA 4000 unmanned platform integration plans not detailed. Navantia has some UxV experience but specific integration concepts for Swedish requirements not disclosed." }
              }
            },
            {
              id: "cap-future-modular",
              label: "Modular Mission Capability",
              weight: "1%",
              description: "Reconfigurable mission spaces for adapting to different operational scenarios — mine countermeasures, special operations support, humanitarian assistance, subsea infrastructure protection.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI has multi-mission deck area. 'Frégate de Défense et d'Intervention' concept implies mission flexibility. Modular capabilities defined but not as extensive as some designs." },
                "babcock-saab": { score: 7.5, rationale: "Arrowhead design includes modular mission bay concept. UUV/USV deployment capability. Multi-mission flexibility aligned with Swedish operational requirements." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 designed for multi-mission flexibility. Navantia emphasizes adaptable mission spaces. Concept-level modularity described but not detailed." }
              }
            }
          ]
        }
      ]
    },
    {
      id: "del",
      label: "Delivery & Schedule Risk",
      weight: "30%",
      description: "FMV explicitly frames the process around maturity and speed. The 'catalogue ship' approach aims to halve the traditional newbuild timeline. Contract target: H1 2026. First two ships in service by 2030. All four by 2035. Design maturity and production readiness are critical discriminators.",
      influences: [
        { text: "Schedule pressure as forcing function (FMV stated)", level: "high" },
        { text: "'Catalogue ship' approach preference", level: "high" },
        { text: "FMV risk-averse procurement posture", level: "high" },
        { text: "European rearmament demand on yards", level: "medium" }
      ],
      children: [
        {
          id: "del-maturity",
          label: "Design Maturity",
          weight: "10%",
          description: "The degree to which the offered design is proven, built, and in-service versus a concept or adaptation requiring development. FMV's shift to 'catalogue ships' explicitly prioritizes maturity to reduce schedule risk.",
          children: [
            {
              id: "del-maturity-existing",
              label: "Existing vs. New Design",
              weight: "4%",
              description: "Is the design already built and proven, or does it require significant development? FDI has an in-service lead ship. AH-120 is an adaptation of the not-yet-delivered Type 31. ALFA 4000 is a new concept.",
              scores: {
                "naval-group": { score: 9.5, rationale: "FDI lead ship Amiral Ronarc'h entered French Navy service October 2025. Truly proven, in-service design. Export success (Greece buying four). Strongest maturity position by far." },
                "babcock-saab": { score: 5.0, rationale: "Arrowhead 120 described as 'not a finished design.' Based on Type 31/Arrowhead 140, but no Type 31 yet delivered. Significant adaptation required for Swedish configuration." },
                "navantia": { score: 4.5, rationale: "ALFA 4000 characterized as concept-level, similar in maturity to AH-120. Not based on a completed, in-service ship. New design requiring development." }
              }
            },
            {
              id: "del-maturity-track",
              label: "In-Service Track Record",
              weight: "3%",
              description: "Operational experience with the design family. How many ships of this type or closely related type are in active naval service worldwide?",
              scores: {
                "naval-group": { score: 9.0, rationale: "Lead FDI ship in French Navy service. Four ordered by Greece. Strong and growing operational track record. Proven performance data available." },
                "babcock-saab": { score: 3.5, rationale: "No Type 31/Arrowhead ships yet delivered or in service. Babcock has shipbuilding experience but this specific design family has zero operational hours. Significant risk factor." },
                "navantia": { score: 5.0, rationale: "ALFA 4000 is new, but Navantia's F-100 Álvaro de Bazán class (5 ships in service) and F-110 programme provide relevant design lineage and experience." }
              }
            },
            {
              id: "del-maturity-prod",
              label: "Production Readiness",
              weight: "3%",
              description: "Is the production line active? Are jigs, tooling, and supply chains in place? Can production begin quickly upon contract award?",
              scores: {
                "naval-group": { score: 9.0, rationale: "FDI production line active at Lorient for French Navy and Greek export orders. Supply chains established. Production can continue without disruption. Highest production readiness." },
                "babcock-saab": { score: 5.5, rationale: "Babcock's Rosyth yard has Type 31 production underway but not yet delivered. Tooling and processes being established. Split-build model adds coordination complexity." },
                "navantia": { score: 5.0, rationale: "Navantia's Ferrol yard has F-110 production but ALFA 4000 would require new production setup. Supply chain development needed for this specific design." }
              }
            }
          ]
        },
        {
          id: "del-schedule",
          label: "Schedule Credibility",
          weight: "10%",
          description: "Can the candidate credibly deliver two ships in service by 2030 and four by 2035? The schedule is described as 'extremely ambitious' and is a central planning assumption.",
          children: [
            {
              id: "del-schedule-2030",
              label: "Two Ships by 2030 Target",
              weight: "5%",
              description: "The critical near-term milestone. Can the first pair of frigates be adapted, built, outfitted with Swedish systems, and accepted into service within approximately 4 years of contract award?",
              scores: {
                "naval-group": { score: 8.0, rationale: "Naval Group states it offered a 'fully equipped frigate' for 2030 delivery. Active production line and in-service design give credibility. Integration of Swedish systems is the main schedule risk." },
                "babcock-saab": { score: 5.0, rationale: "Programme-specific delivery guarantees not published. Type 31 not yet delivered creates uncertainty. Split-build model (Rosyth hulls + Karlskrona outfitting) adds complexity and coordination risk." },
                "navantia": { score: 6.5, rationale: "Navantia publicly describes delivery of two frigates with trained crews by 2030, followed by two more in 2031. Aggressive but explicitly stated. Conditional on contractual arrangements." }
              }
            },
            {
              id: "del-schedule-2035",
              label: "Four Ships by 2035 Target",
              weight: "3%",
              description: "Full programme completion with all four Luleå-class frigates in service. Requires sustained production tempo and efficient series build.",
              scores: {
                "naval-group": { score: 8.0, rationale: "Active multi-ship production for France and Greece demonstrates series build capability. 2035 target for all four is achievable given 2030 first-pair delivery." },
                "babcock-saab": { score: 5.5, rationale: "If first pair is delayed, the cascade effect impacts the full programme. Rosyth capacity shared with Type 31 and other UK naval programmes." },
                "navantia": { score: 7.0, rationale: "Navantia's 2030+2031 timeline would actually beat the 2035 target if achieved. Navantia has multi-ship production experience. Conditional delivery claims." }
              }
            },
            {
              id: "del-schedule-yard",
              label: "Yard Capacity & Availability",
              weight: "2%",
              description: "Shipyard availability in the context of European rearmament. Multiple nations are competing for build slots at limited European naval yards.",
              scores: {
                "naval-group": { score: 7.0, rationale: "Lorient yard active with FDI production but capacity shared across French Navy, Greek export, and potential other orders. European demand pressure is real." },
                "babcock-saab": { score: 6.0, rationale: "Rosyth managing Type 31 build plus UK naval programmes. Capacity constraints possible. Karlskrona (Saab Kockums) primarily does outfitting and corvette-scale work." },
                "navantia": { score: 7.5, rationale: "Navantia has multiple yards (Ferrol, Cartagena). F-110 programme creates synergies. Spanish yard capacity may be more available than UK or French equivalents." }
              }
            }
          ]
        },
        {
          id: "del-integration",
          label: "Integration Risk",
          weight: "6%",
          description: "All candidates require integration of Swedish national combat systems (9LV CMS, Swedish weapons, sensors) onto a foreign hull. This is the central technical risk FMV must manage regardless of platform choice.",
          children: [
            {
              id: "del-integ-cms",
              label: "Swedish CMS Integration",
              weight: "3%",
              description: "Integration of the Saab 9LV Combat Management System — the backbone of Swedish naval C2. All candidates must accommodate this unless Sweden accepts a foreign CMS.",
              scores: {
                "naval-group": { score: 5.5, rationale: "FDI uses Thales SETIS CMS natively. Replacing with 9LV CMS requires significant integration effort. Naval Group-Saab partnership may facilitate but this is the biggest technical risk." },
                "babcock-saab": { score: 9.5, rationale: "Saab is the prime contractor and 9LV developer. 'Predominantly Swedish combat system' is the core pitch. Lowest CMS integration risk — it's designed in from the start." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 explicitly designed to integrate national combat systems. Clean interface approach ('defined interfaces') specifically targets CMS integration. Less proven but architecturally designed for it." }
              }
            },
            {
              id: "del-integ-sensors",
              label: "Sensor & Weapon Adaptation",
              weight: "2%",
              description: "Beyond CMS, specific Swedish weapons (RBS15, Bofors 57mm) and sensors (Giraffe radars) must be integrated. Each adaptation carries schedule and technical risk.",
              scores: {
                "naval-group": { score: 5.0, rationale: "Most adaptation required — replacing French weapons and sensors with Swedish equivalents. RBS15 for Exocet, potentially Bofors 57mm for French gun, Swedish radar integration. Highest integration complexity." },
                "babcock-saab": { score: 9.0, rationale: "Swedish weapons and sensors are the baseline design. Saab Giraffe radars, Bofors 57mm, RBS15 are the starting point, not adaptations. Minimal weapon/sensor integration risk." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 designed with open architecture for national weapon integration. 'Defined interfaces' approach. Credible but unproven integration pathway for Swedish-specific systems." }
              }
            },
            {
              id: "del-integ-class",
              label: "Classification & Certification",
              weight: "1%",
              description: "Naval classification society approval and military acceptance. Adapting a proven design for Swedish requirements may trigger reclassification requirements.",
              scores: {
                "naval-group": { score: 8.0, rationale: "FDI already classified for French Navy. Swedish modifications may require delta classification but the baseline is established. Lower classification risk." },
                "babcock-saab": { score: 6.0, rationale: "AH-120 is a new variant requiring full classification. Type 31 baseline classification provides some foundation but significant Swedish modifications needed." },
                "navantia": { score: 5.5, rationale: "ALFA 4000 as a new design requires complete classification process. No established classification baseline for this specific design." }
              }
            }
          ]
        },
        {
          id: "del-pm",
          label: "Programme Management",
          weight: "4%",
          description: "Quality of programme management approach, risk mitigation strategy, and contractor governance model. Includes contractual framework and relationship management.",
          children: [
            {
              id: "del-pm-exp",
              label: "Prime Contractor Experience",
              weight: "1.5%",
              description: "Track record of the lead contractor in managing major naval programmes, including international/export programmes with national system integration requirements.",
              scores: {
                "naval-group": { score: 8.5, rationale: "Naval Group is a major global naval contractor. FDI programme, Barracuda submarines, Gowind corvettes. Extensive export programme management experience." },
                "babcock-saab": { score: 7.0, rationale: "Saab has strong programme management in aerospace/defence. Babcock managing Type 31 build. Joint venture management adds coordination complexity. Saab's naval PM experience is growing." },
                "navantia": { score: 7.5, rationale: "Navantia has managed F-100, F-110, and international programmes (Australian AWD). Proven shipbuilding programme management. Strong Spanish Navy relationship." }
              }
            },
            {
              id: "del-pm-risk",
              label: "Risk Mitigation Approach",
              weight: "1.5%",
              description: "Specific risk reduction strategies and mitigation plans. How does the contractor address the key programme risks (schedule, integration, cost)?",
              scores: {
                "naval-group": { score: 8.0, rationale: "Offers the inherent risk mitigation of an in-service design. 'Existing design' approach aligns with Sweden's maturity-first logic. Integration risk is the residual concern." },
                "babcock-saab": { score: 6.5, rationale: "Risk mitigation relies on Saab's Swedish integration expertise offsetting hull maturity concerns. Split-build model creates coordination risks that need active management." },
                "navantia": { score: 7.0, rationale: "Navantia explicitly promotes 'controlled development, defined interfaces, early alignment across design/classification/production.' Structured risk-reduction narrative." }
              }
            },
            {
              id: "del-pm-contract",
              label: "Contractual Framework",
              weight: "1%",
              description: "Contract structure, pricing model, milestone payments, and risk-sharing arrangements between Sweden (FMV) and the supplier.",
              scores: {
                "naval-group": { score: 7.0, rationale: "Major international defence contract with government-to-government framework. France has signalled strong state support. Contract details not public." },
                "babcock-saab": { score: 7.0, rationale: "Complex tri-party contract structure (FMV-Saab-Babcock). Risk allocation between Swedish and UK entities needs careful definition." },
                "navantia": { score: 7.0, rationale: "Navantia's delivery is 'subject to contractual arrangements.' Government-backed contractor. Contract structure not yet detailed." }
              }
            }
          ]
        }
      ]
    },
    {
      id: "cost",
      label: "Lifecycle Cost & Sustainment",
      weight: "20%",
      description: "Programme cost estimated at SEK 40-60 billion. One of Sweden's largest defence procurements. Includes acquisition cost, 40-year through-life support, and crew training. Currency exposure (SEK/EUR/GBP) is a significant financial consideration.",
      influences: [
        { text: "SEK 40-60 billion programme value", level: "high" },
        { text: "Currency volatility (SEK/EUR/GBP)", level: "medium" },
        { text: "Defence budget ceiling constraints", level: "medium" },
        { text: "European rearmament cost inflation", level: "medium" }
      ],
      children: [
        {
          id: "cost-acq",
          label: "Acquisition Cost",
          weight: "8%",
          description: "Upfront purchase price for four ships including design adaptation, production, and delivery. No bidder-specific pricing has been publicly disclosed.",
          children: [
            {
              id: "cost-acq-unit",
              label: "Unit Price Competitiveness",
              weight: "3%",
              description: "Per-ship acquisition cost. Series production economics, design reuse, and production efficiency all factor into unit price.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI is an established production design with series economics. French state pricing may be competitive for strategic relationship. Export pricing typically premium but offset by reduced development costs." },
                "babcock-saab": { score: 6.0, rationale: "~6 billion SEK programme estimate cited in reporting. Split-build model may increase coordination costs. AH-120 adaptation costs add to baseline. Development cost premium likely." },
                "navantia": { score: 7.5, rationale: "Spanish shipbuilding is traditionally cost-competitive in European context. ALFA 4000 as a light frigate concept may be positioned below FDI/AH-120 in unit cost. Navantia's cost structure is favourable." }
              }
            },
            {
              id: "cost-acq-currency",
              label: "Currency Exposure",
              weight: "3%",
              description: "Multi-billion SEK programme with payments in EUR (France/Spain) or GBP (UK). Long-term currency exposure is a macroeconomic consideration for the Swedish Treasury and Riksbank.",
              scores: {
                "naval-group": { score: 6.5, rationale: "Payments in EUR. SEK/EUR exposure over the programme lifetime. EUR is relatively stable against SEK but long-term currency risk exists." },
                "babcock-saab": { score: 6.0, rationale: "Split between GBP (Babcock) and SEK (Saab). GBP/SEK exposure adds currency risk. Partial domestic content in SEK is an advantage over fully foreign-priced alternatives." },
                "navantia": { score: 7.0, rationale: "Payments in EUR. Spain's Eurozone membership provides EUR stability. Similar exposure to Naval Group option but Navantia's competitive pricing may offset currency risk." }
              }
            },
            {
              id: "cost-acq-pricing",
              label: "Pricing Structure",
              weight: "2%",
              description: "Fixed-price vs. cost-plus models, milestone payment structures, and cost escalation clauses. Budget discipline and cost control are parliamentary concerns.",
              scores: {
                "naval-group": { score: 7.0, rationale: "Established FDI pricing baseline from French Navy and Greek orders. Production cost data available from series build. Pricing structure negotiable." },
                "babcock-saab": { score: 6.0, rationale: "AH-120 adaptation costs less predictable. No prior production pricing data for this specific variant. Cost uncertainty higher than for proven designs." },
                "navantia": { score: 7.0, rationale: "Navantia has international programme pricing experience. F-100 export success (Australia) provides pricing reference. 'Controlled development' approach implies cost discipline." }
              }
            }
          ]
        },
        {
          id: "cost-tls",
          label: "Through-Life Support",
          weight: "7%",
          description: "40-year sustainment concept including maintenance, repairs, overhauls, spare parts, and technology refresh. FMV and bidders repeatedly reference through-life support as a key evaluation factor.",
          children: [
            {
              id: "cost-tls-maint",
              label: "Maintenance Concept",
              weight: "2%",
              description: "Planned maintenance approach — availability targets, maintenance intervals, condition-based monitoring, and support organization structure.",
              scores: {
                "naval-group": { score: 8.0, rationale: "FDI has an established maintenance concept from French Navy operations. Proven availability data from lead ship. Digital maintenance systems and condition monitoring." },
                "babcock-saab": { score: 7.0, rationale: "Saab Kockums provides maintenance for Visby corvettes — established Swedish naval MRO relationship. Maintenance concept for AH-120 would build on this but for a larger, more complex platform." },
                "navantia": { score: 7.0, rationale: "Navantia has 40-year through-life support experience with F-100 class. Maintenance concept proven in Spanish Navy service. Transfer to Swedish context requires localization." }
              }
            },
            {
              id: "cost-tls-mro",
              label: "Swedish MRO Facility",
              weight: "2%",
              description: "Local maintenance, repair, and overhaul capability in Sweden. Sovereignty requirement for wartime self-sufficiency and through-life support independence.",
              scores: {
                "naval-group": { score: 7.5, rationale: "Naval Group signed partnership with Öresund Drydocks for Swedish frigate maintenance facility. MoU for technology transfer and local MRO capability. Concrete Swedish MRO commitment." },
                "babcock-saab": { score: 8.5, rationale: "Saab Kockums in Karlskrona is Sweden's established naval MRO hub. Already maintains Visby corvettes. Natural extension to Luleå-class. Strongest domestic MRO position." },
                "navantia": { score: 7.5, rationale: "LOIs with Stockholm Repairyard and Öresund Drydocks. Proactive Swedish MRO partnership strategy. Multiple facility approach spreads regional benefits." }
              }
            },
            {
              id: "cost-tls-spares",
              label: "Spare Parts & Supply Chain",
              weight: "1.5%",
              description: "Supply chain resilience for spare parts over 40 years. Includes considerations of wartime resupply, domestic manufacturing capability, and obsolescence management.",
              scores: {
                "naval-group": { score: 7.0, rationale: "French/European supply chain with some Swedish localization through Saab partnership. Wartime resupply from France requires allied cooperation. Multi-national supply chain." },
                "babcock-saab": { score: 8.0, rationale: "Swedish combat system components sourced domestically through Saab. Hull spares from UK/international suppliers. Partial domestic supply chain advantage." },
                "navantia": { score: 7.0, rationale: "Spanish supply chain with Swedish industrial participation through LOI partners. European supply base. Similar profile to Naval Group option." }
              }
            },
            {
              id: "cost-tls-upgrade",
              label: "Upgrade Pathway",
              weight: "1.5%",
              description: "Plan for mid-life upgrades and technology insertion over the 40-year lifecycle. Ability to modernize weapons, sensors, and systems as threats evolve.",
              scores: {
                "naval-group": { score: 7.5, rationale: "FDI 'digital-first' architecture designed for software upgrades. French Navy will drive FDI modernization through its own fleet, benefiting Sweden. Active upgrade pipeline." },
                "babcock-saab": { score: 8.0, rationale: "Saab controls the combat system upgrade pathway. Swedish sovereignty over upgrades and modernization decisions. 9LV CMS upgrade roadmap aligned with Swedish needs." },
                "navantia": { score: 6.5, rationale: "ALFA 4000 upgrade pathway less defined. As a newer/smaller design, long-term modernization support base is less established than for in-service platforms." }
              }
            }
          ]
        },
        {
          id: "cost-manning",
          label: "Manning & Training",
          weight: "5%",
          description: "Crew size optimization is critical — the Swedish Navy faces a recruitment and retention crisis. Transitioning from corvettes to frigates requires different skills and more personnel. Low-manning designs have significant lifecycle cost advantages.",
          influences: [
            { text: "Swedish Navy personnel shortage", level: "high" },
            { text: "400% increase in surface fleet tonnage", level: "high" },
            { text: "Training infrastructure requirements", level: "medium" }
          ],
          children: [
            {
              id: "cost-manning-crew",
              label: "Crew Size Optimization",
              weight: "2.5%",
              description: "Designed crew complement. Lower crew size reduces operating costs and eases the Navy's personnel crisis. AH-120 targets ~80, FDI ~125+28, ALFA 4000 ~100.",
              scores: {
                "naval-group": { score: 5.5, rationale: "FDI crew complement is 125 plus 28 mission specialists (153 total). Largest crew requirement. Significant personnel demand in the context of Sweden's manning crisis." },
                "babcock-saab": { score: 9.0, rationale: "Arrowhead 120 targets approximately 80 crew — lowest of all candidates. Key selling point addressing Swedish Navy's recruitment challenges. Significant lifecycle manning cost advantage." },
                "navantia": { score: 7.0, rationale: "ALFA 4000 crew approximately 100. Middle ground between FDI and AH-120. Navantia explicitly mentions 'trained crews' in delivery commitment. Manageable personnel demand." }
              }
            },
            {
              id: "cost-manning-train",
              label: "Training Package",
              weight: "1.5%",
              description: "Crew training programme including operational conversion, specialist training, and maintenance training. Navantia uniquely offers delivery with trained crews.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI training available through French Navy operational experience. Training package can draw on in-service lessons. Adaptation for Swedish procedures needed." },
                "babcock-saab": { score: 7.0, rationale: "Saab can provide 9LV CMS training from Swedish experience. Combat system training is familiar territory. Hull and propulsion training requires new curriculum." },
                "navantia": { score: 8.0, rationale: "Navantia uniquely offers delivery of frigates 'with trained crews.' Comprehensive training package included in the offer. Strong training proposition." }
              }
            },
            {
              id: "cost-manning-sim",
              label: "Shore Infrastructure",
              weight: "1%",
              description: "Simulators, training facilities, and shore-based support infrastructure needed to train and sustain crews for the new class.",
              scores: {
                "naval-group": { score: 7.0, rationale: "FDI simulator and training facilities available. French Navy training infrastructure provides reference. Swedish-specific simulators would need development." },
                "babcock-saab": { score: 7.5, rationale: "Saab can develop simulators for 9LV-based combat system using existing Swedish simulation expertise. Combat system simulation infrastructure partially exists." },
                "navantia": { score: 6.5, rationale: "Simulator development for ALFA 4000 would be needed. Navantia has simulation capabilities but Swedish-specific infrastructure requirements add development scope." }
              }
            }
          ]
        }
      ]
    },
    {
      id: "ind",
      label: "Industrial & Security-of-Supply",
      weight: "15%",
      description: "Swedish industrial participation and sovereign control over combat systems and through-life support. Sweden's defence industry strategy emphasizes domestic production capacity, cooperation, and strategic partnerships. Nearly all Swedish Navy vessels have historically been domestically designed and produced.",
      influences: [
        { text: "Swedish Defence Industry Strategy (June 2025)", level: "high" },
        { text: "Historical domestic naval shipbuilding tradition", level: "high" },
        { text: "EU procurement directive constraints on 'offset'", level: "medium" },
        { text: "Regional jobs impact (Karlskrona, Malmö, Stockholm)", level: "medium" },
        { text: "Protective Security Act requirements", level: "medium" }
      ],
      children: [
        {
          id: "ind-participation",
          label: "Swedish Industrial Participation",
          weight: "5%",
          description: "Workshare allocated to Swedish industry, technology transfer, and involvement of the Swedish defence industrial base. EU law constrains formal 'offset' requirements but security exceptions allow industrial participation framing.",
          children: [
            {
              id: "ind-part-workshare",
              label: "Workshare in Sweden",
              weight: "1.5%",
              description: "Percentage and value of work performed in Sweden. Includes combat system integration, outfitting, testing, and potentially hull section construction.",
              scores: {
                "naval-group": { score: 6.5, rationale: "Naval Group proposes partnership with Swedish industry, especially Saab. Through-life support in Sweden. Hull built in France (Lorient). Swedish outfitting and integration scope negotiable." },
                "babcock-saab": { score: 9.0, rationale: "Highest Swedish workshare — Saab is prime contractor, Swedish combat system integration and outfitting in Karlskrona. Hull built at Rosyth but majority of high-value work in Sweden." },
                "navantia": { score: 7.0, rationale: "LOIs with Stockholm Repairyard and Öresund Drydocks signal commitment to Swedish work. Through-life support and maintenance work in Sweden. Hull built in Spain." }
              }
            },
            {
              id: "ind-part-transfer",
              label: "Technology Transfer",
              weight: "1.5%",
              description: "Transfer of naval technology, design data, and production know-how to Swedish industry. Important for sovereign maintenance and upgrade capability.",
              scores: {
                "naval-group": { score: 7.0, rationale: "France frames an industrial partnership with technology transfer and MoU with Swedish shipyard. Scope of technology transfer negotiable. French export control environment applies." },
                "babcock-saab": { score: 7.5, rationale: "Babcock provides hull engineering/structural design knowledge. Technology flows primarily from UK to Sweden. Saab retains full combat system technology sovereignty." },
                "navantia": { score: 7.0, rationale: "Navantia's 'controlled development, defined interfaces' approach implies structured technology sharing. Spanish government supports technology cooperation." }
              }
            },
            {
              id: "ind-part-subs",
              label: "Swedish Subcontractor Involvement",
              weight: "1%",
              description: "Engagement of Swedish defence SMEs and subcontractors in the supply chain. Breadth of Swedish industrial participation beyond the prime contractor.",
              scores: {
                "naval-group": { score: 6.5, rationale: "French supply chain with selective Swedish subcontracting. Saab partnership creates entry point for Swedish suppliers. Scope depends on integration depth." },
                "babcock-saab": { score: 8.5, rationale: "Saab's Swedish supply chain network directly engaged. Bofors, Swedish EW suppliers, communication companies. Deepest Swedish subcontractor base." },
                "navantia": { score: 7.0, rationale: "LOIs signal intent to engage Swedish industry. Navantia's approach emphasizes cooperation with local suppliers. Swedish-industry engagement is a stated priority." }
              }
            },
            {
              id: "ind-part-jobs",
              label: "Jobs & Regional Impact",
              weight: "1%",
              description: "Employment impact in Swedish naval/defence industrial regions — Karlskrona, Stockholm, Malmö/Öresund. Political salience of job creation and industrial resilience.",
              scores: {
                "naval-group": { score: 6.5, rationale: "MRO facility in Öresund creates jobs. Integration work generates employment. Bulk of hull construction jobs remain in France (Lorient)." },
                "babcock-saab": { score: 8.5, rationale: "Karlskrona (Saab Kockums) as primary Swedish hub — largest domestic job impact. Combat system integration, outfitting, and testing creates significant skilled employment." },
                "navantia": { score: 7.5, rationale: "LOIs with Stockholm Repairyard AND Öresund Drydocks spread jobs across multiple Swedish regions. Deliberate geographic diversification of employment benefits." }
              }
            }
          ]
        },
        {
          id: "ind-sovereignty",
          label: "Sovereignty & Security-of-Supply",
          weight: "5%",
          description: "Sweden's ability to independently operate, maintain, and upgrade the ships without foreign-government veto. Critical for wartime operations and strategic autonomy.",
          children: [
            {
              id: "ind-sov-cms",
              label: "National Combat System Control",
              weight: "2%",
              description: "Sovereign control over the combat management system — the ship's 'brain.' Ability to modify, upgrade, and adapt without foreign contractor approval.",
              scores: {
                "naval-group": { score: 6.0, rationale: "If 9LV CMS integrated, Sweden controls the combat system. But hull systems, propulsion, and platform management remain under French IP. Partial sovereignty." },
                "babcock-saab": { score: 9.5, rationale: "'Predominantly Swedish combat system, weapons and sensor configuration.' Saab controls the full combat system IP. Highest sovereignty over the ship's fighting capability." },
                "navantia": { score: 7.5, rationale: "ALFA 4000 explicitly designed to enable integration of national combat systems. Clean architecture for Swedish CMS sovereignty. Good design intent for sovereignty." }
              }
            },
            {
              id: "ind-sov-export",
              label: "Export Control Independence",
              weight: "1.5%",
              description: "Freedom from third-country export control constraints on embedded subsystems. US ITAR, French export controls, or UK export regulations can limit Sweden's ability to independently modify or resupply the ships.",
              scores: {
                "naval-group": { score: 6.0, rationale: "French export control regime applies to hull and platform systems. Aster missiles under MBDA (multi-national) export framework. Some ITAR components possible in sensor chain." },
                "babcock-saab": { score: 7.5, rationale: "Swedish combat system minimizes foreign export control dependencies. UK export controls apply to hull IP. Split sovereignty between Swedish weapons and UK hull. Better than fully foreign but not fully independent." },
                "navantia": { score: 7.0, rationale: "Spanish export control regime — historically flexible within NATO. ALFA 4000 designed for national system integration reduces dependence on Spanish IP for combat systems." }
              }
            },
            {
              id: "ind-sov-wartime",
              label: "Wartime Resupply Assurance",
              weight: "1%",
              description: "Ability to maintain and resupply the ships during a conflict when international supply chains may be disrupted. Domestic manufacturing capability for critical components.",
              scores: {
                "naval-group": { score: 5.5, rationale: "Wartime resupply dependent on France as NATO ally. European supply chains vulnerable to disruption. Swedish MRO facility helps but deep maintenance requires French cooperation." },
                "babcock-saab": { score: 8.0, rationale: "Swedish combat system components can be maintained domestically. Hull spares require UK cooperation. Highest domestic self-sufficiency for the combat system that fights the ship." },
                "navantia": { score: 6.0, rationale: "Wartime resupply dependent on Spain as NATO ally. Similar considerations to France. Swedish MRO LOIs provide some local resilience." }
              }
            },
            {
              id: "ind-sov-classified",
              label: "Classified Information Protection",
              weight: "0.5%",
              description: "Protective security requirements under Sweden's Protective Security Act (2018:585). Foreign suppliers must meet Swedish security vetting and classified information handling standards.",
              scores: {
                "naval-group": { score: 7.0, rationale: "France has mature protective security framework. Franco-Swedish security agreements facilitate classified cooperation. Some classified compartmentalization may be needed." },
                "babcock-saab": { score: 9.0, rationale: "Saab already holds highest Swedish security clearances. Swedish classified information handling is native. Babcock requires UK-Sweden security cooperation for hull-related information." },
                "navantia": { score: 6.5, rationale: "Spain-Sweden security cooperation framework needed. Navantia has NATO security clearances but Swedish-specific protective security requirements must be established." }
              }
            }
          ]
        },
        {
          id: "ind-strategic",
          label: "Strategic Partnership Value",
          weight: "5%",
          description: "Beyond the immediate procurement, what strategic bilateral defence relationship value does each option bring? Government-to-government relationships, reciprocal industrial benefits, and alliance alignment all factor into this political-strategic dimension.",
          influences: [
            { text: "Government-to-government signalling", level: "high" },
            { text: "GlobalEye/France reciprocity narrative", level: "high" },
            { text: "UK-Sweden bilateral security agreement", level: "medium" },
            { text: "Spanish naval diplomacy (ship visits)", level: "medium" }
          ],
          children: [
            {
              id: "ind-strat-g2g",
              label: "G2G Relations",
              weight: "1.5%",
              description: "Quality and depth of government-to-government defence relationship. Ministerial engagement, bilateral agreements, and political alignment.",
              scores: {
                "naval-group": { score: 9.0, rationale: "France-Sweden armaments cooperation roadmap signed by defence ministers. French defence minister visited Stockholm. Strongest G2G diplomatic push of all candidates." },
                "babcock-saab": { score: 7.5, rationale: "UK-Sweden bilateral security agreement. Strong existing defence relationship. UK support to Ukraine strengthens ties. Less intense ministerial lobbying than France." },
                "navantia": { score: 7.5, rationale: "Spanish Ambassador hosted Navantia event in Stockholm. Spanish government support visible. Defence Minister Jonson visited Navantia's presentation. Active diplomatic engagement." }
              }
            },
            {
              id: "ind-strat-bilateral",
              label: "Bilateral Defence Cooperation",
              weight: "1.5%",
              description: "Broader defence cooperation beyond the frigate programme — joint exercises, shared operational experience, technology cooperation across domains.",
              scores: {
                "naval-group": { score: 8.5, rationale: "France-Sweden cooperation expanding across domains. GlobalEye reciprocity creates deep bilateral framework. Franco-Swedish aerospace and maritime cooperation deepening." },
                "babcock-saab": { score: 8.0, rationale: "UK-Sweden defence cooperation is well-established. Joint interests in Arctic and North Atlantic. JEF (Joint Expeditionary Force) alignment. Gripen-related cooperation history." },
                "navantia": { score: 6.5, rationale: "Spain-Sweden defence cooperation is less deep than French or UK bilateral relationships. Focused primarily on this naval programme. Less strategic depth." }
              }
            },
            {
              id: "ind-strat-reciprocal",
              label: "Reciprocal Industrial Benefits",
              weight: "1%",
              description: "Cross-programme industrial linkages and reciprocal procurement benefits. The GlobalEye-FDI connection is the most prominent example of reciprocal deal-making.",
              scores: {
                "naval-group": { score: 9.0, rationale: "France purchased Saab GlobalEye AEW&C (SEK 12.3B). Explicit reciprocity narrative — French frigate selection would solidify broader Franco-Swedish industrial partnership. Strongest reciprocity case." },
                "babcock-saab": { score: 6.0, rationale: "Some UK-Sweden industrial reciprocity through existing defence cooperation. Less explicit reciprocal procurement linkage than France-GlobalEye connection." },
                "navantia": { score: 5.0, rationale: "No significant reciprocal procurement linkage identified. Spain-Sweden industrial relationship is less developed than French or UK equivalents." }
              }
            },
            {
              id: "ind-strat-nato",
              label: "NATO Alliance Alignment",
              weight: "1%",
              description: "How the supplier choice aligns with Sweden's NATO alliance positioning, Northern European security priorities, and collective defence framework.",
              scores: {
                "naval-group": { score: 8.0, rationale: "France is a major NATO member and nuclear power. FDI selection signals 'European sovereignty' narrative alignment. Strong NATO-framework fit." },
                "babcock-saab": { score: 8.5, rationale: "UK is Sweden's closest Northern European NATO ally. Joint North Atlantic/Arctic interests. JEF framework alignment. Royal Navy Type 31 commonality creates operational synergies." },
                "navantia": { score: 7.0, rationale: "Spain is a NATO member with Mediterranean/Atlantic focus. F-100 class already operates in NATO high-readiness forces. Solid NATO credential but less Northern European alignment." }
              }
            }
          ]
        }
      ]
    }
  ]
};

// ── Company Profiles ──
const COMPANIES = {
  "naval-group": {
    name: "Naval Group",
    country: "France",
    platform: "FDI (Frégate de Défense et d'Intervention)",
    color: "#2563eb",
    specs: {
      "Displacement": "~4,500 tonnes",
      "Length": "122 metres",
      "Primary Radar": "Thales Sea Fire 500 (fixed-panel AESA)",
      "VLS": "16-32 Sylver A50 cells (Aster 15/30)",
      "Crew": "125 (+28 mission specialists)",
      "Gun": "76mm (baseline) / Bofors 57mm (adapted)",
      "Builder": "Naval Group, Lorient",
      "Lead Ship": "Amiral Ronarc'h (in service Oct 2025)",
      "Export Orders": "Greece (4 ships)"
    },
    strengths: [
      "Only candidate with an in-service lead ship — strongest design maturity",
      "Sea Fire 500 AESA radar with native Aster 30/Sylver A50 integration",
      "Active production line at Lorient with Greek export orders",
      "Strongest government-to-government diplomatic push (ministerial visits)",
      "GlobalEye reciprocity narrative creates powerful industrial linkage",
      "Digital-first architecture designed for software upgrades"
    ],
    weaknesses: [
      "Largest crew requirement (~153) exacerbates Swedish Navy manning crisis",
      "Significant adaptation required to replace French CMS (SETIS) with 9LV",
      "Swedish weapon/sensor integration (RBS15, Bofors 57mm) requires redesign",
      "French export controls on hull/platform IP limit sovereign modification",
      "Growth margin concerns — described as 'somewhat smaller than newer designs'",
      "Hull construction jobs remain in France, not Sweden"
    ]
  },
  "babcock-saab": {
    name: "Babcock with Saab",
    country: "UK / Sweden",
    platform: "Arrowhead 120 (Type 31 variant)",
    color: "#059669",
    specs: {
      "Displacement": "~4,650 tonnes",
      "Length": "124 metres",
      "Primary Radar": "Saab Giraffe 4A / 1X",
      "VLS": "Space for 16-28 cells",
      "Crew": "~80",
      "Gun": "Bofors 57mm Mk3 (confirmed)",
      "Hull Builder": "Babcock, Rosyth (Scotland)",
      "Integration": "Saab Kockums, Karlskrona (Sweden)",
      "CMS": "Saab 9LV Combat Management System"
    },
    strengths: [
      "Highest Swedish industrial sovereignty — Saab as prime with 9LV CMS",
      "Lowest crew requirement (~80) — directly addresses manning crisis",
      "Predominantly Swedish combat system, weapons and sensors",
      "Largest displacement (4,650t) provides best growth margin",
      "Natural integration with Swedish C2 ecosystem and national command",
      "UK-Sweden bilateral security agreement provides strategic framework",
      "Bofors 57mm Mk3 confirmed — Swedish weapon system continuity"
    ],
    weaknesses: [
      "Arrowhead 120 described as 'not a finished design'",
      "No Type 31 has yet been delivered — zero in-service track record",
      "Split-build model (Rosyth + Karlskrona) adds coordination complexity",
      "Programme-specific delivery guarantees not publicly stated",
      "VLS integration of Aster 30 or equivalent not yet demonstrated",
      "Babcock's production track record on Type 31 is unproven"
    ]
  },
  "navantia": {
    name: "Navantia",
    country: "Spain",
    platform: "ALFA 4000 Light Frigate",
    color: "#dc2626",
    specs: {
      "Displacement": "~4,000 tonnes",
      "Length": "112 metres",
      "Primary Radar": "To be specified (NATO standard)",
      "VLS": "16 cells",
      "Crew": "~100",
      "Gun": "To be specified (57mm compatible)",
      "Builder": "Navantia, Ferrol/Cartagena (Spain)",
      "Design Basis": "New design for NATO force structures",
      "Partnerships": "LOIs with Stockholm Repairyard & Öresund Drydocks"
    },
    strengths: [
      "Designed specifically for NATO force structure integration",
      "'Controlled development' with defined interfaces reduces integration risk",
      "Aggressive delivery timeline: 2x2030 + 2x2031 with trained crews",
      "Cost-competitive Spanish shipbuilding with flexible industrial model",
      "Multiple Swedish yard partnerships (Stockholm + Öresund)",
      "Proactive diplomatic engagement (Embassy event, ship visits)",
      "F-100/F-110 design lineage provides relevant experience"
    ],
    weaknesses: [
      "ALFA 4000 is concept-level — similar maturity concerns to AH-120",
      "Smallest candidate at 4,000t — least growth margin",
      "Key systems (radar, VLS, EW) to be specified — significant uncertainty",
      "Delivery timeline explicitly conditional on contractual arrangements",
      "Spain-Sweden defence relationship less deep than France or UK",
      "No Swedish combat system integration demonstrated",
      "Weakest Arctic/North Atlantic operational pedigree"
    ]
  }
};

// ── Scenarios ──
const SCENARIOS = [
  {
    id: "a",
    label: "Scenario A",
    title: "France-selected: FDI with Swedish MRO Partnership",
    cssClass: "scenario-a",
    outcome: "Maximises air-defence/command credibility and aligns with explicit bidder offers on through-life support and local maintenance facility in Sweden. Strengthens bilateral France-Sweden defence-industrial ties. The GlobalEye reciprocity creates a powerful narrative for a broader strategic partnership.",
    risk: "Main residual risk is integration of Swedish sovereign systems (9LV CMS, RBS15, Giraffe radars) and export-control bundling. Largest crew requirement exacerbates manning concerns.",
    company: "naval-group"
  },
  {
    id: "b",
    label: "Scenario B",
    title: "Spain-selected: ALFA 4000 with Staged Delivery (2030/2031)",
    cssClass: "scenario-b",
    outcome: "Navantia's open narrative is tailored to Sweden's stated needs: NATO context, integration of national combat systems, defined interfaces, and high availability via digital engineering, plus explicit staged delivery with trained crews.",
    risk: "Main risk is the degree of 'new design' adaptation embedded in ALFA 4000 versus truly in-service designs — details and maturity levels are not published. Smallest platform limits growth.",
    company: "navantia"
  },
  {
    id: "c",
    label: "Scenario C",
    title: "Saab-UK Build Partnership: Babcock/Arrowhead 120 with Swedish Systems Dominance",
    cssClass: "scenario-c",
    outcome: "Likely strongest for Swedish sovereignty arguments and continuity with existing Swedish naval integration competence. May also align with broader Nordic/UK defence collaboration logic. Lowest crew requirement directly addresses manning crisis.",
    risk: "Key risk is whether the build schedule and yard capacity can meet Sweden's 2030 target under a contract that avoids design creep. No Type 31 yet delivered creates maturity uncertainty.",
    company: "babcock-saab"
  },
  {
    id: "d",
    label: "Scenario D",
    title: "Mixed Acquisition: Two 'Fast' Ships + Option for Later Units",
    cssClass: "scenario-d",
    outcome: "Could reduce near-term air-defence gap risk and defer final design 'lock' on later units. Allows Sweden to operationalize capability faster while retaining flexibility.",
    risk: "Would complicate logistics, training, and lifecycle cost. Conflicts with Sweden's 40-year sustainment framing. No official sources indicate this structure — treat as hypothetical.",
    company: null
  }
];

// ── State ──
let currentView = 'tree';
let selectedNode = null;
let selectedNodePath = [];
let aiMessages = [];
let aiContext = '';
let isAILoading = false;

// ── Score Change Log (persisted in localStorage) ──
let scoreChangeLog = JSON.parse(localStorage.getItem('scoreChangeLog') || '[]');
let scoreOverrides = JSON.parse(localStorage.getItem('scoreOverrides') || '{}');

function applyScoreOverrides() {
  for (const [key, override] of Object.entries(scoreOverrides)) {
    const [nodeId, company] = key.split('::');
    const node = findNode(DECISION_TREE, nodeId);
    if (node?.scores?.[company]) {
      node.scores[company].score = override.score;
      node.scores[company].rationale = override.rationale;
    }
  }
}

function saveScoreChange(nodeId, company, oldScore, newScore, oldRationale, newRationale, motivation) {
  const overrideKey = `${nodeId}::${company}`;
  scoreOverrides[overrideKey] = { score: newScore, rationale: newRationale };
  localStorage.setItem('scoreOverrides', JSON.stringify(scoreOverrides));

  const entry = {
    timestamp: new Date().toISOString(),
    nodeId,
    nodeLabel: findNode(DECISION_TREE, nodeId)?.label || nodeId,
    company,
    companyName: COMPANIES[company]?.name || company,
    oldScore,
    newScore,
    oldRationale,
    newRationale,
    motivation
  };
  scoreChangeLog.push(entry);
  localStorage.setItem('scoreChangeLog', JSON.stringify(scoreChangeLog));
}

// ── Edit Modal ──
let editContext = null; // { nodeId, companyKey, originalScore, originalRationale }

function openEditModal(nodeId, companyKey) {
  const node = findNode(DECISION_TREE, nodeId);
  if (!node?.scores?.[companyKey]) return;

  const data = node.scores[companyKey];
  const company = COMPANIES[companyKey];

  editContext = {
    nodeId,
    companyKey,
    originalScore: data.score,
    originalRationale: data.rationale
  };

  document.getElementById('edit-modal-company').textContent = company.name;
  document.getElementById('edit-modal-node').textContent = node.label;

  const slider = document.getElementById('edit-score-slider');
  slider.value = data.score;
  document.getElementById('edit-score-value').textContent = data.score;

  document.getElementById('edit-rationale').value = data.rationale;
  document.getElementById('edit-motivation').value = '';

  // Show initial impact preview
  updateScorePreview(data.score);

  document.getElementById('edit-modal').classList.add('open');
  document.getElementById('edit-modal-overlay').classList.add('open');
}

function updateScorePreview(newValue) {
  const preview = document.getElementById('edit-impact-preview');
  document.getElementById('edit-score-value').textContent = newValue;

  if (!editContext) { preview.innerHTML = ''; return; }

  const { nodeId, companyKey, originalScore } = editContext;
  const newScore = parseFloat(newValue);
  const node = findNode(DECISION_TREE, nodeId);
  if (!node) { preview.innerHTML = ''; return; }

  // Temporarily swap the score to compute "after" aggregates
  const savedScore = node.scores[companyKey].score;

  // Compute current parent aggregate (with original score)
  const parent = findParent(DECISION_TREE, nodeId);
  const categoryNode = parent && parent.id !== 'root' ? parent : null;

  // Current aggregates
  const currentRoot = computeAggregateScores(DECISION_TREE);
  const currentCategory = categoryNode ? computeAggregateScores(categoryNode) : null;

  // Apply hypothetical score
  node.scores[companyKey].score = newScore;
  const newRoot = computeAggregateScores(DECISION_TREE);
  const newCategory = categoryNode ? computeAggregateScores(categoryNode) : null;

  // Restore original
  node.scores[companyKey].score = savedScore;

  let html = '<div class="impact-label">Impact Preview</div><div class="impact-rows">';

  if (currentCategory && newCategory && categoryNode) {
    const before = currentCategory[companyKey]?.toFixed(2) ?? '—';
    const after = newCategory[companyKey]?.toFixed(2) ?? '—';
    const delta = (newCategory[companyKey] - currentCategory[companyKey]);
    const deltaStr = delta > 0 ? `+${delta.toFixed(2)}` : delta.toFixed(2);
    const deltaClass = delta > 0 ? 'impact-up' : delta < 0 ? 'impact-down' : '';
    html += `
      <div class="impact-row">
        <span class="impact-scope">${categoryNode.label}</span>
        <span class="impact-values">${before} → ${after} <span class="${deltaClass}">(${deltaStr})</span></span>
      </div>
    `;
  }

  if (currentRoot && newRoot) {
    const before = currentRoot[companyKey]?.toFixed(2) ?? '—';
    const after = newRoot[companyKey]?.toFixed(2) ?? '—';
    const delta = (newRoot[companyKey] - currentRoot[companyKey]);
    const deltaStr = delta > 0 ? `+${delta.toFixed(2)}` : delta.toFixed(2);
    const deltaClass = delta > 0 ? 'impact-up' : delta < 0 ? 'impact-down' : '';
    html += `
      <div class="impact-row">
        <span class="impact-scope">Overall Score</span>
        <span class="impact-values">${before} → ${after} <span class="${deltaClass}">(${deltaStr})</span></span>
      </div>
    `;
  }

  html += '</div>';
  preview.innerHTML = html;
}

function closeEditModal() {
  document.getElementById('edit-modal').classList.remove('open');
  document.getElementById('edit-modal-overlay').classList.remove('open');
  editContext = null;
}

function saveEdit() {
  if (!editContext) return;

  const motivation = document.getElementById('edit-motivation').value.trim();
  if (!motivation) {
    document.getElementById('edit-motivation').style.borderColor = '#ef4444';
    document.getElementById('edit-motivation').setAttribute('placeholder', 'Motivation is required — please explain why you are changing this score.');
    document.getElementById('edit-motivation').focus();
    return;
  }

  const newScore = parseFloat(document.getElementById('edit-score-slider').value);
  const newRationale = document.getElementById('edit-rationale').value.trim() || editContext.originalRationale;

  saveScoreChange(
    editContext.nodeId,
    editContext.companyKey,
    editContext.originalScore,
    newScore,
    editContext.originalRationale,
    newRationale,
    motivation
  );

  // Apply immediately to the live data
  const node = findNode(DECISION_TREE, editContext.nodeId);
  if (node?.scores?.[editContext.companyKey]) {
    node.scores[editContext.companyKey].score = newScore;
    node.scores[editContext.companyKey].rationale = newRationale;
  }

  closeEditModal();

  // Re-render affected views
  if (selectedNode) {
    renderDetail(selectedNode);
  }
  renderCompare();
  renderScenarios();
}

// ── Inline Score History ──
function renderInlineHistory(nodeId, companyKey) {
  const entries = scoreChangeLog.filter(e => e.nodeId === nodeId && e.company === companyKey);
  if (entries.length === 0) return '';

  const rows = [...entries].reverse().map(entry => {
    const date = new Date(entry.timestamp);
    const timeStr = date.toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    const delta = entry.newScore - entry.oldScore;
    const deltaStr = delta > 0 ? `+${delta.toFixed(1)}` : delta.toFixed(1);
    const deltaClass = delta > 0 ? 'history-up' : delta < 0 ? 'history-down' : '';

    return `
      <div class="inline-history-entry">
        <div class="inline-history-top">
          <span class="inline-history-scores">${entry.oldScore.toFixed(1)} → ${entry.newScore.toFixed(1)} <span class="${deltaClass}">(${deltaStr})</span></span>
          <span class="inline-history-time">${timeStr}</span>
        </div>
        <div class="inline-history-motivation">${entry.motivation}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="inline-history">
      <div class="inline-history-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
        Change History (${entries.length})
      </div>
      ${rows}
    </div>
  `;
}

// ── Change Log Rendering ──
function renderChangeLog() {
  const container = document.getElementById('changelog-container');

  if (scoreChangeLog.length === 0) {
    container.innerHTML = `
      <div class="detail-placeholder" style="padding:60px 20px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
          <path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/>
        </svg>
        <h3>No changes recorded yet</h3>
        <p>When you edit a score in the Decision Tree view, the change and your motivation will appear here.</p>
      </div>
    `;
    return;
  }

  let html = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
      <h2 style="color:var(--text-primary);margin:0;">Score Change Log</h2>
      <button class="reset-btn" onclick="resetAllChanges()">Reset All Changes</button>
    </div>
    <p style="color:var(--text-secondary);margin-bottom:24px;font-size:14px;">${scoreChangeLog.length} change${scoreChangeLog.length !== 1 ? 's' : ''} recorded</p>
  `;

  // Show newest first
  const entries = [...scoreChangeLog].reverse();

  for (const entry of entries) {
    const date = new Date(entry.timestamp);
    const timeStr = date.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const scoreDelta = entry.newScore - entry.oldScore;
    const deltaStr = scoreDelta > 0 ? `+${scoreDelta.toFixed(1)}` : scoreDelta.toFixed(1);
    const deltaClass = scoreDelta > 0 ? 'score-color-high' : scoreDelta < 0 ? 'score-color-low' : 'score-color-mid';

    html += `
      <div class="changelog-entry">
        <div class="changelog-header">
          <div>
            <span class="score-company-name ${entry.company}" style="font-size:13px;">${entry.companyName}</span>
            <span style="color:var(--text-secondary);font-size:13px;margin:0 6px;">→</span>
            <span style="color:var(--text-primary);font-size:13px;font-weight:500;">${entry.nodeLabel}</span>
          </div>
          <span style="color:var(--text-tertiary);font-size:12px;">${timeStr}</span>
        </div>
        <div class="changelog-score-change">
          <span class="score-badge score-color-mid" style="font-size:12px;padding:2px 8px;">${entry.oldScore.toFixed(1)}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2" style="margin:0 4px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span class="score-badge ${deltaClass}" style="font-size:12px;padding:2px 8px;">${entry.newScore.toFixed(1)}</span>
          <span style="color:var(--text-tertiary);font-size:12px;margin-left:8px;">(${deltaStr})</span>
        </div>
        <div class="changelog-motivation">
          <strong style="color:var(--text-secondary);font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Motivation</strong>
          <p style="color:var(--text-primary);font-size:13px;margin:4px 0 0;line-height:1.5;">${entry.motivation}</p>
        </div>
        ${entry.newRationale !== entry.oldRationale ? `
          <div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border-subtle);">
            <strong style="color:var(--text-secondary);font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Updated Rationale</strong>
            <p style="color:var(--text-secondary);font-size:13px;margin:4px 0 0;line-height:1.5;">${entry.newRationale}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  container.innerHTML = html;
}

function resetAllChanges() {
  if (!confirm('Reset all score changes? This will revert all edited scores to their original values and clear the change log.')) return;

  scoreOverrides = {};
  scoreChangeLog = [];
  localStorage.removeItem('scoreOverrides');
  localStorage.removeItem('scoreChangeLog');

  // Reload the page to restore original scores from the hardcoded data
  location.reload();
}

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  applyScoreOverrides();
  renderTree();
  renderProfiles();
  renderCompare();
  renderScenarios();
});

// ── View Switching ──
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });
  if (view === 'changelog') renderChangeLog();
}

// ── Tree Rendering ──
function renderTree() {
  const container = document.getElementById('tree-container');
  container.innerHTML = '<div class="tree-root-label">Decision Framework</div>';
  container.appendChild(renderTreeNode(DECISION_TREE, 0, []));
}

function renderTreeNode(node, level, path) {
  const div = document.createElement('div');
  div.className = 'tree-node';

  const hasChildren = node.children && node.children.length > 0;
  const currentPath = [...path, node.label];

  const header = document.createElement('div');
  header.className = 'tree-node-header';
  header.style.paddingLeft = `${level * 4 + 10}px`;
  header.dataset.nodeId = node.id;

  const toggleSvg = hasChildren
    ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'
    : '';

  header.innerHTML = `
    <span class="tree-toggle ${hasChildren ? 'expanded' : 'hidden'}">${toggleSvg}</span>
    <span class="node-icon level-${Math.min(level, 3)}">${level === 0 ? '⚓' : level === 1 ? (node.id === 'cap' ? '🎯' : node.id === 'del' ? '📅' : node.id === 'cost' ? '💰' : '🏭') : '●'}</span>
    <span class="node-label">${node.label}</span>
    ${node.weight ? `<span class="node-weight">${node.weight}</span>` : ''}
  `;

  header.addEventListener('click', (e) => {
    e.stopPropagation();

    // Toggle expand/collapse
    if (hasChildren) {
      const toggle = header.querySelector('.tree-toggle');
      const children = div.querySelector('.tree-children');
      const isExpanded = toggle.classList.contains('expanded');
      toggle.classList.toggle('expanded');
      if (isExpanded) {
        children.classList.add('collapsed');
      } else {
        children.classList.remove('collapsed');
      }
    }

    // Select node
    document.querySelectorAll('.tree-node-header.selected').forEach(h => h.classList.remove('selected'));
    header.classList.add('selected');
    selectedNode = node;
    renderDetail(node, currentPath);
  });

  div.appendChild(header);

  if (hasChildren) {
    const childrenDiv = document.createElement('div');
    childrenDiv.className = 'tree-children';
    node.children.forEach(child => {
      childrenDiv.appendChild(renderTreeNode(child, level + 1, currentPath));
    });
    div.appendChild(childrenDiv);
  }

  return div;
}

// ── Detail Panel ──
function renderDetail(node, path) {
  const panel = document.getElementById('detail-panel');

  const breadcrumb = path.map((p, i) =>
    i < path.length - 1 ? `<span>${p}</span><span class="sep">›</span>` : `<span>${p}</span>`
  ).join('');

  let html = `
    <div class="detail-header">
      <div class="detail-breadcrumb">${breadcrumb}</div>
      <h2 class="detail-title">${node.label}</h2>
      ${node.weight ? `<div class="detail-weight-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Weight: ${node.weight}
      </div>` : ''}
    </div>
    <p class="detail-description">${node.description}</p>
  `;

  // Influence vectors
  if (node.influences && node.influences.length > 0) {
    html += `
      <div class="influence-section">
        <div class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          Influence Vectors
        </div>
        <div>
          ${node.influences.map(inf =>
            `<span class="influence-tag ${inf.level}">${inf.level === 'high' ? '↑' : inf.level === 'medium' ? '→' : '↓'} ${inf.text}</span>`
          ).join('')}
        </div>
      </div>
    `;
  }

  // Scores
  if (node.scores) {
    html += `
      <div class="section-title mb-16">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
        Company Scores
      </div>
      <div class="scores-grid">
    `;

    for (const [key, data] of Object.entries(node.scores)) {
      const company = COMPANIES[key];
      const scoreColor = data.score >= 8 ? 'score-color-high' : data.score >= 6 ? 'score-color-mid' : 'score-color-low';

      const hasOverride = scoreOverrides[`${node.id}::${key}`];
      html += `
        <div class="score-card ${key}">
          <div class="score-card-header">
            <span class="score-company-name ${key}">${company.name}</span>
            <div style="display:flex;align-items:center;gap:8px;">
              ${hasOverride ? '<span class="edit-indicator" title="Score has been manually edited">edited</span>' : ''}
              <span class="score-badge ${scoreColor}">${data.score.toFixed(1)}</span>
              <button class="edit-score-btn" onclick="openEditModal('${node.id}', '${key}')" title="Edit score">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
            </div>
          </div>
          <div class="score-bar">
            <div class="score-bar-fill ${key}" style="width: ${data.score * 10}%"></div>
          </div>
          <div class="score-rationale">${data.rationale}</div>
          ${renderInlineHistory(node.id, key)}
          <div class="score-actions">
            <button class="score-action-btn primary" onclick="openAI('improve', '${key}', '${node.id}')">Improve Score</button>
            <button class="score-action-btn" onclick="openAI('actions', '${key}', '${node.id}')">Suggest Actions</button>
            <button class="score-action-btn" onclick="openAI('challenge', '${key}', '${node.id}')">Challenge</button>
          </div>
        </div>
      `;
    }

    html += '</div>';
  }

  // If this is a category node (has children with scores), show aggregate
  if (node.children && !node.scores) {
    const aggregates = computeAggregateScores(node);
    if (aggregates) {
      html += `
        <div class="section-title mb-16">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
          Aggregate Scores (Weighted Average)
        </div>
        <div class="scores-grid">
      `;

      for (const [key, score] of Object.entries(aggregates)) {
        const company = COMPANIES[key];
        const scoreColor = score >= 8 ? 'score-color-high' : score >= 6 ? 'score-color-mid' : 'score-color-low';

        html += `
          <div class="score-card ${key}">
            <div class="score-card-header">
              <span class="score-company-name ${key}">${company.name}</span>
              <span class="score-badge ${scoreColor}">${score.toFixed(1)}</span>
            </div>
            <div class="score-bar">
              <div class="score-bar-fill ${key}" style="width: ${score * 10}%"></div>
            </div>
            <div class="score-rationale">Weighted average across ${countLeafNodes(node)} evaluation criteria in this category.</div>
            <div class="score-actions">
              <button class="score-action-btn primary" onclick="openAI('analyze', '${key}', '${node.id}')">Deep Analysis</button>
              <button class="score-action-btn" onclick="openAI('strategy', '${key}', '${node.id}')">Win Strategy</button>
            </div>
          </div>
        `;
      }

      html += '</div>';
    }
  }

  // AI Analysis button for nodes without scores
  html += `
    <div style="margin-top: 24px;">
      <button class="score-action-btn primary" style="padding: 8px 16px; font-size: 13px;" onclick="openAI('explore', null, '${node.id}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        Explore with AI
      </button>
    </div>
  `;

  panel.innerHTML = html;
}

// ── Score Computation ──
function computeAggregateScores(node) {
  const companies = ['naval-group', 'babcock-saab', 'navantia'];
  const result = {};
  let hasScores = false;

  for (const company of companies) {
    const { weightedSum, totalWeight } = collectScores(node, company);
    if (totalWeight > 0) {
      result[company] = weightedSum / totalWeight;
      hasScores = true;
    }
  }

  return hasScores ? result : null;
}

function collectScores(node, company) {
  let weightedSum = 0;
  let totalWeight = 0;

  if (node.scores && node.scores[company]) {
    const weight = parseFloat(node.weight) || 1;
    weightedSum += node.scores[company].score * weight;
    totalWeight += weight;
  }

  if (node.children) {
    for (const child of node.children) {
      const childResult = collectScores(child, company);
      weightedSum += childResult.weightedSum;
      totalWeight += childResult.totalWeight;
    }
  }

  return { weightedSum, totalWeight };
}

function countLeafNodes(node) {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((sum, child) => sum + countLeafNodes(child), 0);
}

function getOverallScore(company) {
  const { weightedSum, totalWeight } = collectScores(DECISION_TREE, company);
  return totalWeight > 0 ? weightedSum / totalWeight : 0;
}

// ── Profiles View ──
function renderProfiles() {
  const container = document.getElementById('profiles-container');

  let sidebarHtml = '<div class="profiles-sidebar">';
  sidebarHtml += '<div class="tree-root-label" style="padding:0 8px 12px;">Competitors</div>';

  const companyKeys = Object.keys(COMPANIES);
  companyKeys.forEach((key, i) => {
    const c = COMPANIES[key];
    sidebarHtml += `
      <div class="profile-tab ${i === 0 ? 'active' : ''}" data-company="${key}" onclick="selectProfile('${key}')">
        <div class="profile-tab-dot" style="background:${c.color}"></div>
        <div class="profile-tab-info">
          <h4>${c.name}</h4>
          <p>${c.country} — ${c.platform.split('(')[0].trim()}</p>
        </div>
      </div>
    `;
  });

  sidebarHtml += '</div>';

  container.innerHTML = sidebarHtml + '<div class="profile-main" id="profile-main"></div>';
  selectProfile(companyKeys[0]);
}

function selectProfile(companyKey) {
  document.querySelectorAll('.profile-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.company === companyKey);
  });

  const c = COMPANIES[companyKey];
  const overall = getOverallScore(companyKey);
  const catScores = DECISION_TREE.children.map(cat => ({
    label: cat.label,
    score: computeAggregateScores(cat)?.[companyKey] || 0
  }));

  let html = `
    <div class="profile-header-card ${companyKey}">
      <div class="profile-header-top">
        <div>
          <div class="profile-company-title">${c.name}</div>
          <div class="profile-platform-name">${c.platform} — ${c.country}</div>
        </div>
        <div class="profile-overall-score">
          <div class="label">Overall Score</div>
          <div class="value ${overall >= 8 ? 'score-color-high' : overall >= 6 ? 'score-color-mid' : 'score-color-low'}">${overall.toFixed(1)}</div>
        </div>
      </div>
      <div class="profile-stats">
        ${catScores.map(cs => `
          <div class="profile-stat">
            <div class="stat-value ${cs.score >= 8 ? 'score-color-high' : cs.score >= 6 ? 'score-color-mid' : 'score-color-low'}">${cs.score.toFixed(1)}</div>
            <div class="stat-label">${cs.label.replace('&', '&amp;')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Specs
  html += '<div class="section-title mb-16">Platform Specifications</div>';
  html += '<div class="profile-specs">';
  for (const [label, value] of Object.entries(c.specs)) {
    html += `<div class="spec-item"><div class="spec-label">${label}</div><div class="spec-value">${value}</div></div>`;
  }
  html += '</div>';

  // Strengths & Weaknesses
  html += `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
      <div>
        <div class="section-title mb-16" style="color:var(--green)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Strengths
        </div>
        <ul style="list-style:none;font-size:13px;">
          ${c.strengths.map(s => `<li style="margin-bottom:8px;padding-left:12px;border-left:2px solid var(--green-dim);color:var(--text-dim);">${s}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="section-title mb-16" style="color:var(--red)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Weaknesses & Risks
        </div>
        <ul style="list-style:none;font-size:13px;">
          ${c.weaknesses.map(w => `<li style="margin-bottom:8px;padding-left:12px;border-left:2px solid var(--red-dim);color:var(--text-dim);">${w}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  // Detailed scores table
  html += '<div class="section-title mb-16">Detailed Score Breakdown</div>';
  html += '<table class="profile-scores-table"><thead><tr><th>Criterion</th><th>Weight</th><th>Score</th><th></th></tr></thead><tbody>';

  function renderScoreRows(node, depth = 0) {
    let rows = '';
    if (node.children) {
      for (const child of node.children) {
        if (child.children && child.children.length > 0) {
          const agg = computeAggregateScores(child);
          const score = agg?.[companyKey] || 0;
          rows += `<tr class="${depth === 0 ? 'category-row' : 'clickable-row'}" onclick="navigateToNode('${child.id}')">
            <td style="padding-left:${depth * 20 + 12}px">${child.label}</td>
            <td>${child.weight || ''}</td>
            <td class="score-cell ${score >= 8 ? 'score-color-high' : score >= 6 ? 'score-color-mid' : 'score-color-low'}">${score.toFixed(1)}</td>
            <td><div class="mini-bar"><div class="mini-bar-fill ${companyKey}" style="width:${score*10}%"></div></div></td>
          </tr>`;
          rows += renderScoreRows(child, depth + 1);
        } else if (child.scores && child.scores[companyKey]) {
          const s = child.scores[companyKey];
          rows += `<tr class="clickable-row" onclick="navigateToNode('${child.id}')">
            <td style="padding-left:${depth * 20 + 12}px">${child.label}</td>
            <td>${child.weight || ''}</td>
            <td class="score-cell ${s.score >= 8 ? 'score-color-high' : s.score >= 6 ? 'score-color-mid' : 'score-color-low'}">${s.score.toFixed(1)}</td>
            <td><div class="mini-bar"><div class="mini-bar-fill ${companyKey}" style="width:${s.score*10}%"></div></div></td>
          </tr>`;
        }
      }
    }
    return rows;
  }

  html += renderScoreRows(DECISION_TREE);
  html += '</tbody></table>';

  // AI button
  html += `
    <button class="score-action-btn primary" style="padding:10px 20px;font-size:13px;" onclick="openAI('profile', '${companyKey}', 'root')">
      Analyze ${c.name}'s Overall Position with AI
    </button>
  `;

  document.getElementById('profile-main').innerHTML = html;
}

function navigateToNode(nodeId) {
  const node = findNode(DECISION_TREE, nodeId);
  if (node) {
    switchView('tree');
    const path = findPath(DECISION_TREE, nodeId) || [node.label];

    // Select in tree
    document.querySelectorAll('.tree-node-header.selected').forEach(h => h.classList.remove('selected'));
    const header = document.querySelector(`[data-node-id="${nodeId}"]`);
    if (header) {
      header.classList.add('selected');
      // Expand parents
      let parent = header.closest('.tree-children');
      while (parent) {
        parent.classList.remove('collapsed');
        const parentToggle = parent.previousElementSibling?.querySelector('.tree-toggle');
        if (parentToggle) parentToggle.classList.add('expanded');
        parent = parent.parentElement?.closest('.tree-children');
      }
      header.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    selectedNode = node;
    renderDetail(node, path);
  }
}

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

function findParent(tree, id) {
  if (tree.children) {
    for (const child of tree.children) {
      if (child.id === id) return tree;
      const found = findParent(child, id);
      if (found) return found;
    }
  }
  return null;
}

function findPath(tree, id, current = []) {
  const path = [...current, tree.label];
  if (tree.id === id) return path;
  if (tree.children) {
    for (const child of tree.children) {
      const found = findPath(child, id, path);
      if (found) return found;
    }
  }
  return null;
}

// ── Compare View ──
function renderCompare() {
  const container = document.getElementById('compare-container');

  let html = `
    <div class="compare-header">
      <h2>Competitive Comparison</h2>
      <p>Side-by-side scoring across all evaluation criteria. Green dot indicates category leader.</p>
    </div>
    <table class="compare-table">
      <thead>
        <tr>
          <th>Criterion</th>
          <th>Weight</th>
          <th class="company-col" style="color:var(--naval-group)">Naval Group<br><small style="font-weight:400;opacity:0.6">FDI</small></th>
          <th class="company-col" style="color:var(--babcock-saab)">Babcock/Saab<br><small style="font-weight:400;opacity:0.6">AH-120</small></th>
          <th class="company-col" style="color:var(--navantia)">Navantia<br><small style="font-weight:400;opacity:0.6">ALFA 4000</small></th>
        </tr>
      </thead>
      <tbody>
  `;

  // Overall
  const companies = ['naval-group', 'babcock-saab', 'navantia'];
  const overallScores = companies.map(c => getOverallScore(c));
  const overallMax = Math.max(...overallScores);

  html += `<tr class="cat-row" style="background:rgba(59,130,246,0.08)">
    <td style="font-size:14px;">OVERALL WEIGHTED SCORE</td>
    <td>100%</td>
    ${overallScores.map((s, i) => `<td class="score-cell ${s >= 8 ? 'score-color-high' : s >= 6 ? 'score-color-mid' : 'score-color-low'}">${s.toFixed(1)}${s === overallMax ? '<span class="winner-indicator"></span>' : ''}</td>`).join('')}
  </tr>`;

  function renderCompareRows(node, depth = 0) {
    let rows = '';
    if (node.children) {
      for (const child of node.children) {
        const scores = [];
        if (child.scores) {
          companies.forEach(c => scores.push(child.scores[c]?.score || 0));
        } else {
          const agg = computeAggregateScores(child);
          companies.forEach(c => scores.push(agg?.[c] || 0));
        }

        const maxScore = Math.max(...scores);
        const isCategory = child.children && child.children.length > 0;

        rows += `<tr class="${isCategory && depth === 0 ? 'cat-row' : ''}" style="cursor:pointer" onclick="navigateToNode('${child.id}')">
          <td style="padding-left:${depth * 20 + 14}px;${isCategory && depth === 0 ? 'font-weight:700' : ''}">${child.label}</td>
          <td>${child.weight || ''}</td>
          ${scores.map((s, i) => `<td class="score-cell ${s >= 8 ? 'score-color-high' : s >= 6 ? 'score-color-mid' : 'score-color-low'}">${s.toFixed(1)}${s === maxScore && s > 0 ? '<span class="winner-indicator"></span>' : ''}</td>`).join('')}
        </tr>`;

        if (isCategory) {
          rows += renderCompareRows(child, depth + 1);
        }
      }
    }
    return rows;
  }

  html += renderCompareRows(DECISION_TREE);
  html += '</tbody></table>';

  container.innerHTML = html;
}

// ── Scenarios View ──
function renderScenarios() {
  const container = document.getElementById('scenarios-container');

  let html = `
    <div class="compare-header">
      <h2>Procurement Scenarios</h2>
      <p>Four potential outcomes based on open-source analysis. Click to explore each scenario with AI analysis.</p>
    </div>
  `;

  SCENARIOS.forEach(s => {
    html += `
      <div class="scenario-card ${s.cssClass}">
        <div class="scenario-label">${s.label}</div>
        <div class="scenario-title">${s.title}</div>
        <div class="scenario-outcome">${s.outcome}</div>
        <div class="scenario-risks">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>${s.risk}</span>
        </div>
        <button class="scenario-explore-btn" onclick="openAI('scenario', '${s.company}', '${s.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          Explore Scenario with AI
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ── AI Panel ──
function openAI(mode, companyKey, nodeId) {
  const panel = document.getElementById('ai-panel');
  const overlay = document.getElementById('ai-overlay');

  panel.classList.add('open');
  overlay.classList.add('open');

  // Clear previous conversation
  aiMessages = [];
  document.getElementById('ai-messages').innerHTML = '';

  const node = findNode(DECISION_TREE, nodeId);
  const company = companyKey ? COMPANIES[companyKey] : null;

  // Set context
  let contextParts = [];
  if (node) contextParts.push(`Decision node: "${node.label}" (${node.weight || 'N/A'} weight) — ${node.description}`);
  if (company) contextParts.push(`Company: ${company.name} (${company.country}) offering ${company.platform}`);
  if (node?.scores?.[companyKey]) contextParts.push(`Current score: ${node.scores[companyKey].score}/10 — ${node.scores[companyKey].rationale}`);
  aiContext = contextParts.join('\n');

  const contextLabel = document.getElementById('ai-context-label');
  contextLabel.textContent = company ? `${company.name} — ${node?.label || 'Overall'}` : (node?.label || 'General Analysis');

  // Set quick actions based on mode
  const quickActions = document.getElementById('ai-quick-actions');
  let actions = [];

  switch (mode) {
    case 'improve':
      actions = [
        `How can ${company.name} improve their score on ${node.label}?`,
        `What concrete steps would raise this from ${node.scores?.[companyKey]?.score} to 8+?`,
        `What partnerships or investments would help?`,
        `Compare ${company.name}'s position to competitors here`
      ];
      break;
    case 'actions':
      actions = [
        `What should ${company.name} do in the next 6 months?`,
        `What diplomatic actions would strengthen their bid?`,
        `How should they engage Swedish stakeholders?`,
        `What technical demonstrations would help?`
      ];
      break;
    case 'challenge':
      actions = [
        `I think this score is too high — make the case for a lower score`,
        `I think this score is too low — argue for a higher score`,
        `What evidence supports this specific score?`,
        `How might this score change if circumstances shift?`
      ];
      break;
    case 'analyze':
      actions = [
        `What are ${company.name}'s biggest vulnerabilities in ${node.label}?`,
        `Where does ${company.name} have the strongest advantage?`,
        `How could competitors close the gap?`,
        `What would a winning strategy look like?`
      ];
      break;
    case 'strategy':
      actions = [
        `Design a comprehensive win strategy for ${company.name}`,
        `What are the three most impactful moves ${company.name} can make?`,
        `How should ${company.name} position against each competitor?`,
        `What narrative should ${company.name} push with FMV?`
      ];
      break;
    case 'profile':
      actions = [
        `Give me a SWOT analysis for ${company.name}`,
        `What is ${company.name}'s probability of winning?`,
        `What is ${company.name}'s strongest argument to FMV?`,
        `What would disqualify or severely damage ${company.name}'s bid?`
      ];
      break;
    case 'scenario':
      const scenario = SCENARIOS.find(s => s.id === nodeId);
      actions = [
        `Walk me through how ${scenario?.title || 'this scenario'} would play out`,
        `What are the second and third-order consequences?`,
        `How would the losing bidders likely respond?`,
        `What signals would indicate this scenario is becoming likely?`
      ];
      break;
    case 'explore':
      actions = [
        `Explain the key dynamics at play in ${node.label}`,
        `What are the most important influence vectors here?`,
        `How does this criterion connect to the broader decision?`,
        `What information is missing from public sources?`
      ];
      break;
    default:
      actions = [
        'Analyze the overall competitive landscape',
        'Who is most likely to win and why?',
        'What are the key uncertainties?',
        'What should we watch for in the coming months?'
      ];
  }

  quickActions.innerHTML = actions.map(a =>
    `<button class="quick-action-btn" onclick="sendQuickAction(this, \`${a.replace(/`/g, "'")}\`)">${a.length > 55 ? a.substring(0, 55) + '...' : a}</button>`
  ).join('');

  // Auto-send an initial analysis based on mode
  let initialPrompt = '';
  switch (mode) {
    case 'improve':
      initialPrompt = `Analyze how ${company.name} could improve their score on "${node.label}" (currently ${node.scores?.[companyKey]?.score}/10). Provide specific, actionable recommendations.`;
      break;
    case 'actions':
      initialPrompt = `What specific actions should ${company.name} take to strengthen their position on "${node.label}"? Focus on concrete, near-term steps they could realistically implement.`;
      break;
    case 'challenge':
      initialPrompt = `Critically examine whether ${company.name}'s score of ${node.scores?.[companyKey]?.score}/10 on "${node.label}" is justified. Present arguments for both a higher and lower score, then give your assessment.`;
      break;
    case 'analyze':
      initialPrompt = `Provide a deep analysis of ${company.name}'s position across the "${node.label}" category. What are their key strengths, vulnerabilities, and strategic options?`;
      break;
    case 'strategy':
      initialPrompt = `Design a comprehensive strategy for ${company.name} to maximize their score in the "${node.label}" category. What should they prioritize and why?`;
      break;
    case 'profile':
      initialPrompt = `Provide a comprehensive assessment of ${company.name}'s overall competitive position in the Luleå-class procurement. Cover strengths, weaknesses, opportunities, and threats.`;
      break;
    case 'scenario':
      const sc = SCENARIOS.find(s => s.id === nodeId);
      initialPrompt = `Analyze the scenario: "${sc?.title}". Walk through how it would unfold, including political dynamics, industrial implications, and strategic consequences for Sweden.`;
      break;
    case 'explore':
      initialPrompt = `Explain the key dynamics and considerations for "${node.label}" in the Luleå-class procurement decision. What makes this criterion important and how do the three candidates compare?`;
      break;
  }

  if (initialPrompt) {
    addMessage('user', initialPrompt);
    fetchAIResponse();
  }
}

function closeAIPanel() {
  document.getElementById('ai-panel').classList.remove('open');
  document.getElementById('ai-overlay').classList.remove('open');
}

function addMessage(role, content) {
  aiMessages.push({ role, content });
  const container = document.getElementById('ai-messages');

  const div = document.createElement('div');
  div.className = `ai-msg ${role}`;
  div.innerHTML = `
    <div class="ai-msg-label">${role === 'user' ? 'You' : 'Claude Opus 4.6'}</div>
    <div class="ai-msg-content">${role === 'assistant' ? formatMarkdown(content) : escapeHtml(content)}</div>
  `;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  const container = document.getElementById('ai-messages');
  const div = document.createElement('div');
  div.className = 'ai-msg assistant';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="ai-msg-label">Claude Opus 4.6</div>
    <div class="ai-msg-content"><div class="ai-typing"><span></span><span></span><span></span></div></div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

async function fetchAIResponse() {
  if (isAILoading) return;
  isAILoading = true;
  document.getElementById('send-btn').disabled = true;
  showTypingIndicator();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: aiMessages.map(m => ({ role: m.role, content: m.content })),
        context: aiContext
      })
    });

    const data = await response.json();
    removeTypingIndicator();

    if (data.error) {
      addMessage('assistant', `Error: ${data.error}. Make sure you have set the ANTHROPIC_API_KEY environment variable.`);
    } else {
      aiMessages.push({ role: 'assistant', content: data.content });
      addMessage('assistant', data.content);
    }
  } catch (err) {
    removeTypingIndicator();
    addMessage('assistant', `Connection error: ${err.message}. Make sure the server is running and ANTHROPIC_API_KEY is set.`);
  }

  isAILoading = false;
  document.getElementById('send-btn').disabled = false;
}

function sendMessage() {
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text || isAILoading) return;

  input.value = '';
  addMessage('user', text);
  fetchAIResponse();
}

function sendQuickAction(btn, text) {
  if (isAILoading) return;
  addMessage('user', text);
  fetchAIResponse();
}

// ── Utilities ──
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatMarkdown(text) {
  // Simple markdown formatting
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<strong style="font-size:14px;display:block;margin-top:12px;">$1</strong>')
    .replace(/^## (.+)$/gm, '<strong style="font-size:15px;display:block;margin-top:14px;">$1</strong>')
    .replace(/^# (.+)$/gm, '<strong style="font-size:16px;display:block;margin-top:16px;">$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$1. $2</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}

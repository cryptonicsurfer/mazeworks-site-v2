/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'sv';

export const translations = {
  en: {
    nav: {
      vision: "The Vision",
      stack: "The Stack",
      integration: "Integration",
      strategy: "Strategy",
      contact: "Get In Touch"
    },
    hero: {
      est: "Est. 2025 \u2022 Halland, Sweden",
      title_line1: "FUTURE-PROOF",
      title_line2: "YOUR BUSINESS",
      subtitle: "Prepare for the AI revolution. Don't get locked into legacy tech. We build, operate, and evolve a digital brain that keeps your company ahead of the curve.",
      cta_model: "EXPLORE THE MODEL",
      marquee: "FUTURE PROOF \u2022 AI READY"
    },
    model: {
      label: "The Vision",
      title: "Built for the AI Era",
      desc_start: "T",
      desc: "o survive the AI revolution, you cannot be locked into yesterday's technology. We are your partner in building an agile, open infrastructure that adapts as fast as AI evolves.",
      cards: [
        { step: "01", title: "Start & Analyze", desc: "We map your needs. Whether it's better customer control, automated invoicing, or a new web presence, we design the roadmap." },
        { step: "02", title: "Implement", desc: "We deploy and secure your infrastructure on agile servers you control, ensuring you are ready to pivot when new tech arrives." },
        { step: "03", title: "Refine & Automate", desc: "The magic happens here. We connect your systems with AI. Forms trigger leads, emails send automatically, and data flows seamlessly." },
        { step: "04", title: "Manage", desc: "We ensure everything runs smoothly. Security updates, backups, and monitoring included. Your technical department, as a service." }
      ]
    },
    stack: {
      label: "THE TOOLKIT",
      title: "The AI-Ready Stack",
      desc: "Legacy suites like Microsoft or Salesforce are slow to adapt. Our open-source stack is modular, letting us plug in the latest AI tools the moment they arrive.",
      growth: "Growth & Sales",
      ops: "Operations & Structure",
      ai: "Integration & AI",
      cloud_title: "Adaptive Cloud",
      cloud_desc: "Modular \u2022 Agile \u2022 AI-First"
    },
    integration: {
      label: "AGENTIC ORCHESTRATION",
      title: "The Agentic Nervous System",
      desc1: "We connect AI to be more than just a stupid chatbot. By leveraging <strong>Google Agent-to-Agent</strong> and the <strong>Model Context Protocol (MCP)</strong>, we architect a mesh where specialized agents talk to each other.",
      desc2: "Your CRM agent alerts your Project Management agent, who then instructs the Code agent. Orchestrated by <strong>n8n</strong>, this system of agents solves complex problems autonomously, creating a true digital workforce.",
      caption: "Interact with the diagram to see how Agents (colored) exchange context to trigger Tools (grey)."
    },
    strategy: {
      label: "STRATEGY",
      title: "Consulting & Strategy",
      desc1: "Technology is only as good as the strategy behind it. Beyond the code, we offer high-level business development and strategic consulting.",
      desc2: "We help you navigate complex market landscapes, ensuring that your new \"Digital Brain\" is directed towards the most impactful business goals. We bridge the gap between technical capability and business reality."
    },
    metrics: {
      title: "Why Future-Proofing Matters",
      desc: "The AI landscape changes daily. Locked-in systems hold you back. Open systems let you lead."
    },
    team: {
      label: "THE ARCHITECTS",
      title: "Leadership",
      desc: "The minds behind your digital infrastructure.",
      roles: ["AI Implementation Specialist", "AI Implementation Specialist"]
    },
    contact: {
      title: "Future-Proof Now.",
      desc: "Ready to build a digital brain that you actually own? Let's start the conversation.",
      cta: "Get In Touch"
    },
    footer: {
      rights: "\u00a9 2025 Mazeworks AB. Halland, Sweden."
    },
    // Diagram translations
    diagrams: {
      agentNetwork: {
        title: "Agent Interaction Mesh",
        desc: "Observe <strong>Autonomous Agents</strong> (colored) exchanging context via <strong>MCP</strong> to operate your systems (nodes). They don't just wait for input; they talk to each other to solve problems.",
        context: "Context",
        agentAction: "Agent Action",
        toolResource: "Tool/Resource"
      },
      transformer: {
        title: "Your AI Engine",
        desc: "Your data is processed securely within your own infrastructure. From raw input to strategic insight, nothing leaves your digital borders.",
        raw: "Raw Data",
        logic: "Secure Logic",
        result: "Result"
      },
      performance: {
        title: "The Mazeworks Advantage",
        metrics: {
          Value: "Value for Money",
          Freedom: "Freedom",
          Innovation: "Innovation"
        },
        desc: {
          Value: "Stop renting your tech stack. With no per-user license fees, every dollar you spend builds a permanent asset for your company instead of paying rent.",
          Freedom: "100% Data Sovereignty. Your customer data, your IP, your rules. No third-party lock-in.",
          Innovation: "Adapt faster. Open source allows for infinite customization without waiting for vendor roadmaps."
        },
        labels: {
          legacy: "Legacy SaaS",
          mazeworks: "Mazeworks",
          score: "COMPARATIVE SCORE"
        }
      }
    }
  },
  sv: {
    nav: {
      vision: "Visionen",
      stack: "Verktygen",
      integration: "Integration",
      strategy: "Strategi",
      contact: "Kontakta Oss"
    },
    hero: {
      est: "Etablerad 2025 \u2022 Halland, Sverige",
      title_line1: "FRAMTIDSS\u00c4KRA",
      title_line2: "DITT F\u00d6RETAG",
      subtitle: "F\u00f6rbered er f\u00f6r AI-revolutionen. L\u00e5s inte in er i g\u00e5rdagens teknik. Vi bygger, driftar och utvecklar en digital hj\u00e4rna som h\u00e5ller ert f\u00f6retag i framkant.",
      cta_model: "UTFORSKA MODELLEN",
      marquee: "FRAMTIDSS\u00c4KRAD \u2022 AI-REDO"
    },
    model: {
      label: "Visionen",
      title: "Byggt f\u00f6r AI-eran",
      desc_start: "F",
      desc: "\u00f6r att \u00f6verleva AI-revolutionen kan ni inte sitta fast i gamla system. Vi \u00e4r er partner i att bygga en l\u00e4ttr\u00f6rlig, \u00f6ppen infrastruktur som anpassar sig lika snabbt som AI utvecklas.",
      cards: [
        { step: "01", title: "Starta & Analysera", desc: "Vi kartl\u00e4gger era behov. Oavsett om det g\u00e4ller b\u00e4ttre kundkontroll, automatiserad fakturering eller en ny webbplats, ritar vi kartan." },
        { step: "02", title: "Implementera", desc: "Vi s\u00e4tter upp och s\u00e4krar er infrastruktur p\u00e5 servrar ni kontrollerar, vilket g\u00f6r er redo att st\u00e4lla om n\u00e4r ny teknik anl\u00e4nder." },
        { step: "03", title: "F\u00f6r\u00e4dla & Automatisera", desc: "H\u00e4r sker magin. Vi kopplar ihop systemen med AI. Formul\u00e4r blir till leads, mail skickas automatiskt och data fl\u00f6dar s\u00f6ml\u00f6st." },
        { step: "04", title: "F\u00f6rvalta", desc: "Vi ser till att allt snurrar. S\u00e4kerhetsuppdateringar, backuper och \u00f6vervakning ing\u00e5r. Er tekniska avdelning, som en tj\u00e4nst." }
      ]
    },
    stack: {
      label: "VERKTYGSL\u00c5DAN",
      title: "En AI-redo Tech Stack",
      desc: "Gamla sviter som Microsoft eller Salesforce \u00e4r l\u00e5ngsamma att anpassa sig. V\u00e5r \u00f6ppna k\u00e4llkods-stack \u00e4r modul\u00e4r, vilket l\u00e5ter oss koppla in de senaste AI-verktygen s\u00e5 fort de sl\u00e4pps.",
      growth: "Tillv\u00e4xt & F\u00f6rs\u00e4ljning",
      ops: "Verksamhet & Struktur",
      ai: "Integration & AI",
      cloud_title: "Adaptivt Moln",
      cloud_desc: "Modul\u00e4rt \u2022 Agilt \u2022 AI-First"
    },
    integration: {
      label: "AGENT-ORKESTRERING",
      title: "Det Agentbaserade Nervsystemet",
      desc1: "Vi kopplar ihop AI f\u00f6r att vara mer \u00e4n bara en enkel chattbot. Genom att anv\u00e4nda <strong>Google Agent-to-Agent</strong> och <strong>Model Context Protocol (MCP)</strong> arkitekterar vi ett n\u00e4tverk d\u00e4r specialiserade agenter pratar med varandra.",
      desc2: "Er CRM-agent varnar Projektledar-agenten, som i sin tur instruerar Kod-agenten. Orkestrerat av <strong>n8n</strong>, l\u00f6ser detta agentsystem komplexa problem autonomt och skapar en verklig digital arbetsstyrka.",
      caption: "Interagera med diagrammet f\u00f6r att se hur Agenter (f\u00e4rgade) utbyter kontext f\u00f6r att styra Verktyg (gr\u00e5)."
    },
    strategy: {
      label: "STRATEGI",
      title: "Konsultation & Strategi",
      desc1: "Teknik \u00e4r bara s\u00e5 bra som strategin bakom den. Bortom koden erbjuder vi aff\u00e4rsutveckling och strategisk r\u00e5dgivning p\u00e5 h\u00f6g niv\u00e5.",
      desc2: "Vi hj\u00e4lper er att navigera i komplexa marknader och s\u00e4kerst\u00e4ller att er nya \"Digitala Hj\u00e4rna\" riktas mot de viktigaste aff\u00e4rsm\u00e5len. Vi bryggar gapet mellan teknisk f\u00f6rm\u00e5ga och aff\u00e4rsverklighet."
    },
    metrics: {
      title: "Varf\u00f6r framtidss\u00e4kring \u00e4r viktigt",
      desc: "AI-landskapet f\u00f6r\u00e4ndras dagligen. Inl\u00e5sta system h\u00e5ller er tillbaka. \u00d6ppna system l\u00e5ter er leda."
    },
    team: {
      label: "ARKITEKTERNA",
      title: "Ledarskap",
      desc: "Hj\u00e4rnorna bakom er digitala infrastruktur.",
      roles: ["AI-implementeringsspecialist", "AI-implementeringsspecialist"]
    },
    contact: {
      title: "Framtidss\u00e4kra nu.",
      desc: "Redo att bygga en digital hj\u00e4rna som ni faktiskt \u00e4ger? L\u00e5t oss b\u00f6rja samtalet.",
      cta: "Kontakta Oss"
    },
    footer: {
      rights: "\u00a9 2025 Mazeworks AB. Halland, Sverige."
    },
    // Diagram translations
    diagrams: {
      agentNetwork: {
        title: "Agent-interaktionsn\u00e4t",
        desc: "Observera <strong>Autonoma Agenter</strong> (f\u00e4rgade) som utbyter kontext via <strong>MCP</strong> f\u00f6r att styra era system (noder). De v\u00e4ntar inte bara p\u00e5 input; de pratar med varandra f\u00f6r att l\u00f6sa problem.",
        context: "Kontext",
        agentAction: "Agenthandling",
        toolResource: "Verktyg/Resurs"
      },
      transformer: {
        title: "Er AI-Motor",
        desc: "Er data behandlas s\u00e4kert inom er egen infrastruktur. Fr\u00e5n r\u00e5data till strategisk insikt l\u00e4mnar ingenting era digitala gr\u00e4nser.",
        raw: "R\u00e5data",
        logic: "S\u00e4ker Logik",
        result: "Resultat"
      },
      performance: {
        title: "Mazeworks F\u00f6rdelen",
        metrics: {
          Value: "Prisv\u00e4rdhet",
          Freedom: "Frihet",
          Innovation: "Innovation"
        },
        desc: {
          Value: "Sluta hyra er teknikstack. Utan licensavgifter per anv\u00e4ndare bygger varje investerad krona en permanent tillg\u00e5ng f\u00f6r ert f\u00f6retag.",
          Freedom: "100% Datasuver\u00e4nitet. Er kunddata, ert IP, era regler. Ingen inl\u00e5sning hos tredje part.",
          Innovation: "Anpassa er snabbare. \u00d6ppen k\u00e4llkod till\u00e5ter o\u00e4ndlig anpassning utan att v\u00e4nta p\u00e5 leverant\u00f6rens roadmap."
        },
        labels: {
          legacy: "Gammal SaaS",
          mazeworks: "Mazeworks",
          score: "J\u00c4MF\u00d6RELSESCORE"
        }
      }
    }
  }
} as const;

export type Translations = typeof translations;
export type TranslationContent = typeof translations.en;

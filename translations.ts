/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'sv';

export const translations = {
  en: {
    nav: {
      vision: "Our Approach",
      stack: "The Stack",
      integration: "AI Agents",
      strategy: "Strategy",
      contact: "Get In Touch"
    },
    hero: {
      est: "Est. 2025 \u2022 Halland, Sweden",
      title_line1: "Beyond the",
      title_line2: "PROMPT BOX",
      subtitle: "We've tested every major model since gpt-3 launched. We know what works, what doesn't, and what's hype. Now we build practical AI systems for businesses ready to move faster.",
      cta_model: "SEE HOW WE WORK",
      marquee: "PRACTITIONERS \u2022 NOT CONSULTANTS"
    },
    model: {
      label: "Our Approach",
      title: "From Insight to Infrastructure",
      desc_start: "W",
      desc: "e don't sell tools we haven't used ourselves. Since 2022, we've tracked every major AI release, tested hundreds of models, and built real systems. That research becomes your competitive advantage.",
      cards: [
        { step: "01", title: "Understand", desc: "We map your workflows and pain points. No generic audits \u2013 we dig into what actually slows you down and where AI creates real value." },
        { step: "02", title: "Build", desc: "We deploy open-source infrastructure you control. CRM, automation, knowledge bases \u2013 integrated and ready for AI from day one." },
        { step: "03", title: "Connect", desc: "This is where it gets interesting. We wire up AI agents that talk to your systems, automate workflows, and handle tasks autonomously." },
        { step: "04", title: "Evolve", desc: "AI moves fast. We monitor, update, and swap in better tools as they emerge. Your system stays current without the vendor lock-in." }
      ]
    },
    stack: {
      label: "THE TOOLKIT",
      title: "Open Source, AI-Native",
      desc: "Microsoft and Salesforce charge per user and update slowly. We build on open-source tools that cost less, adapt faster, and integrate with any AI model \u2013 not just the vendor's.",
      growth: "Growth & Sales",
      ops: "Operations & Structure",
      ai: "Integration & AI",
      cloud_title: "Your Infrastructure",
      cloud_desc: "Owned \u2022 Flexible \u2022 AI-Ready"
    },
    integration: {
      label: "AGENTIC SYSTEMS",
      title: "AI That Acts, Not Just Answers",
      desc1: "Most companies stop at chatbots. We build <strong>agent systems</strong> where AI models coordinate with each other via <strong>MCP</strong> and <strong>A2A protocols</strong> to actually get work done.",
      desc2: "Your sales agent spots an opportunity, alerts the project agent, who spins up resources and notifies the team. Orchestrated by <strong>n8n</strong>, these systems handle complexity that would require entire departments.",
      caption: "Watch how agents (colored) exchange context to operate tools (grey) autonomously."
    },
    strategy: {
      label: "BUSINESS + TECH",
      title: "Strategy Meets Implementation",
      desc1: "We've built DCF models, run due diligence, and closed transactions. We understand unit economics, scaling challenges, and why the wrong tech stack kills growth.",
      desc2: "That business lens shapes every technical decision. We don't just implement \u2013 we help you aim the AI at problems that actually move the needle."
    },
    metrics: {
      title: "Why Open Systems Win",
      desc: "The AI landscape changes weekly. Locked-in vendors can't keep up. Open infrastructure lets you adopt the best tools instantly."
    },
    team: {
      label: "WHO WE ARE",
      title: "Practitioners First",
      desc: "18 public AI webinars since 2023. Hundreds of models tested. Systems built and deployed. We teach what we use and sell what we've proven.",
      roles: ["AI Implementation Specialist", "AI Implementation Specialist"]
    },
    contact: {
      title: "Ready to Build?",
      desc: "Skip the generic AI audit. Let's talk about what you're actually trying to solve.",
      cta: "Start a Conversation"
    },
    footer: {
      rights: "\u00a9 2025 Mazeworks AB. Halland, Sweden."
    },
    diagrams: {
      agentNetwork: {
        title: "Agent Interaction Mesh",
        desc: "Watch <strong>autonomous agents</strong> (colored) exchange context via <strong>MCP</strong> to operate your systems. They coordinate to solve problems \u2013 no human in the loop required.",
        context: "Context",
        agentAction: "Agent Action",
        toolResource: "Tool/Resource"
      },
      transformer: {
        title: "Your AI Engine",
        desc: "Your data stays in your infrastructure. From input to insight, nothing leaves your borders.",
        raw: "Raw Data",
        logic: "Secure Processing",
        result: "Output"
      },
      performance: {
        title: "The Mazeworks Advantage",
        metrics: {
          Value: "Cost Efficiency",
          Freedom: "Data Control",
          Innovation: "Adaptability"
        },
        desc: {
          Value: "No per-user licenses. Every dollar builds permanent infrastructure instead of paying rent to software vendors.",
          Freedom: "100% data sovereignty. Your customer data, your IP, your rules. No third-party lock-in.",
          Innovation: "New AI model drops? Plug it in. Open systems let you adopt the best tools the day they launch."
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
      vision: "V\u00e5rt S\u00e4tt",
      stack: "Verktygen",
      integration: "AI-Agenter",
      strategy: "Strategi",
      contact: "Kontakta Oss"
    },
    hero: {
      est: "Etablerad 2025 \u2022 Halland, Sverige",
      title_line1: "AI - mer än",
      title_line2: "<PROMPT>",
      subtitle: "Vi har testat varje SOTA modell sedan gpt-3 lanserades. Vi vet vad som fungerar, vad som inte g\u00f6r det, och vad som \u00e4r hype. Nu bygger vi praktiska AI-system f\u00f6r f\u00f6retag som vill r\u00f6ra sig snabbare.",
      cta_model: "SE HUR VI ARBETAR",
      marquee: "PRAKTIKER \u2022 INTE KONSULTER"
    },
    model: {
      label: "V\u00e5rt S\u00e4tt",
      title: "Fr\u00e5n Insikt till Infrastruktur",
      desc_start: "V",
      desc: "i s\u00e4ljer inte verktyg vi inte anv\u00e4nt sj\u00e4lva. Sedan 2022 har vi f\u00f6ljt varje stor AI-release, testat hundratals modeller och byggt riktiga system. Den forskningen blir er konkurrensf\u00f6rdel.",
      cards: [
        { step: "01", title: "F\u00f6rst\u00e5", desc: "Vi kartl\u00e4gger era arbetsfl\u00f6den och smärtpunkter. Inga generiska audits \u2013 vi gr\u00e4ver i vad som faktiskt bromsar er och var AI skapar verkligt v\u00e4rde." },
        { step: "02", title: "Bygg", desc: "Vi s\u00e4tter upp \u00f6ppen k\u00e4llkods-infrastruktur ni kontrollerar. CRM, automation, kunskapsbaser \u2013 integrerat och AI-redo fr\u00e5n dag ett." },
        { step: "03", title: "Koppla", desc: "H\u00e4r blir det intressant. Vi kopplar ihop AI-agenter som pratar med era system, automatiserar fl\u00f6den och hanterar uppgifter autonomt." },
        { step: "04", title: "Utveckla", desc: "AI r\u00f6r sig snabbt. Vi \u00f6vervakar, uppdaterar och byter in b\u00e4ttre verktyg n\u00e4r de dyker upp. Ert system h\u00e5lls aktuellt utan vendor lock-in." }
      ]
    },
    stack: {
      label: "VERKTYGSL\u00c5DAN",
      title: "\u00d6ppen K\u00e4llkod, AI-Native",
      desc: "Microsoft och Salesforce tar betalt per anv\u00e4ndare och uppdaterar l\u00e5ngsamt. Vi bygger p\u00e5 \u00f6ppna verktyg som kostar mindre, anpassar sig snabbare och integrerar med vilken AI-modell som helst.",
      growth: "Tillv\u00e4xt & F\u00f6rs\u00e4ljning",
      ops: "Verksamhet & Struktur",
      ai: "Integration & AI",
      cloud_title: "Er Infrastruktur",
      cloud_desc: "\u00c4gd \u2022 Flexibel \u2022 AI-Redo"
    },
    integration: {
      label: "AGENTSYSTEM",
      title: "AI Som Agerar, Inte Bara Svarar",
      desc1: "De flesta stannar vid chatbotar. Vi bygger <strong>agentsystem</strong> d\u00e4r AI-modeller koordinerar med varandra via <strong>MCP</strong> och <strong>A2A-protokoll</strong> f\u00f6r att faktiskt f\u00e5 jobb gjort.",
      desc2: "Er s\u00e4ljagent uppt\u00e4cker en m\u00f6jlighet, varnar projektagenten, som startar resurser och meddelar teamet. Orkestrerat av <strong>n8n</strong> hanterar dessa system komplexitet som annars kr\u00e4ver hela avdelningar.",
      caption: "Se hur agenter (f\u00e4rgade) utbyter kontext f\u00f6r att styra verktyg (gr\u00e5) autonomt."
    },
    strategy: {
      label: "AFF\u00c4R + TEKNIK",
      title: "Strategi M\u00f6ter Implementation",
      desc1: "Vi har byggt DCF-modeller, k\u00f6rt due diligence och genomf\u00f6rt transaktioner. Vi f\u00f6rst\u00e5r enhetsekonomi, skalningsutmaningar och varf\u00f6r fel teknikstack d\u00f6dar tillv\u00e4xt.",
      desc2: "Det aff\u00e4rsm\u00e4ssiga perspektivet formar varje tekniskt beslut. Vi implementerar inte bara \u2013 vi hj\u00e4lper er rikta AI:n mot problem som faktiskt flyttar n\u00e5len."
    },
    metrics: {
      title: "Varf\u00f6r \u00d6ppna System Vinner",
      desc: "AI-landskapet f\u00f6r\u00e4ndras varje vecka. Inl\u00e5sta leverant\u00f6rer h\u00e4nger inte med. \u00d6ppen infrastruktur l\u00e5ter er anamma de b\u00e4sta verktygen direkt."
    },
    team: {
      label: "VILKA VI \u00c4R",
      title: "Praktiker F\u00f6rst",
      desc: "18 publika AI-webbinarier sedan 2023. Hundratals modeller testade. System byggda och driftsatta. Vi l\u00e4r ut det vi anv\u00e4nder och s\u00e4ljer det vi bevisat.",
      roles: ["AI-implementeringsspecialist", "AI-implementeringsspecialist"]
    },
    contact: {
      title: "Redo att Bygga?",
      desc: "Skippa den generiska AI-auditen. L\u00e5t oss prata om vad ni faktiskt f\u00f6rs\u00f6ker l\u00f6sa.",
      cta: "Starta en Konversation"
    },
    footer: {
      rights: "\u00a9 2025 Mazeworks AB. Halland, Sverige."
    },
    diagrams: {
      agentNetwork: {
        title: "Agent-interaktionsn\u00e4t",
        desc: "Se hur <strong>autonoma agenter</strong> (f\u00e4rgade) utbyter kontext via <strong>MCP</strong> f\u00f6r att styra era system. De koordinerar f\u00f6r att l\u00f6sa problem \u2013 ingen m\u00e4nniska i loopen kr\u00e4vs.",
        context: "Kontext",
        agentAction: "Agenthandling",
        toolResource: "Verktyg/Resurs"
      },
      transformer: {
        title: "Er AI-Motor",
        desc: "Er data stannar i er infrastruktur. Fr\u00e5n input till insikt l\u00e4mnar ingenting era gr\u00e4nser.",
        raw: "R\u00e5data",
        logic: "S\u00e4ker Bearbetning",
        result: "Resultat"
      },
      performance: {
        title: "Mazeworks-F\u00f6rdelen",
        metrics: {
          Value: "Kostnadseffektivitet",
          Freedom: "Datakontroll",
          Innovation: "Anpassningsbarhet"
        },
        desc: {
          Value: "Inga licensavgifter per anv\u00e4ndare. Varje krona bygger permanent infrastruktur ist\u00e4llet f\u00f6r att betala hyra till mjukvaruleverant\u00f6rer.",
          Freedom: "100% datasuver\u00e4nitet. Er kunddata, ert IP, era regler. Ingen inl\u00e5sning hos tredje part.",
          Innovation: "Ny AI-modell sl\u00e4pps? Koppla in den. \u00d6ppna system l\u00e5ter er anamma de b\u00e4sta verktygen dagen de lanseras."
        },
        labels: {
          legacy: "Legacy SaaS",
          mazeworks: "Mazeworks",
          score: "J\u00c4MF\u00d6RELSEV\u00c4RDE"
        }
      }
    }
  }
} as const;

export type Translations = typeof translations;
export type TranslationContent = typeof translations.en;

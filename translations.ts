/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'sv';

export const translations = {
  en: {
    nav: {
      services: "Services",
      approach: "How We Work",
      techDeep: "For Tech Enthusiasts",
      contact: "Get In Touch"
    },
    hero: {
      location: "AI Agency in Falkenberg",
      title_line1: "We Are an",
      title_line2: "AI Agency",
      subtitle: "Need a website? We build it with AI. Business systems? AI. Bookkeeping? AI. IT support? AI. We're a full-service agency that uses AI in everything we do — which means faster delivery and better results.",
      cta: "See What We Do"
    },
    services: {
      label: "What We Do",
      title: "One Partner, All Your Digital Needs",
      subtitle: "Instead of juggling multiple expensive agencies, you get one local partner who handles everything — powered by AI.",
      items: [
        {
          title: "Web & Digital",
          desc: "Websites, web apps, e-commerce. We build modern digital solutions that work on all devices.",
          examples: "Websites, landing pages, web apps, e-commerce"
        },
        {
          title: "Business Systems",
          desc: "CRM, ERP, project management. We set up and integrate the systems that run your business.",
          examples: "CRM, ERP, inventory, project tools"
        },
        {
          title: "AI & Automation",
          desc: "Automate repetitive tasks. Let AI handle what steals your time so you can focus on what matters.",
          examples: "Workflow automation, chatbots, AI integrations"
        },
        {
          title: "Bookkeeping & BI",
          desc: "Financial systems and reports that give you control. See how your business is doing — in real time.",
          examples: "Bookkeeping, reporting, dashboards"
        },
        {
          title: "IT Partner",
          desc: "We become your IT department. Support, infrastructure, security, strategic advice — everything.",
          examples: "Helpdesk, cloud, security, IT strategy"
        }
      ]
    },
    approach: {
      label: "How We Work",
      title: "From Idea to Running System",
      desc: "We don't just deliver and disappear. We build solutions you own and understand, and we stick around to make sure everything keeps working.",
      steps: [
        { title: "Understand", desc: "We map your needs and pain points. No generic audits — we dig into what actually slows you down." },
        { title: "Build", desc: "We build with AI, which means faster delivery. You get something that works, not a 6-month project." },
        { title: "Support", desc: "We don't disappear after launch. We're here when you need us — that's what local partners are for." }
      ]
    },
    local: {
      label: "Local in Falkenberg",
      title: "Your Neighbor, Your IT Partner",
      desc: "We're based in Falkenberg and work primarily with companies in the area. When you hire us, you're supporting local business — and you get a partner you can actually meet for coffee.",
      cta: "That matters to us."
    },
    team: {
      label: "Who We Are",
      title: "Practitioners, Not Salespeople",
      desc: "We've tested every major AI model since GPT-3 launched. We've built systems, run webinars, and worked hands-on with the technology. We sell what we use ourselves.",
      roles: ["AI Implementation Specialist", "AI Implementation Specialist"]
    },
    techDeep: {
      label: "For Tech Enthusiasts",
      title: "Under the Hood",
      desc: "Curious about what makes our solutions tick? Here's how we think about AI architecture.",
      agents: {
        title: "Agentic Systems",
        desc: "We build agent systems where AI models coordinate via MCP and A2A protocols. Your sales agent spots an opportunity, alerts the project agent, who spins up resources. Orchestrated by n8n.",
        caption: "Watch how agents (colored) exchange context to operate tools (grey) autonomously."
      },
      stack: {
        title: "Open Source Stack",
        desc: "We build on open-source tools: Twenty (CRM), n8n (automation), Directus (CMS), and more. No vendor lock-in, lower costs, full control."
      }
    },
    contact: {
      title: "Curious?",
      desc: "Let's have a coffee and talk about what you need. No sales pitch — just a conversation about your challenges.",
      cta: "Get In Touch"
    },
    footer: {
      rights: "© 2025 Mazeworks AB. Falkenberg, Sweden."
    },
    diagrams: {
      agentNetwork: {
        title: "Agent Interaction Mesh",
        desc: "Watch <strong>autonomous agents</strong> (colored) exchange context via <strong>MCP</strong> to operate your systems. They coordinate to solve problems — no human in the loop required.",
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
      services: "Tjänster",
      approach: "Så Jobbar Vi",
      techDeep: "För Teknikintresserade",
      contact: "Kontakta Oss"
    },
    hero: {
      location: "AI-byrå i Falkenberg",
      title_line1: "Vi är en",
      title_line2: "AI-byrå",
      subtitle: "Behöver ni en hemsida? Vi bygger den med AI. Affärssystem? AI. Bokföring? AI. IT-support? AI. Vi är en fullservicebyrå som använder AI i allt vi gör — vilket betyder snabbare leverans och bättre resultat.",
      cta: "Se Vad Vi Gör"
    },
    services: {
      label: "Vad Vi Gör",
      title: "En Partner, Alla Era Digitala Behov",
      subtitle: "Istället för att jonglera flera dyra byråer får ni en lokal partner som fixar allt — med AI som motor.",
      items: [
        {
          title: "Webb & Digitalt",
          desc: "Hemsidor, webbappar, e-handel. Vi bygger moderna digitala lösningar som fungerar på alla enheter.",
          examples: "Hemsidor, landningssidor, webbappar, e-handel"
        },
        {
          title: "Affärssystem",
          desc: "CRM, ERP, projekthantering. Vi sätter upp och integrerar systemen som driver ert företag.",
          examples: "CRM, ERP, lager, projektverktyg"
        },
        {
          title: "AI & Automation",
          desc: "Automatisera det repetitiva. Låt AI hantera det som stjäl er tid så ni kan fokusera på det som spelar roll.",
          examples: "Flödesautomation, chatbotar, AI-integrationer"
        },
        {
          title: "Bokföring & BI",
          desc: "Ekonomisystem och rapporter som ger er kontroll. Se hur företaget mår — i realtid.",
          examples: "Bokföring, rapportering, dashboards"
        },
        {
          title: "IT-Partner",
          desc: "Vi blir er IT-avdelning. Support, infrastruktur, säkerhet, strategisk rådgivning — hela paketet.",
          examples: "Helpdesk, moln, säkerhet, IT-strategi"
        }
      ]
    },
    approach: {
      label: "Så Jobbar Vi",
      title: "Från Idé till Fungerande System",
      desc: "Vi levererar inte bara och försvinner. Vi bygger lösningar ni äger och förstår, och vi finns kvar för att se till att allt fortsätter fungera.",
      steps: [
        { title: "Förstå", desc: "Vi kartlägger era behov och smärtpunkter. Inga generiska audits — vi gräver i vad som faktiskt bromsar er." },
        { title: "Bygga", desc: "Vi bygger med AI, vilket betyder snabbare leverans. Ni får något som funkar, inte ett 6-månaders projekt." },
        { title: "Stötta", desc: "Vi försvinner inte efter lansering. Vi finns här när ni behöver oss — det är det lokala partners är till för." }
      ]
    },
    local: {
      label: "Lokalt i Falkenberg",
      title: "Er Granne, Er IT-Partner",
      desc: "Vi sitter i Falkenberg och jobbar främst med företag i området. När ni anlitar oss stöttar ni lokalt näringsliv — och ni får en partner ni faktiskt kan träffa över en kaffe.",
      cta: "Det betyder något för oss."
    },
    team: {
      label: "Vilka Vi Är",
      title: "Praktiker, Inte Säljare",
      desc: "Vi har testat varje stor AI-modell sedan GPT-3 lanserades. Vi har byggt system, hållit webbinarier och jobbat hands-on med tekniken. Vi säljer det vi själva använder.",
      roles: ["AI-implementeringsspecialist", "AI-implementeringsspecialist"]
    },
    techDeep: {
      label: "För Teknikintresserade",
      title: "Under Huven",
      desc: "Nyfiken på vad som driver våra lösningar? Så här tänker vi kring AI-arkitektur.",
      agents: {
        title: "Agentsystem",
        desc: "Vi bygger agentsystem där AI-modeller koordinerar via MCP och A2A-protokoll. Er säljagent upptäcker en möjlighet, varnar projektagenten, som startar resurser. Orkestrerat av n8n.",
        caption: "Se hur agenter (färgade) utbyter kontext för att styra verktyg (grå) autonomt."
      },
      stack: {
        title: "Open Source-stack",
        desc: "Vi bygger på open source-verktyg: Twenty (CRM), n8n (automation), Directus (CMS), med mera. Ingen vendor lock-in, lägre kostnader, full kontroll."
      }
    },
    contact: {
      title: "Nyfikna?",
      desc: "Vi tar en kaffe och pratar om vad ni behöver. Ingen säljpitch — bara ett samtal om era utmaningar.",
      cta: "Hör Av Er"
    },
    footer: {
      rights: "© 2025 Mazeworks AB. Falkenberg, Sverige."
    },
    diagrams: {
      agentNetwork: {
        title: "Agent-interaktionsnät",
        desc: "Se hur <strong>autonoma agenter</strong> (färgade) utbyter kontext via <strong>MCP</strong> för att styra era system. De koordinerar för att lösa problem — ingen människa i loopen krävs.",
        context: "Kontext",
        agentAction: "Agenthandling",
        toolResource: "Verktyg/Resurs"
      },
      transformer: {
        title: "Er AI-Motor",
        desc: "Er data stannar i er infrastruktur. Från input till insikt lämnar ingenting era gränser.",
        raw: "Rådata",
        logic: "Säker Bearbetning",
        result: "Resultat"
      },
      performance: {
        title: "Mazeworks-Fördelen",
        metrics: {
          Value: "Kostnadseffektivitet",
          Freedom: "Datakontroll",
          Innovation: "Anpassningsbarhet"
        },
        desc: {
          Value: "Inga licensavgifter per användare. Varje krona bygger permanent infrastruktur istället för att betala hyra till mjukvaruleverantörer.",
          Freedom: "100% datasuveränitet. Er kunddata, ert IP, era regler. Ingen inlåsning hos tredje part.",
          Innovation: "Ny AI-modell släpps? Koppla in den. Öppna system låter er anamma de bästa verktygen dagen de lanseras."
        },
        labels: {
          legacy: "Legacy SaaS",
          mazeworks: "Mazeworks",
          score: "JÄMFÖRELSEVÄRDE"
        }
      }
    }
  }
} as const;

export type Translations = typeof translations;
export type TranslationContent = typeof translations.en;

import { Bot, Globe, Sparkles, Workflow, Database, Camera, Layers, Cpu, Terminal, Eye, Brain } from 'lucide-react';

export type BlogEntry = {
  id: number;
  category: string;
  title: string;
  date: string;
  month: string;
  readTime: string;
  excerpt: string;
  content: string;
  tools: string[];
  icon: typeof Bot;
  youtubeUrl?: string;
};

export const blogTranslations = {
  en: {
    header: {
      years: "2023–2025",
      title: "AI Journal",
      location: "Falkenberg",
    },
    ui: {
      watchWebinar: "Watch webinar",
      authors: "Palle & Frej",
      authorsRole: "AI Architects",
    },
    entries: [
      {
        id: 1,
        category: "AGENT REVOLUTION",
        title: "When AI Takes the Controls – Agents in Everyday Life",
        date: "25 NOV 2025",
        month: "NOVEMBER",
        readTime: "9 MIN",
        excerpt: "A deep dive into autonomous agents that control browsers and perform complex administrative tasks.",
        content: "In the latest chapter, we leave all speculation behind to focus on practical utility. We demonstrate how AI agents can now control browsers for complex assignments.\n\nIt's about letting AI analyze a shopping list, navigate to an e-commerce site, and prepare an order. Through Google AI Studio, we show how to build your own applications without code.",
        tools: ["Google AI Studio", "NotebookLM", "Claude Computer Use", "Minimax"],
        icon: Bot,
        youtubeUrl: "https://www.youtube.com/watch?v=tmQtvEDz3Qc"
      },
      {
        id: 2,
        category: "FUTURE UI",
        title: "The Disappearing Interface – Agentic Browsers",
        date: "28 OCT 2025",
        month: "OCTOBER",
        readTime: "11 MIN",
        excerpt: "The future where we give instructions to agents that navigate for us.",
        content: "We introduce the concept of 'Agentic Browser' and dive deep into OpenAI Atlas and Dia.\n\nThe breakthrough in Deepseek OCR is about understanding visual context in documents.",
        tools: ["OpenAI Atlas", "Dia Browser", "Deepseek OCR"],
        icon: Globe
      },
      {
        id: 3,
        category: "ENTREPRENEURSHIP",
        title: "The Dream of the Automated Company: Lumi Nova",
        date: "30 SEP 2025",
        month: "SEPTEMBER",
        readTime: "15 MIN",
        excerpt: "AI builds a complete company – logo, brand, and website – in hours.",
        content: "Live experiment: 'AI builds a company'. Under the name Lumi Nova, we create a complete corporate identity.\n\nThe time from idea to market presence has shrunk from months to hours.",
        tools: ["Gemini Pro", "Midjourney", "Flux", "Cursor"],
        icon: Sparkles
      },
      {
        id: 4,
        category: "AGENT ARCHITECTURE",
        title: "Google ADK and Agent-to-Agent Protocol",
        date: "15 SEP 2025",
        month: "SEPTEMBER",
        readTime: "14 MIN",
        excerpt: "Google's Agent Development Kit and A2A protocol for multi-agent systems.",
        content: "Google's ADK fundamentally changes how we build autonomous systems.\n\nThe A2A protocol enables orchestrator agents that delegate to specialized sub-agents.",
        tools: ["Google ADK", "A2A Protocol", "LangGraph"],
        icon: Workflow
      },
      {
        id: 5,
        category: "PROTOCOL",
        title: "Model Context Protocol and Claude Skills",
        date: "09 APR 2025",
        month: "APRIL",
        readTime: "10 MIN",
        excerpt: "MCP opens the door for AI to interact with local files securely.",
        content: "MCP in Claude Desktop enables AI to interact with local files in a secure way.\n\nDeep Research Agents can spend hours on complex questions.",
        tools: ["MCP", "Claude Skills", "Deep Research"],
        icon: Database
      },
      {
        id: 6,
        category: "COMPUTER VISION",
        title: "Segment Anything, YOLO, and Real Image Analysis",
        date: "10 DEC 2025",
        month: "DECEMBER",
        readTime: "12 MIN",
        excerpt: "Production systems with SAM3 and YOLO for animal counting and traffic monitoring.",
        content: "Computer vision is now production-ready. SAM3 segments objects with outstanding precision.\n\nWe've built animal counters for trail cameras and vehicle counters for bridges.",
        tools: ["SAM 3", "YOLO", "OpenCV"],
        icon: Camera
      },
      {
        id: 7,
        category: "AUTONOMOUS SYSTEMS",
        title: "Agent-Autonomous CRM and Presentation Builders",
        date: "05 AUG 2025",
        month: "AUGUST",
        readTime: "13 MIN",
        excerpt: "CRM systems that manage themselves and fetch data from multiple sources.",
        content: "Agent-autonomous CRM monitors customer interactions and identifies sales opportunities automatically.\n\nThe presentation builder fetches data from databases and APIs for tailored presentations.",
        tools: ["CRM Agents", "API Integration", "Supabase"],
        icon: Layers
      },
      {
        id: 8,
        category: "LOCAL AI",
        title: "Fine-tuning on MacBook – MLX and Unsloth",
        date: "12 JUL 2025",
        month: "JULY",
        readTime: "11 MIN",
        excerpt: "Fine-tune language models locally with Apple's MLX framework.",
        content: "With MLX, we train models directly on MacBooks. Metal acceleration makes LoRA fine-tuning possible.\n\nSpecialized models for specific domains – without sending data to the cloud.",
        tools: ["Apple MLX", "Unsloth", "LoRA"],
        icon: Cpu
      },
      {
        id: 9,
        category: "OPEN SOURCE",
        title: "Open Source Arsenal: Embeddings, TTS, and STT",
        date: "25 JUN 2025",
        month: "JUNE",
        readTime: "9 MIN",
        excerpt: "KBLab's Swedish embeddings and local voice models.",
        content: "KBLab's embedding models outperform commercial alternatives for Nordic languages.\n\nCoqui TTS and Bark for local text-to-speech.",
        tools: ["KBLab", "Whisper", "Bark"],
        icon: Terminal
      },
      {
        id: 10,
        category: "VISUAL AI",
        title: "Visual Communication – Veo2 and Descript",
        date: "07 MAY 2025",
        month: "MAY",
        readTime: "8 MIN",
        excerpt: "Give AI a face and a voice with modern video tools.",
        content: "Veo2 and Descript radically simplify video production.\n\nMarketing isn't about budgets but about mastering the right tools.",
        tools: ["Veo2", "Descript", "Gemini Flash"],
        icon: Eye
      },
      {
        id: 11,
        category: "MODELS",
        title: "Focus on Claude and Video's Breakthrough",
        date: "13 MAR 2025",
        month: "MARCH",
        readTime: "12 MIN",
        excerpt: "Claude 3.7, Sora, and Chinese Wan2.1.",
        content: "Claude is seen as the premier tool for coding at this point.\n\nThe geographic center of AI innovation is starting to shift.",
        tools: ["Claude 3.7", "Sora", "Wan2.1"],
        icon: Brain
      },
      {
        id: 12,
        category: "CURATION",
        title: "The Platform War and Tool Selection",
        date: "11 FEB 2025",
        month: "FEBRUARY",
        readTime: "6 MIN",
        excerpt: "Comparison between Claude, ChatGPT, and Google AI Studio.",
        content: "We compare the major platforms side by side.\n\nFreedom of choice through knowledge – understand strengths and weaknesses.",
        tools: ["Claude", "ChatGPT", "NotebookLM"],
        icon: Layers
      },
      {
        id: 13,
        category: "PREMIERE",
        title: "The Grand Premiere – Dare to Try!",
        date: "04 OCT 2023",
        month: "OCTOBER",
        readTime: "10 MIN",
        excerpt: "Where it all began. We test AI together.",
        content: "First webinar: 'We test AI together' – the basics of ChatGPT.\n\nFear turned into curiosity. The courage to start typing in the box.",
        tools: ["ChatGPT", "GPT-4"],
        icon: Sparkles
      }
    ] as BlogEntry[]
  },
  sv: {
    header: {
      years: "2023–2025",
      title: "AI Journal",
      location: "Falkenberg",
    },
    ui: {
      watchWebinar: "Se webbinariet",
      authors: "Palle & Frej",
      authorsRole: "AI Architects",
    },
    entries: [
      {
        id: 1,
        category: "AGENT REVOLUTION",
        title: "När AI tar över spakarna – Agenter i vardagen",
        date: "25 NOV 2025",
        month: "NOVEMBER",
        readTime: "9 MIN",
        excerpt: "En djupdykning i autonoma agenter som kontrollerar webbläsare och utför komplexa administrativa uppdrag.",
        content: "I det senaste kapitlet lämnar vi all spekulation bakom för att fokusera på praktisk nytta. Vi demonstrerar hur AI-agenter kan kontrollera webbläsare för komplexa uppdrag.\n\nDet handlar om att låta AI:n analysera en inköpslista, navigera till en e-handelsplats och förbereda en beställning. Genom Google AI Studio visar vi hur man utan kod kan bygga egna applikationer.",
        tools: ["Google AI Studio", "NotebookLM", "Claude Computer Use", "Minimax"],
        icon: Bot,
        youtubeUrl: "https://www.youtube.com/watch?v=tmQtvEDz3Qc"
      },
      {
        id: 2,
        category: "FUTURE UI",
        title: "Gränssnittet som försvann – Agentiska webbläsare",
        date: "28 OKT 2025",
        month: "OKTOBER",
        readTime: "11 MIN",
        excerpt: "Framtiden där vi ger instruktioner till agenter som navigerar åt oss.",
        content: "Vi introducerar begreppet 'Agentic Browser' och djupdyker i OpenAI Atlas och Dia.\n\nGenombrottet inom Deepseek OCR handlar om att förstå visuell kontext i dokument.",
        tools: ["OpenAI Atlas", "Dia Browser", "Deepseek OCR"],
        icon: Globe
      },
      {
        id: 3,
        category: "ENTREPRENEURSHIP",
        title: "Drömmen om det automatiserade företaget: Lumi Nova",
        date: "30 SEP 2025",
        month: "SEPTEMBER",
        readTime: "15 MIN",
        excerpt: "AI bygger ett komplett företag – logotyp, varumärke och webbplats – på timmar.",
        content: "Live-experiment: 'AI bygger ett företag'. Under namnet Lumi Nova skapar vi en komplett företagsidentitet.\n\nTiden från idé till marknadsnärvaro har krympt från månader till timmar.",
        tools: ["Gemini Pro", "Midjourney", "Flux", "Cursor"],
        icon: Sparkles
      },
      {
        id: 4,
        category: "AGENT ARCHITECTURE",
        title: "Google ADK och Agent-to-Agent protokoll",
        date: "15 SEP 2025",
        month: "SEPTEMBER",
        readTime: "14 MIN",
        excerpt: "Googles Agent Development Kit och A2A-protokollet för multi-agent system.",
        content: "Googles ADK förändrar fundamentalt hur vi bygger autonoma system.\n\nA2A-protokollet möjliggör orchestrator agents som delegerar till specialiserade sub-agenter.",
        tools: ["Google ADK", "A2A Protocol", "LangGraph"],
        icon: Workflow
      },
      {
        id: 5,
        category: "PROTOCOL",
        title: "Model Context Protocol och Claude Skills",
        date: "09 APR 2025",
        month: "APRIL",
        readTime: "10 MIN",
        excerpt: "MCP öppnar dörren för AI att interagera med lokala filer säkert.",
        content: "MCP i Claude Desktop gör det möjligt för AI att interagera med lokala filer på ett säkert sätt.\n\nDeep Research Agents kan spendera timmar på komplexa frågeställningar.",
        tools: ["MCP", "Claude Skills", "Deep Research"],
        icon: Database
      },
      {
        id: 6,
        category: "COMPUTER VISION",
        title: "Segment Anything, YOLO och verklig bildanalys",
        date: "10 DEC 2025",
        month: "DECEMBER",
        readTime: "12 MIN",
        excerpt: "Produktionssystem med SAM3 och YOLO för djurräkning och trafikövervakning.",
        content: "Computer vision är nu produktionsredo. SAM3 segmenterar objekt med enastående precision.\n\nVi har byggt djurräknare för åtelkameror och fordonsräknare för broar.",
        tools: ["SAM 3", "YOLO", "OpenCV"],
        icon: Camera
      },
      {
        id: 7,
        category: "AUTONOMOUS SYSTEMS",
        title: "Agent-autonoma CRM och presentationsbyggare",
        date: "05 AUG 2025",
        month: "AUGUSTI",
        readTime: "13 MIN",
        excerpt: "CRM-system som sköter sig själva och hämtar data från flera källor.",
        content: "Agent-autonoma CRM övervakar kundinteraktioner och identifierar säljmöjligheter automatiskt.\n\nPresentationsbyggaren hämtar data från databaser och API:er för skräddarsydda presentationer.",
        tools: ["CRM Agents", "API Integration", "Supabase"],
        icon: Layers
      },
      {
        id: 8,
        category: "LOCAL AI",
        title: "Finetuning på MacBook – MLX och Unsloth",
        date: "12 JUL 2025",
        month: "JULI",
        readTime: "11 MIN",
        excerpt: "Finjustera språkmodeller lokalt med Apples MLX-ramverk.",
        content: "Med MLX tränar vi modeller direkt på MacBooks. Metal-acceleration gör LoRA fine-tuning möjlig.\n\nSpecialiserade modeller för specifika domäner – utan att skicka data till molnet.",
        tools: ["Apple MLX", "Unsloth", "LoRA"],
        icon: Cpu
      },
      {
        id: 9,
        category: "OPEN SOURCE",
        title: "Open source-arsenalen: Embeddings, TTS och STT",
        date: "25 JUN 2025",
        month: "JUNI",
        readTime: "9 MIN",
        excerpt: "KBLabs svenska embeddings och lokala röstmodeller.",
        content: "KBLabs embedding-modeller överträffar kommersiella alternativ för nordiska språk.\n\nCoqui TTS och Bark för lokal text-to-speech.",
        tools: ["KBLab", "Whisper", "Bark"],
        icon: Terminal
      },
      {
        id: 10,
        category: "VISUAL AI",
        title: "Visuell kommunikation – Veo2 och Descript",
        date: "07 MAJ 2025",
        month: "MAJ",
        readTime: "8 MIN",
        excerpt: "Ge AI:n ett ansikte och en röst med moderna videverktyg.",
        content: "Veo2 och Descript förenklar videoproduktion radikalt.\n\nMarknadsföring handlar inte om budgetar utan om att bemästra rätt verktyg.",
        tools: ["Veo2", "Descript", "Gemini Flash"],
        icon: Eye
      },
      {
        id: 11,
        category: "MODELS",
        title: "Fokus på Claude och videons genombrott",
        date: "13 MAR 2025",
        month: "MARS",
        readTime: "12 MIN",
        excerpt: "Claude 3.7, Sora och kinesiska Wan2.1.",
        content: "Claude ses som det främsta verktyget för kodning vid denna tidpunkt.\n\nAI-innovationens geografiska tyngdpunkt börjar skifta.",
        tools: ["Claude 3.7", "Sora", "Wan2.1"],
        icon: Brain
      },
      {
        id: 12,
        category: "CURATION",
        title: "Plattformskriget och valet av verktyg",
        date: "11 FEB 2025",
        month: "FEBRUARI",
        readTime: "6 MIN",
        excerpt: "Jämförelse mellan Claude, ChatGPT och Google AI Studio.",
        content: "Vi jämför de stora plattformarna sida vid sida.\n\nValfrihet genom kunskap – förstå styrkor och svagheter.",
        tools: ["Claude", "ChatGPT", "NotebookLM"],
        icon: Layers
      },
      {
        id: 13,
        category: "PREMIERE",
        title: "Den stora premiären – Våga testa!",
        date: "04 OKT 2023",
        month: "OKTOBER",
        readTime: "10 MIN",
        excerpt: "Där allt började. Vi testar AI tillsammans.",
        content: "Första webbinariet: 'Vi testar AI tillsammans' – grunderna i ChatGPT.\n\nRädslan byttes mot nyfikenhet. Modet att börja skriva i rutan.",
        tools: ["ChatGPT", "GPT-4"],
        icon: Sparkles
      }
    ] as BlogEntry[]
  }
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import AgentInteractionNetwork from './components/AgentInteractionNetwork';
import OrganicFounderImages from './components/OrganicFounderImages';
import HeroGlitchIntro from './components/HeroGlitchIntro';
import GlobalGrain from './components/GlobalGrain';
import { translations, Language } from './translations';
import { ArrowDown, Menu, X, Cpu, Briefcase, Database, Shield, Layers, Workflow, Server, Search, Settings, Globe } from 'lucide-react';

// === EASY TOGGLES ===
const ENABLE_GLOBAL_GRAIN = true;  // Set to false to disable grain on entire site
const GRAIN_OPACITY = 1;        // 0-1, lower = more subtle
const GRAIN_ANIMATED = false;       // Set to false for static grain

const TeamCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-10 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-500 w-full max-w-md hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-3xl text-stone-900 text-center mb-4">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-6 opacity-60 group-hover:w-24 transition-all duration-500"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const ServiceCard = ({ title, desc, icon: Icon, step }: { title: string, desc: string, icon: any, step?: string }) => (
  <div className="p-8 bg-white border-2 border-stone-200 rounded-xl hover:border-nobel-gold hover:shadow-lg hover:shadow-nobel-gold/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full">
    {step && <div className="absolute top-4 right-6 text-6xl font-serif text-stone-100 font-bold -z-10 group-hover:text-stone-100/80 transition-colors">{step}</div>}
    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center mb-6 text-stone-400 group-hover:text-nobel-gold group-hover:bg-nobel-gold/10 transition-colors">
      <Icon size={24} />
    </div>
    <h4 className="font-serif text-2xl text-stone-900 mb-3">{title}</h4>
    <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
  </div>
);

const StackItem = ({ category, tools, icon: Icon }: { category: string, tools: string[], icon: any }) => (
    <div className="border-l-2 border-stone-200 pl-6 hover:border-nobel-gold transition-colors duration-300">
        <div className="flex items-center gap-2 mb-2 text-stone-900 font-serif text-lg">
            <Icon size={18} className="text-nobel-gold"/>
            {category}
        </div>
        <div className="flex flex-wrap gap-2">
            {tools.map((t, i) => (
                <span key={i} className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded uppercase tracking-wide">
                    {t}
                </span>
            ))}
        </div>
    </div>
)


const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const content = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">

      {/* Global Grain Overlay */}
      <GlobalGrain enabled={ENABLE_GLOBAL_GRAIN} opacity={GRAIN_OPACITY} animated={GRAIN_ANIMATED} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-stone-900 rounded-none transform rotate-45 flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
                <div className="transform -rotate-45">M</div>
            </div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              MAZEWORKS
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.15em] text-stone-500">
            <a href="#model" onClick={scrollToSection('model')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.vision}</a>
            <a href="#stack" onClick={scrollToSection('stack')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.stack}</a>
            <a href="#integration" onClick={scrollToSection('integration')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.integration}</a>
            <a href="#consulting" onClick={scrollToSection('consulting')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.strategy}</a>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 px-3 border-l border-stone-300">
                <button 
                  onClick={() => setLang('en')} 
                  className={`hover:text-nobel-gold transition-colors ${lang === 'en' ? 'text-nobel-gold' : ''}`}
                >EN</button>
                <span>/</span>
                <button 
                   onClick={() => setLang('sv')} 
                   className={`hover:text-nobel-gold transition-colors ${lang === 'sv' ? 'text-nobel-gold' : ''}`}
                >SV</button>
            </div>

            <a 
              href="#contact"
              onClick={scrollToSection('contact')}
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-nobel-gold transition-colors shadow-sm cursor-pointer"
            >
              {content.nav.contact}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Language Selector */}
             <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500">
                <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-nobel-gold' : ''}>EN</button>
                <span>/</span>
                <button onClick={() => setLang('sv')} className={lang === 'sv' ? 'text-nobel-gold' : ''}>SV</button>
            </div>
            <button className="text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#model" onClick={scrollToSection('model')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.vision}</a>
            <a href="#stack" onClick={scrollToSection('stack')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.stack}</a>
            <a href="#integration" onClick={scrollToSection('integration')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.integration}</a>
            <a href="#consulting" onClick={scrollToSection('consulting')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.strategy}</a>
             <a href="#contact" onClick={scrollToSection('contact')} className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer">{content.nav.contact}</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.85)_0%,rgba(249,248,244,0.5)_50%,rgba(249,248,244,0.2)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Frosted Glass Card with Grain */}
          <div className="relative max-w-3xl mx-auto rounded-[2.5rem] border border-white/40 bg-white/10 backdrop-blur-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden">

            {/* Grain Texture Overlay - opacity här styr grain-intensitet */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.8] mix-blend-overlay z-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Badge - Above grain with higher z-index */}
            <div className="relative z-20 pt-10 md:pt-12">
              <div className="inline-block px-5 py-2 border-2 border-nobel-gold text-nobel-gold text-[14px] tracking-[0.3em] uppercase font-bold rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
                {content.hero.est}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-8 md:py-12 pb-12 md:pb-16">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[1.1] mb-8 text-stone-900">
                {content.hero.title_line1} <br/><span className="font-normal text-stone-500">{content.hero.title_line2}</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-900 font-light leading-relaxed mb-12">
                {content.hero.subtitle}
              </p>

              <div className="flex justify-center">
                 <a href="#model" onClick={scrollToSection('model')} className="group flex flex-col items-center gap-2 text-xs font-bold tracking-widest text-stone-700 hover:text-stone-900 transition-colors cursor-pointer">
                    <span>{content.hero.cta_model}</span>
                    <span className="p-3 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                        <ArrowDown size={16} />
                    </span>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* The Model / Lifecycle */}
        <section id="model" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
              <div className="md:col-span-4">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">{content.model.label}</div>
                <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">{content.model.title}</h2>
                <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              </div>
              <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed">
                <p className="mb-6">
                  <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">{content.model.desc_start}</span>{content.model.desc}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard 
                    step="01"
                    icon={Search} 
                    title={content.model.cards[0].title} 
                    desc={content.model.cards[0].desc} 
                />
                <ServiceCard 
                    step="02"
                    icon={Server} 
                    title={content.model.cards[1].title} 
                    desc={content.model.cards[1].desc} 
                />
                <ServiceCard 
                    step="03"
                    icon={Workflow} 
                    title={content.model.cards[2].title} 
                    desc={content.model.cards[2].desc} 
                />
                <ServiceCard 
                    step="04"
                    icon={Shield} 
                    title={content.model.cards[3].title} 
                    desc={content.model.cards[3].desc} 
                />
            </div>
          </div>
        </section>

        {/* Integration & AI */}
        <section id="integration" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <AgentInteractionNetwork lang={lang} />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Workflow size={14}/> {content.integration.label}
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">{content.integration.title}</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{__html: content.integration.desc1}}></p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{__html: content.integration.desc2}}></p>
                         <p className="text-sm font-serif italic text-stone-500">
                            {content.integration.caption}
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* The Open Source Stack */}
        <section id="stack" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Layers size={14}/> {content.stack.label}
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">{content.stack.title}</h2>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                           {content.stack.desc}
                        </p>

                        <div className="grid grid-cols-1 gap-8">
                            <StackItem
                                icon={Briefcase}
                                category={content.stack.growth}
                                tools={['Twenty (CRM)', 'Listmonk (Marketing)', 'Directus/Strapi (CMS)']}
                            />
                            <StackItem
                                icon={Database}
                                category={content.stack.ops}
                                tools={['Affine/Outline (Knowledge)', 'ERPNext/Odoo (ERP)', 'Eramba (GRC)']}
                            />
                            <StackItem
                                icon={Cpu}
                                category={content.stack.ai}
                                tools={['n8n (Automation)', 'Ollama/LocalAI (Private AI)']}
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-nobel-gold/5 blur-[80px] rounded-full"></div>
                        <div className="aspect-square bg-white rounded-xl shadow-lg border border-stone-200 relative overflow-hidden flex items-center justify-center p-8">
                             {/* Animation */}
                             <HeroScene />

                            {/* Frosted Glass Card with Grain */}
                            <div className="relative z-10 px-8 py-5 rounded-2xl border border-white/50 bg-white/20 backdrop-blur-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
                              {/* Grain Texture Overlay */}
                              <div
                                className="absolute inset-0 pointer-events-none opacity-[0.6] mix-blend-overlay z-0"
                                style={{
                                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                                }}
                              />
                              {/* Content */}
                              <div className="relative z-10 text-center">
                                <h3 className="font-serif text-2xl text-stone-900 mb-1">{content.stack.cloud_title}</h3>
                                <p className="text-xs font-bold tracking-widest text-stone-500 uppercase">{content.stack.cloud_desc}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* Consulting / Strategy */}
        <section id="consulting" className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <TransformerDecoderDiagram lang={lang} />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            <Settings size={14}/> {content.strategy.label}
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">{content.strategy.title}</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            {content.strategy.desc1}
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            {content.strategy.desc2}
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Impact / Metrics */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">{content.metrics.title}</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        {content.metrics.desc}
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <PerformanceMetricDiagram lang={lang} />
                </div>
            </div>
        </section>

        {/* Team */}
        <section id="team" className="py-32 bg-white border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">{content.team.label}</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">{content.team.title}</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">{content.team.desc}</p>
                </div>
                
                <OrganicFounderImages
                  founders={[
                    { name: "Frej Andreassen", role: content.team.roles[0], image: "/frej.jpeg" },
                    { name: "Paul Klinteby", role: content.team.roles[1], image: "/palle.jpeg" },
                  ]}
                />
           </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="py-24 bg-stone-900 text-white text-center">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-5xl md:text-6xl mb-8">{content.contact.title}</h2>
                <p className="text-stone-400 text-xl mb-12 max-w-2xl mx-auto">{content.contact.desc}</p>

                <button className="px-10 py-4 bg-nobel-gold text-stone-900 font-bold tracking-wider uppercase rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                    {content.contact.cta}
                </button>
            </div>
        </section>

      </main>

      <footer className="bg-[#111] text-stone-500 py-16 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">MAZEWORKS</div>
                <p className="text-sm">Frej Andreassen & Paul Klinteby</p>
                <p className="text-xs mt-4 text-stone-600">{content.footer.rights}</p>
            </div>
            <div className="flex gap-8 text-sm font-bold tracking-wider uppercase">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
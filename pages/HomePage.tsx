/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroScene } from '../components/QuantumScene';
import AgentInteractionNetwork from '../components/AgentInteractionNetwork';
import OrganicFounderImages from '../components/OrganicFounderImages';
import GrainOverlay from '../components/GrainOverlay';
import { translations, Language } from '../translations';
import {
  ArrowDown, Menu, X, Globe, Settings, Bot, PieChart, Monitor,
  MapPin, ChevronDown, ChevronUp, Coffee
} from 'lucide-react';

// Service card component
const ServiceCard = ({ title, desc, examples, icon: Icon }: {
  title: string,
  desc: string,
  examples: string,
  icon: any
}) => (
  <div className="p-6 bg-white border-2 border-stone-200 rounded-xl hover:border-nobel-gold hover:shadow-lg hover:shadow-nobel-gold/10 hover:-translate-y-1 transition-all duration-300 group h-full">
    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center mb-4 text-stone-400 group-hover:text-nobel-gold group-hover:bg-nobel-gold/10 transition-colors">
      <Icon size={24} />
    </div>
    <h4 className="font-serif text-xl text-stone-900 mb-2">{title}</h4>
    <p className="text-sm text-stone-500 leading-relaxed mb-3">{desc}</p>
    <p className="text-xs text-stone-400 italic">{examples}</p>
  </div>
);

// Approach step component
const ApproachStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-nobel-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    <div>
      <h4 className="font-serif text-lg text-stone-900 mb-1">{title}</h4>
      <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

interface HomePageProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function HomePage({ lang, setLang }: HomePageProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [techExpanded, setTechExpanded] = useState(false);

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

  const serviceIcons = [Globe, Settings, Bot, PieChart, Monitor];

  return (
    <>
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
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.services}</a>
            <a href="#approach" onClick={scrollToSection('approach')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.approach}</a>
            <a href="#tech" onClick={scrollToSection('tech')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">{content.nav.techDeep}</a>

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
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.services}</a>
            <a href="#approach" onClick={scrollToSection('approach')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.approach}</a>
            <a href="#tech" onClick={scrollToSection('tech')} className="hover:text-nobel-gold transition-colors cursor-pointer">{content.nav.techDeep}</a>
             <a href="#contact" onClick={scrollToSection('contact')} className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer">{content.nav.contact}</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        {/* Grain overlay for entire hero viewport */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: '512px 512px',
            opacity: 0.7,
            mixBlendMode: 'multiply',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.85)_0%,rgba(249,248,244,0.5)_50%,rgba(249,248,244,0.2)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Frosted Glass Card with Grain */}
          <div className="relative max-w-3xl mx-auto rounded-[2.5rem] border border-white/40 bg-white/10 backdrop-blur-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden">

            {/* Grain Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.8] mix-blend-overlay z-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Location Badge */}
            <div className="relative z-20 pt-10 md:pt-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 border-2 border-nobel-gold text-nobel-gold text-[14px] tracking-[0.2em] uppercase font-bold rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
                <MapPin size={16} />
                {content.hero.location}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-8 md:py-12 pb-12 md:pb-16">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[1.1] mb-8 text-stone-900">
                {content.hero.title_line1} <br/><span className="text-nobel-gold">{content.hero.title_line2}</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
                {content.hero.subtitle}
              </p>

              <div className="flex justify-center">
                 <a href="#services" onClick={scrollToSection('services')} className="group flex flex-col items-center gap-2 text-xs font-bold tracking-widest text-stone-700 hover:text-stone-900 transition-colors cursor-pointer">
                    <span>{content.hero.cta}</span>
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
        {/* Services Section */}
        <section id="services" className="py-24 bg-white border-t border-stone-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">{content.services.label}</div>
              <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">{content.services.title}</h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg">{content.services.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.items.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={serviceIcons[index]}
                  title={service.title}
                  desc={service.desc}
                  examples={service.examples}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">{content.approach.label}</div>
                <h2 className="font-serif text-3xl md:text-5xl mb-6 text-stone-900">{content.approach.title}</h2>
                <p className="text-lg text-stone-600 mb-10 leading-relaxed">{content.approach.desc}</p>

                <div className="space-y-8">
                  {content.approach.steps.map((step, index) => (
                    <ApproachStep
                      key={index}
                      number={String(index + 1)}
                      title={step.title}
                      desc={step.desc}
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-nobel-gold/5 blur-[80px] rounded-full"></div>
                <div className="aspect-square bg-white rounded-xl shadow-lg border border-stone-200 relative overflow-hidden flex items-center justify-center">
                  <HeroScene />
                  {/* Grain overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-[1] rounded-xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                      backgroundSize: '100% 100%',
                      opacity: 0.3,
                      mixBlendMode: 'multiply',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Section */}
        <section className="py-24 bg-stone-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                <MapPin size={14} />
                {content.local.label}
              </div>
              <h2 className="font-serif text-3xl md:text-5xl mb-6">{content.local.title}</h2>
              <p className="text-xl text-stone-400 leading-relaxed mb-6">{content.local.desc}</p>
              <p className="text-nobel-gold font-serif italic text-lg">{content.local.cta}</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-white border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">{content.team.label}</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">{content.team.title}</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">{content.team.desc}</p>
                </div>

                <OrganicFounderImages
                  founders={[
                    { name: "Frej Andreassen", role: content.team.roles[0], image: "/frej.jpeg", email: "frej@mazeworks.se", phone: "070-692 07 05" },
                    { name: "Paul Klinteby", role: content.team.roles[1], image: "/palle.jpeg", email: "paul@mazeworks.se", phone: "073-065 44 37" },
                  ]}
                  grain={true}
                />
           </div>
        </section>

        {/* Tech Deep Dive Section (Collapsible) */}
        <section id="tech" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">{content.techDeep.label}</div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-stone-900">{content.techDeep.title}</h2>
                <p className="text-stone-500 max-w-xl mx-auto">{content.techDeep.desc}</p>
              </div>

              {/* Expand/Collapse Button */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => setTechExpanded(!techExpanded)}
                  className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-stone-200 rounded-full text-sm font-bold tracking-wider text-stone-600 hover:border-nobel-gold hover:text-nobel-gold transition-colors"
                >
                  {techExpanded ? (
                    <>
                      {lang === 'sv' ? 'Dölj detaljer' : 'Hide details'}
                      <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      {lang === 'sv' ? 'Visa mer' : 'Show more'}
                      <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>

              {/* Collapsible Content */}
              {techExpanded && (
                <div className="space-y-12 animate-fade-in">
                  {/* Agent Systems */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-serif text-2xl mb-4 text-stone-900">{content.techDeep.agents.title}</h3>
                      <p className="text-stone-600 leading-relaxed mb-4">{content.techDeep.agents.desc}</p>
                      <p className="text-sm font-serif italic text-stone-500">{content.techDeep.agents.caption}</p>
                    </div>
                    <div>
                      <GrainOverlay opacity={0.35} rounded="rounded-2xl">
                        <AgentInteractionNetwork lang={lang} />
                      </GrainOverlay>
                    </div>
                  </div>

                  {/* Open Source Stack */}
                  <div className="bg-white rounded-xl p-8 border border-stone-200">
                    <h3 className="font-serif text-2xl mb-4 text-stone-900">{content.techDeep.stack.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{content.techDeep.stack.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-stone-900 text-white text-center">
            <div className="container mx-auto px-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-800 rounded-full mb-8">
                  <Coffee size={28} className="text-nobel-gold" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">{content.contact.title}</h2>
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
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </div>
      </footer>
    </>
  );
}

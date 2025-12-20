import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogTranslations } from '../translations-blog';
import type { Language } from '../types';

interface StoriesPageProps {
  lang: Language;
  setLang?: (lang: Language) => void;
}

export default function StoriesPage({ lang, setLang }: StoriesPageProps) {
  const content = blogTranslations[lang];
  const entries = content.entries;
  const [activeId, setActiveId] = useState(entries[0]?.id ?? 1);
  const entry = entries.find(e => e.id === activeId) ?? entries[0];
  const Icon = entry.icon;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Find current index for prev/next navigation
  const currentIndex = entries.findIndex(e => e.id === activeId);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < entries.length - 1;

  const goToPrev = () => {
    if (hasPrev) {
      setActiveId(entries[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setActiveId(entries[currentIndex + 1].id);
    }
  };

  // Scroll active item into view on mobile
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.querySelector(`[data-id="${activeId}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeId]);

  return (
    <div className="min-h-screen bg-[#E8E4DD]">
      {/* Header with back link */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#E8E4DD]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">MAZEWORKS</span>
          </Link>
          <div className="text-center">
            <h1 className="font-serif text-lg md:text-xl italic text-stone-900">{content.header.title}</h1>
            <p className="text-[9px] md:text-[10px] text-stone-400 tracking-widest uppercase">{content.header.location} • {content.header.years}</p>
          </div>
          {/* Language Selector */}
          {setLang ? (
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-500">
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
          ) : (
            <div className="w-12" />
          )}
        </div>
      </header>

      {/* Mobile horizontal entry selector */}
      <div className="lg:hidden fixed top-[52px] md:top-[60px] left-0 right-0 z-40 bg-[#E8E4DD]/90 backdrop-blur-md border-b border-stone-200/50">
        <div
          ref={scrollRef}
          className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {entries.map((e) => {
            const isActive = activeId === e.id;
            return (
              <button
                key={e.id}
                data-id={e.id}
                onClick={() => setActiveId(e.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'bg-white/60 text-stone-600 border border-stone-200'
                }`}
              >
                {e.month} {e.date.split(' ').pop()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="pt-[100px] lg:pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

          {/* Left sidebar - Entry list (desktop only) */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0 bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl overflow-hidden">
            <div className="h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
              {entries.map((e) => {
                const EIcon = e.icon;
                const isActive = activeId === e.id;
                return (
                  <button
                    key={e.id}
                    onClick={() => setActiveId(e.id)}
                    className={`w-full text-left p-4 border-b border-stone-100/50 relative flex gap-3 transition-all duration-200 ${
                      isActive ? 'bg-white/70' : 'hover:bg-white/40'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-nobel-gold" />
                    )}
                    <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${
                      isActive ? 'bg-nobel-gold/20' : 'bg-stone-100'
                    }`}>
                      <EIcon className={`w-3 h-3 ${isActive ? 'text-nobel-gold' : 'text-stone-400'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <span className="text-[10px] tracking-wider text-stone-400 uppercase">
                          {e.category}
                        </span>
                        <span className="text-[10px] text-stone-400">{e.month}</span>
                      </div>
                      <p className={`text-sm leading-snug line-clamp-2 ${
                        isActive ? 'text-stone-900 font-medium' : 'text-stone-500'
                      }`}>
                        {e.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right content area */}
          <div className="flex-1 bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl p-4 md:p-6 lg:p-10 lg:overflow-y-auto lg:max-h-[calc(100vh-8rem)]">
            <div className="max-w-2xl mx-auto">
              {/* Card */}
              <div className="bg-white backdrop-blur-md border border-stone-200 rounded-2xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="p-5 md:p-8">
                  <div className="flex items-center gap-2 flex-wrap mb-4 md:mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full">
                      <Icon className="w-3 h-3 text-nobel-gold" />
                      <span className="text-[10px] tracking-wider text-nobel-gold uppercase font-medium">
                        {entry.category}
                      </span>
                    </div>
                    <span className="text-xs text-stone-400">{entry.date}</span>
                    <span className="text-stone-300">•</span>
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span className="text-xs text-stone-400">{entry.readTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-3 md:mb-4 text-stone-900">
                    {entry.title}
                  </h2>
                  <p className="text-base md:text-lg text-stone-500 italic leading-relaxed">
                    {entry.excerpt}
                  </p>
                </div>

                {/* Tools */}
                <div className="px-5 md:px-8 py-3 md:py-4 bg-stone-50/80 border-t border-b border-stone-100">
                  <div className="flex flex-wrap gap-2">
                    {entry.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[11px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 bg-white border border-stone-300 rounded-full text-stone-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-8">
                  {entry.content.split('\n\n').map((p, i) => (
                    <p key={i} className={`text-stone-600 leading-relaxed text-base md:text-lg ${i > 0 ? 'mt-4 md:mt-6' : ''}`}>
                      {p}
                    </p>
                  ))}

                  {/* Footer */}
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-nobel-gold/15 flex items-center justify-center">
                        <span className="font-serif text-base md:text-lg text-nobel-gold italic">P&F</span>
                      </div>
                      <div>
                        <p className="font-medium text-stone-900 text-sm md:text-base">{content.ui.authors}</p>
                        <p className="text-[10px] md:text-xs text-stone-400">{content.ui.authorsRole}</p>
                      </div>
                    </div>

                    {entry.youtubeUrl ? (
                      <a
                        href={entry.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-stone-900 text-white text-xs md:text-sm rounded-full hover:bg-stone-800 transition-colors"
                      >
                        {content.ui.watchWebinar}
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    ) : (
                      <a
                        href="https://www.youtube.com/@naringslivetfalkenberg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-stone-900 text-white text-xs md:text-sm rounded-full hover:bg-stone-800 transition-colors"
                      >
                        {content.ui.watchWebinar}
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile prev/next navigation */}
              <div className="lg:hidden flex items-center justify-between mt-6 gap-4">
                <button
                  onClick={goToPrev}
                  disabled={!hasPrev}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                    hasPrev
                      ? 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
                      : 'bg-stone-100 text-stone-300 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  {lang === 'sv' ? 'Föregående' : 'Previous'}
                </button>
                <span className="text-xs text-stone-400">
                  {currentIndex + 1} / {entries.length}
                </span>
                <button
                  onClick={goToNext}
                  disabled={!hasNext}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                    hasNext
                      ? 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
                      : 'bg-stone-100 text-stone-300 cursor-not-allowed'
                  }`}
                >
                  {lang === 'sv' ? 'Nästa' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Database, Lock, Globe } from 'lucide-react';
import { translations, Language } from '../translations';

interface DiagramProps {
  lang: Language;
}

// --- DATA PROCESSING DIAGRAM (Formerly Transformer) ---
export const TransformerDecoderDiagram: React.FC<DiagramProps> = ({ lang }) => {
  const [step, setStep] = useState(0);
  const texts = translations[lang].diagrams.transformer;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-900">{texts.title}</h3>
      <p className="text-sm text-stone-600 mb-6 text-center max-w-md">
        {texts.desc}
      </p>

      <div className="relative w-full max-w-lg h-44 md:h-56 bg-white rounded-lg shadow-inner overflow-hidden mb-6 border border-stone-200 flex items-center justify-center gap-2 sm:gap-4 md:gap-8 p-2 sm:p-4">

        {/* Input Stage */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border-2 flex flex-col items-center justify-center transition-colors duration-500 ${step === 0 ? 'border-nobel-gold bg-nobel-gold/10' : 'border-stone-200 bg-stone-50'}`}>
            <Database className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${step === 0 ? 'text-nobel-gold' : 'text-stone-300'}`} />
          </div>
          <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-stone-500">{texts.raw}</span>
        </div>

        {/* Arrows */}
        <motion.div className="text-stone-400 text-sm sm:text-base" animate={{ opacity: step >= 1 ? 1 : 0.3, x: step >= 1 ? 0 : -5 }}>→</motion.div>

        {/* Transformer Stage */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-colors duration-500 relative overflow-hidden ${step === 1 || step === 2 ? 'border-stone-800 bg-stone-900 text-white' : 'border-stone-200 bg-stone-50'}`}>
            <Lock className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${step === 1 || step === 2 ? 'text-nobel-gold animate-pulse' : 'text-stone-300'}`} />
            {step === 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-nobel-gold absolute top-1/3 animate-ping"></div>
                <div className="w-full h-[1px] bg-nobel-gold absolute top-2/3 animate-ping delay-75"></div>
              </div>
            )}
          </div>
          <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-stone-500 text-center leading-tight">{texts.logic}</span>
        </div>

        {/* Arrows */}
        <motion.div className="text-stone-400 text-sm sm:text-base" animate={{ opacity: step >= 3 ? 1 : 0.3, x: step >= 3 ? 0 : -5 }}>→</motion.div>

        {/* Output Stage */}
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg border-2 flex flex-col items-center justify-center transition-colors duration-500 ${step === 3 ? 'border-green-500 bg-green-50' : 'border-stone-200 bg-stone-50'}`}>
            {step === 3 ? (
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600"/>
            ) : (
              <span className="text-lg sm:text-2xl font-serif text-stone-300">...</span>
            )}
          </div>
          <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-stone-500">{texts.result}</span>
        </div>
      </div>

      <div className="flex gap-2">
        {[0, 1, 2, 3].map(s => (
          <div key={s} className={`h-1 rounded-full transition-all duration-300 ${step === s ? 'w-8 bg-nobel-gold' : 'w-2 bg-stone-300'}`}></div>
        ))}
      </div>
    </div>
  );
};

// --- PERFORMANCE CHART ---
export const PerformanceMetricDiagram: React.FC<DiagramProps> = ({ lang }) => {
  const [metric, setMetric] = useState<"Value" | "Freedom" | "Innovation">("Value");
  const texts = translations[lang].diagrams.performance;

  const data = {
    "Value": { standard: 30, mazeworks: 95 },
    "Freedom": { standard: 10, mazeworks: 100 },
    "Innovation": { standard: 45, mazeworks: 85 }
  };

  const currentData = data[metric];

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
      <div className="flex-1 min-w-[240px]">
        <h3 className="font-serif text-xl mb-2 text-nobel-gold">{texts.title}</h3>
        <p className="text-stone-400 text-sm mb-4 leading-relaxed">
          {texts.desc[metric]}
        </p>
        <div className="flex gap-2 mt-6">
          {(["Value", "Freedom", "Innovation"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 border ${metric === m ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
            >
              {texts.metrics[m]}
            </button>
          ))}
        </div>
        <div className="mt-6 font-mono text-xs text-stone-500 flex items-center gap-2">
          <BarChart2 size={14} className="text-nobel-gold" />
          <span>{texts.labels.score}</span>
        </div>
      </div>

      <div className="relative w-64 h-72 bg-stone-800/50 rounded-xl border border-stone-700/50 p-6 flex justify-around items-end">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-10">
          <div className="w-full h-[1px] bg-stone-400"></div>
          <div className="w-full h-[1px] bg-stone-400"></div>
          <div className="w-full h-[1px] bg-stone-400"></div>
          <div className="w-full h-[1px] bg-stone-400"></div>
        </div>

        {/* Standard Bar */}
        <div className="w-20 flex flex-col justify-end items-center h-full z-10">
          <div className="flex-1 w-full flex items-end justify-center relative mb-3">
            <motion.div
              className="w-full bg-stone-600 rounded-t-md border-t border-x border-stone-500/30"
              initial={{ height: 0 }}
              animate={{ height: `${currentData.standard}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />
          </div>
          <div className="h-6 flex items-center text-[10px] font-bold text-stone-500 uppercase tracking-wider text-center leading-tight">{texts.labels.legacy}</div>
        </div>

        {/* Mazeworks Bar */}
        <div className="w-20 flex flex-col justify-end items-center h-full z-10">
          <div className="flex-1 w-full flex items-end justify-center relative mb-3">
            <div className="absolute -top-5 w-full text-center text-sm font-mono text-nobel-gold font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-nobel-gold/30 shadow-sm">{currentData.mazeworks}</div>
            <motion.div
              className="w-full bg-nobel-gold rounded-t-md shadow-[0_0_20px_rgba(197,160,89,0.25)] relative overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: `${currentData.mazeworks}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
            </motion.div>
          </div>
          <div className="h-6 flex items-center text-[10px] font-bold text-nobel-gold uppercase tracking-wider">{texts.labels.mazeworks}</div>
        </div>
      </div>
    </div>
  );
};

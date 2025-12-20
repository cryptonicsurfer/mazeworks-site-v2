/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalGrain from './components/GlobalGrain';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import { Language } from './translations';

// === EASY TOGGLES ===
const ENABLE_GLOBAL_GRAIN = true;  // Set to false to disable grain on entire site
const GRAIN_OPACITY = 0.9;           // 0-1, lower = more subtle
const GRAIN_ANIMATED = false;      // Set to false for static grain

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      {/* Global Grain Overlay */}
      <GlobalGrain enabled={ENABLE_GLOBAL_GRAIN} opacity={GRAIN_OPACITY} animated={GRAIN_ANIMATED} />

      <Routes>
        <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
        <Route path="/stories" element={<StoriesPage lang={lang} setLang={setLang} />} />
      </Routes>
    </div>
  );
};

export default App;

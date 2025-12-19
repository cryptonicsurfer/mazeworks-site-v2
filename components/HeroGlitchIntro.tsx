/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

interface HeroGlitchIntroProps {
  duration?: number;
  enabled?: boolean;
}

const HeroGlitchIntro: React.FC<HeroGlitchIntroProps> = ({
  duration = 1500,
  enabled = true
}) => {
  const [visible, setVisible] = useState(enabled);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, duration * 0.8);

    // Remove completely
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [enabled, duration]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes glitchLine {
          0% { transform: translateX(-100%); opacity: 0.5; }
          50% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0.5; }
        }

        @keyframes textGlitch {
          0%, 100% { transform: translate(0, 0) skewX(0deg); opacity: 1; }
          10% { transform: translate(-3px, 2px) skewX(-2deg); opacity: 0.8; }
          20% { transform: translate(3px, -1px) skewX(2deg); opacity: 1; }
          30% { transform: translate(-2px, 1px) skewX(-1deg); opacity: 0.9; }
          40% { transform: translate(2px, -2px) skewX(1deg); opacity: 1; }
          50% { transform: translate(-1px, 2px) skewX(-0.5deg); opacity: 0.85; }
          60% { transform: translate(1px, -1px) skewX(0.5deg); opacity: 1; }
          70% { transform: translate(-2px, 0px) skewX(-1deg); opacity: 0.9; }
          80% { transform: translate(2px, 1px) skewX(1deg); opacity: 1; }
          90% { transform: translate(-1px, -1px) skewX(-0.5deg); opacity: 0.95; }
        }

        @keyframes rgbSplit {
          0%, 100% { text-shadow: 3px 0 rgba(120,113,108,0.5), -3px 0 rgba(197,160,89,0.5); }
          25% { text-shadow: -3px 0 rgba(120,113,108,0.5), 3px 0 rgba(197,160,89,0.5); }
          50% { text-shadow: 2px 2px rgba(120,113,108,0.5), -2px -2px rgba(197,160,89,0.5); }
          75% { text-shadow: -2px 1px rgba(120,113,108,0.5), 2px -1px rgba(197,160,89,0.5); }
        }

        @keyframes scanline {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        @keyframes noiseAnim {
          0%, 100% { background-position: 0 0; }
          10% { background-position: -5% -5%; }
          20% { background-position: 10% 5%; }
          30% { background-position: -10% 10%; }
          40% { background-position: 5% -10%; }
          50% { background-position: -5% 15%; }
          60% { background-position: 15% 5%; }
          70% { background-position: -10% -5%; }
          80% { background-position: 10% 10%; }
          90% { background-position: -5% -10%; }
        }

        @keyframes flashIn {
          0%, 85% { opacity: 0; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }

        .intro-overlay {
          transition: opacity 0.4s ease-out;
        }

        .intro-overlay.fading {
          opacity: 0;
        }
      `}</style>

      {/* Flash */}
      <div
        className="fixed inset-0 z-[10001] bg-stone-900 pointer-events-none"
        style={{
          animation: `flashIn ${duration}ms ease-out forwards`,
        }}
      />

      {/* Main overlay */}
      <div className={`intro-overlay fixed inset-0 z-[10000] bg-[#F9F8F4] flex items-center justify-center overflow-hidden ${fading ? 'fading' : ''}`}>

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(120, 113, 108, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(120, 113, 108, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridMove 0.8s linear infinite',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            animation: 'noiseAnim 0.2s steps(10) infinite',
          }}
        />

        {/* Glitch lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] left-0 right-0 bg-gradient-to-r from-transparent via-stone-400/60 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              animation: `glitchLine ${0.3 + i * 0.1}s linear infinite`,
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}

        {/* Center text */}
        <div
          className="relative text-4xl md:text-8xl font-serif font-medium tracking-[0.1em] text-stone-900 z-10"
          style={{
            animation: 'textGlitch 0.15s steps(1) infinite, rgbSplit 0.2s steps(1) infinite',
          }}
        >
          MAZEWORKS
        </div>

        {/* Scanline */}
        <div
          className="absolute left-0 right-0 h-[4px] bg-stone-400/20 pointer-events-none"
          style={{
            animation: `scanline 1s linear infinite`,
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 30%, rgba(249,248,244,0.8) 100%)',
          }}
        />
      </div>
    </>
  );
};

export default HeroGlitchIntro;

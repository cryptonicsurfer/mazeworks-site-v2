/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface Founder {
  name: string;
  role: string;
  image: string;
}

interface OrganicFounderImagesProps {
  founders: Founder[];
  grain?: boolean; // Toggle grain effect on/off
}

const OrganicFounderImages: React.FC<OrganicFounderImagesProps> = ({ founders, grain = false }) => {
  return (
    <>
      {/* SVG filter for grain effect */}
      <svg className="hidden">
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" seed="5" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feComponentTransfer in="mono" result="boosted">
            <feFuncR type="linear" slope="3" intercept="-0.5" />
            <feFuncG type="linear" slope="3" intercept="-0.5" />
            <feFuncB type="linear" slope="3" intercept="-0.5" />
          </feComponentTransfer>
        </filter>
      </svg>

      <style>{`
        @keyframes liquidMorph1 {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          14% { border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%; }
          28% { border-radius: 70% 30% 40% 60% / 30% 70% 50% 50%; }
          42% { border-radius: 35% 65% 30% 70% / 70% 30% 60% 40%; }
          57% { border-radius: 55% 45% 55% 45% / 40% 60% 45% 55%; }
          71% { border-radius: 65% 35% 60% 40% / 35% 65% 40% 60%; }
          85% { border-radius: 50% 50% 70% 30% / 45% 55% 30% 70%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        @keyframes liquidMorph2 {
          0% { border-radius: 45% 55% 55% 45% / 55% 45% 45% 55%; }
          12% { border-radius: 65% 35% 40% 60% / 35% 65% 60% 40%; }
          25% { border-radius: 30% 70% 60% 40% / 70% 30% 40% 60%; }
          38% { border-radius: 55% 45% 35% 65% / 45% 55% 65% 35%; }
          50% { border-radius: 40% 60% 70% 30% / 60% 40% 30% 70%; }
          63% { border-radius: 70% 30% 45% 55% / 30% 70% 55% 45%; }
          75% { border-radius: 35% 65% 55% 45% / 65% 35% 45% 55%; }
          88% { border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%; }
          100% { border-radius: 45% 55% 55% 45% / 55% 45% 45% 55%; }
        }

        .organic-mask-1 {
          animation: liquidMorph1 16s linear infinite;
        }

        .organic-mask-2 {
          animation: liquidMorph2 18s linear infinite;
        }

        .organic-mask-1,
        .organic-mask-2 {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @keyframes grainShift1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2%, 1%); }
          50% { transform: translate(1%, -2%); }
          75% { transform: translate(-1%, -1%); }
        }

        @keyframes grainShift2 {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(1%, -1%); }
          40% { transform: translate(-2%, 0%); }
          60% { transform: translate(0%, 2%); }
          80% { transform: translate(2%, -1%); }
        }

        .grain-overlay-1 {
          animation: grainShift1 12s linear infinite;
        }

        .grain-overlay-2 {
          animation: grainShift2 14s linear infinite;
        }

        .founder-card:hover .organic-mask-1,
        .founder-card:hover .organic-mask-2 {
          animation-play-state: paused;
          border-radius: 50% !important;
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(197, 160, 89, 0.3);
        }

        .founder-card:hover .founder-image {
          transform: scale(1.0);
        }

        .founder-card:hover .founder-name {
          color: #C5A059;
        }
      `}</style>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24 justify-center items-center mb-14">
        {founders.map((founder, index) => (
          <div
            key={founder.name}
            className="founder-card flex flex-col items-center gap-6 cursor-pointer group"
            style={{ animationDelay: index === 1 ? '-4s' : '0s' }}
          >
            {/* Image container with organic mask */}
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Subtle glow behind */}
              <div
                className="absolute inset-0 opacity-20 blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(197, 160, 89, 0.4) 0%, transparent 70%)',
                  animation: 'liquidMorph 6s ease-in-out infinite',
                  animationDelay: index === 1 ? '-5s' : '-2s',
                }}
              />

              {/* The masked image */}
              <div
                className={`organic-mask-${index + 1} relative w-full h-full overflow-hidden bg-stone-700`}
                style={{
                  boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="eager"
                  className="founder-image absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: 'scale(1.15)',
                    minWidth: '100%',
                    minHeight: '100%',
                  }}
                />
                {/* Grain overlay */}
                {grain && (
                  <div
                    className={`grain-overlay-${index + 1} absolute inset-0 pointer-events-none`}
                    style={{
                      filter: 'url(#grain)',
                      mixBlendMode: 'hard-light',
                      opacity: 0.5,
                    }}
                  />
                )}
              </div>
            </div>

            {/* Name and role card */}
            <div className="text-center p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-nobel-gold/50 w-full max-w-xs">
              <h3 className="founder-name font-serif text-2xl text-stone-900 mb-3 transition-colors duration-300">
                {founder.name}
              </h3>
              <div className="w-12 h-0.5 bg-nobel-gold mx-auto mb-4 opacity-60 group-hover:w-20 transition-all duration-500"></div>
              <p className="text-stone-500 font-bold uppercase text-xs tracking-widest">
                {founder.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrganicFounderImages;

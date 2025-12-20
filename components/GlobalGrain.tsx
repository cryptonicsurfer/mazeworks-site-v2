/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Global grain overlay for the entire site
 * Toggle with enabled prop
 */

import React from 'react';

interface GlobalGrainProps {
  enabled?: boolean;
  opacity?: number; // 0-1, default 0.15
  animated?: boolean; // animate the grain position
}

const GlobalGrain: React.FC<GlobalGrainProps> = ({
  enabled = true,
  opacity = 0.90,
  animated = true
}) => {
  if (!enabled) return null;

  return (
    <>
      <style>{`
        @keyframes grainAnim {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(2%, 1%); }
          30% { transform: translate(-1%, 2%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(2%, -2%); }
          70% { transform: translate(-1%, -1%); }
          80% { transform: translate(1%, 2%); }
          90% { transform: translate(-2%, -1%); }
        }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none z-[10002]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity,
          mixBlendMode: 'multiply',
          animation: animated ? 'grainAnim 0.3s steps(10) infinite' : 'none',
        }}
      />
    </>
  );
};

export default GlobalGrain;

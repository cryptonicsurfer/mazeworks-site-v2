/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Grain overlay wrapper component
 * Wraps any element and adds a grain texture overlay
 */

import React from 'react';

interface GrainOverlayProps {
  children: React.ReactNode;
  opacity?: number; // 0-1, default 0.5
  className?: string;
  rounded?: string; // e.g., 'rounded-2xl', 'rounded-full'
}

const GrainOverlay: React.FC<GrainOverlayProps> = ({
  children,
  opacity = 0.5,
  className = '',
  rounded = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div
        className={`absolute inset-0 pointer-events-none ${rounded}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          opacity,
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

export default GrainOverlay;

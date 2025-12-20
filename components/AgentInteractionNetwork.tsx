/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { translations, Language } from '../translations';

type AgentVariant = 'code' | 'database' | 'server' | 'email' | 'analytics';
type ToolVariant = 'crm' | 'calendar' | 'storage' | 'api';

interface Node {
  id: string;
  x: number;
  y: number;
  type: 'agent' | 'tool';
  variant?: AgentVariant | ToolVariant;
}

interface Particle {
  id: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  fromId: string;
  toId: string;
  color: string;
}

interface AgentInteractionNetworkProps {
  lang: Language;
}

const AgentInteractionNetwork: React.FC<AgentInteractionNetworkProps> = ({ lang }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeNodes, setActiveNodes] = useState<Record<string, boolean>>({});
  const [processingNodes, setProcessingNodes] = useState<Record<string, boolean>>({});

  const texts = translations[lang].diagrams.agentNetwork;

  // Node positions in the grid with variants
  const nodes: Node[] = [
    { id: 'agent1', x: 150, y: 80, type: 'agent', variant: 'code' },
    { id: 'tool1', x: 300, y: 80, type: 'tool', variant: 'crm' },
    { id: 'agent2', x: 450, y: 80, type: 'agent', variant: 'database' },
    { id: 'tool2', x: 150, y: 200, type: 'tool', variant: 'calendar' },
    { id: 'agent3', x: 300, y: 200, type: 'agent', variant: 'server' },
    { id: 'tool3', x: 450, y: 200, type: 'tool', variant: 'storage' },
    { id: 'agent4', x: 150, y: 320, type: 'agent', variant: 'email' },
    { id: 'tool4', x: 300, y: 320, type: 'tool', variant: 'api' },
    { id: 'agent5', x: 450, y: 320, type: 'agent', variant: 'analytics' },
  ];

  // Connection paths between nodes
  const connections = [
    { from: 'agent1', to: 'tool1' },
    { from: 'tool1', to: 'agent2' },
    { from: 'agent1', to: 'tool2' },
    { from: 'tool2', to: 'agent3' },
    { from: 'agent2', to: 'tool3' },
    { from: 'tool3', to: 'agent3' },
    { from: 'tool2', to: 'agent4' },
    { from: 'agent3', to: 'tool4' },
    { from: 'tool3', to: 'agent5' },
    { from: 'agent4', to: 'tool4' },
    { from: 'tool4', to: 'agent5' },
  ];

  const getNode = (id: string): Node | undefined => nodes.find(n => n.id === id);

  // Generate flowing particles
  useEffect(() => {
    let particleId = 0;

    const createParticle = () => {
      const connection = connections[Math.floor(Math.random() * connections.length)];
      const fromNode = getNode(connection.from);
      const toNode = getNode(connection.to);

      if (!fromNode || !toNode) return;

      const newParticle: Particle = {
        id: particleId++,
        fromX: fromNode.x,
        fromY: fromNode.y,
        toX: toNode.x,
        toY: toNode.y,
        progress: 0,
        fromId: connection.from,
        toId: connection.to,
        color: fromNode.type === 'agent' ? '#C5A059' : '#888888',
      };

      setParticles(prev => [...prev, newParticle]);

      // Activate source node
      setActiveNodes(prev => ({ ...prev, [connection.from]: true }));
      setTimeout(() => {
        setActiveNodes(prev => ({ ...prev, [connection.from]: false }));
      }, 300);
    };

    const interval = setInterval(createParticle, 400);
    return () => clearInterval(interval);
  }, []);

  // Animate particles
  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          progress: p.progress + 0.025,
        })).filter(p => p.progress <= 1);

        // Check for particles reaching destination
        prev.forEach(p => {
          if (p.progress >= 0.9 && p.progress < 0.925) {
            setProcessingNodes(pn => ({ ...pn, [p.toId]: true }));
            setTimeout(() => {
              setProcessingNodes(pn => ({ ...pn, [p.toId]: false }));
            }, 400);
          }
        });

        return updated;
      });
    }, 30);

    return () => clearInterval(animationFrame);
  }, []);

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Code/Terminal Agent Icon
  const CodeAgentIcon = ({ x, y, isActive, isProcessing }: { x: number; y: number; isActive?: boolean; isProcessing?: boolean }) => (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <circle cx="25" cy="25" r="28" fill={isProcessing ? 'rgba(197, 160, 89, 0.15)' : 'transparent'} style={{ transition: 'fill 0.3s ease' }} />
      <rect x="5" y="5" width="40" height="40" rx="8" fill="white"
        stroke={isActive || isProcessing ? '#C5A059' : '#E0E0E0'}
        strokeWidth={isActive || isProcessing ? 2.5 : 1.5}
        style={{ transition: 'stroke 0.2s ease', filter: isProcessing ? 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.4))' : 'none' }} />
      {/* Terminal/Code icon */}
      <path d="M14 18 L20 24 L14 30" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }} />
      <line x1="24" y1="30" x2="36" y2="30" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2.5" strokeLinecap="round" style={{ transition: 'stroke 0.2s ease' }} />
    </g>
  );

  // Database Agent Icon
  const DatabaseAgentIcon = ({ x, y, isActive, isProcessing }: { x: number; y: number; isActive?: boolean; isProcessing?: boolean }) => (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <circle cx="25" cy="25" r="28" fill={isProcessing ? 'rgba(197, 160, 89, 0.15)' : 'transparent'} style={{ transition: 'fill 0.3s ease' }} />
      <rect x="5" y="5" width="40" height="40" rx="8" fill="white"
        stroke={isActive || isProcessing ? '#C5A059' : '#E0E0E0'}
        strokeWidth={isActive || isProcessing ? 2.5 : 1.5}
        style={{ transition: 'stroke 0.2s ease', filter: isProcessing ? 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.4))' : 'none' }} />
      {/* Database cylinder */}
      <ellipse cx="25" cy="16" rx="10" ry="4" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2" fill="none" style={{ transition: 'stroke 0.2s ease' }} />
      <path d="M15 16 L15 34 Q15 38 25 38 Q35 38 35 34 L35 16" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2" fill="none" style={{ transition: 'stroke 0.2s ease' }} />
      <path d="M15 24 Q15 28 25 28 Q35 28 35 24" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="1.5" fill="none" style={{ transition: 'stroke 0.2s ease' }} />
    </g>
  );

  // Server Agent Icon
  const ServerAgentIcon = ({ x, y, isActive, isProcessing }: { x: number; y: number; isActive?: boolean; isProcessing?: boolean }) => (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <circle cx="25" cy="25" r="28" fill={isProcessing ? 'rgba(197, 160, 89, 0.15)' : 'transparent'} style={{ transition: 'fill 0.3s ease' }} />
      <rect x="5" y="5" width="40" height="40" rx="8" fill="white"
        stroke={isActive || isProcessing ? '#C5A059' : '#E0E0E0'}
        strokeWidth={isActive || isProcessing ? 2.5 : 1.5}
        style={{ transition: 'stroke 0.2s ease', filter: isProcessing ? 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.4))' : 'none' }} />
      {/* Server rack */}
      <rect x="13" y="12" width="24" height="10" rx="2" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2" fill="none" style={{ transition: 'stroke 0.2s ease' }} />
      <rect x="13" y="26" width="24" height="10" rx="2" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2" fill="none" style={{ transition: 'stroke 0.2s ease' }} />
      <circle cx="32" cy="17" r="2" fill={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} style={{ transition: 'fill 0.2s ease' }} />
      <circle cx="32" cy="31" r="2" fill={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} style={{ transition: 'fill 0.2s ease' }} />
    </g>
  );

  // Email Agent Icon
  const EmailAgentIcon = ({ x, y, isActive, isProcessing }: { x: number; y: number; isActive?: boolean; isProcessing?: boolean }) => (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <circle cx="25" cy="25" r="28" fill={isProcessing ? 'rgba(197, 160, 89, 0.15)' : 'transparent'} style={{ transition: 'fill 0.3s ease' }} />
      <rect x="5" y="5" width="40" height="40" rx="8" fill="white"
        stroke={isActive || isProcessing ? '#C5A059' : '#E0E0E0'}
        strokeWidth={isActive || isProcessing ? 2.5 : 1.5}
        style={{ transition: 'stroke 0.2s ease', filter: isProcessing ? 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.4))' : 'none' }} />
      {/* Email envelope */}
      <rect x="12" y="15" width="26" height="18" rx="2" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2" fill="none" style={{ transition: 'stroke 0.2s ease' }} />
      <path d="M12 17 L25 26 L38 17" stroke={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.2s ease' }} />
    </g>
  );

  // Analytics Agent Icon
  const AnalyticsAgentIcon = ({ x, y, isActive, isProcessing }: { x: number; y: number; isActive?: boolean; isProcessing?: boolean }) => (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <circle cx="25" cy="25" r="28" fill={isProcessing ? 'rgba(197, 160, 89, 0.15)' : 'transparent'} style={{ transition: 'fill 0.3s ease' }} />
      <rect x="5" y="5" width="40" height="40" rx="8" fill="white"
        stroke={isActive || isProcessing ? '#C5A059' : '#E0E0E0'}
        strokeWidth={isActive || isProcessing ? 2.5 : 1.5}
        style={{ transition: 'stroke 0.2s ease', filter: isProcessing ? 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.4))' : 'none' }} />
      {/* Chart bars */}
      <rect x="13" y="28" width="5" height="8" rx="1" fill={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} style={{ transition: 'fill 0.2s ease' }} />
      <rect x="22" y="20" width="5" height="16" rx="1" fill={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} style={{ transition: 'fill 0.2s ease' }} />
      <rect x="31" y="14" width="5" height="22" rx="1" fill={isActive || isProcessing ? '#C5A059' : '#CCCCCC'} style={{ transition: 'fill 0.2s ease' }} />
    </g>
  );

  // Tool Icons (grey, different variants)
  const ToolIcon = ({ x, y, isActive, isProcessing, variant }: { x: number; y: number; isActive?: boolean; isProcessing?: boolean; variant?: ToolVariant }) => {
    const renderInner = () => {
      switch (variant) {
        case 'crm': // Contact/People
          return (
            <>
              <circle cx="20" cy="14" r="5" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
              <path d="M10 32 Q10 24 20 24 Q30 24 30 32" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
            </>
          );
        case 'calendar': // Calendar
          return (
            <>
              <rect x="8" y="10" width="24" height="22" rx="2" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
              <line x1="8" y1="18" x2="32" y2="18" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" />
              <line x1="14" y1="7" x2="14" y2="13" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" strokeLinecap="round" />
              <line x1="26" y1="7" x2="26" y2="13" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" strokeLinecap="round" />
            </>
          );
        case 'storage': // Cloud/Storage
          return (
            <path d="M12 26 Q6 26 6 20 Q6 14 14 14 Q14 8 22 8 Q32 8 32 16 Q38 16 38 22 Q38 28 30 28 L12 28 Z"
              stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
          );
        case 'api': // Webhook/API
          return (
            <>
              <circle cx="20" cy="12" r="4" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
              <circle cx="10" cy="28" r="4" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
              <circle cx="30" cy="28" r="4" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" fill="none" />
              <line x1="20" y1="16" x2="12" y2="24" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" />
              <line x1="20" y1="16" x2="28" y2="24" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" />
            </>
          );
        default: // Gear/Settings
          return (
            <>
              <path d="M12 14 L20 10 L28 14 L28 22 L20 26 L12 22 Z" fill="none" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1.5" />
              <path d="M20 10 L20 26 M12 14 L28 22 M28 14 L12 22" fill="none" stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'} strokeWidth="1" opacity="0.5" />
            </>
          );
      }
    };

    return (
      <g transform={`translate(${x - 20}, ${y - 20})`}>
        <circle cx="20" cy="20" r="24" fill={isProcessing ? 'rgba(136, 136, 136, 0.1)' : 'transparent'} style={{ transition: 'fill 0.3s ease' }} />
        <rect x="0" y="0" width="40" height="40" rx="6"
          fill={isActive || isProcessing ? 'rgba(200, 200, 200, 0.3)' : 'rgba(230, 230, 230, 0.4)'}
          stroke="none" style={{ transition: 'fill 0.3s ease' }} />
        {renderInner()}
      </g>
    );
  };

  const renderAgentIcon = (node: Node, isActive: boolean, isProcessing: boolean) => {
    const props = { x: node.x, y: node.y, isActive, isProcessing };
    switch (node.variant as AgentVariant) {
      case 'code': return <CodeAgentIcon key={node.id} {...props} />;
      case 'database': return <DatabaseAgentIcon key={node.id} {...props} />;
      case 'server': return <ServerAgentIcon key={node.id} {...props} />;
      case 'email': return <EmailAgentIcon key={node.id} {...props} />;
      case 'analytics': return <AnalyticsAgentIcon key={node.id} {...props} />;
      default: return <CodeAgentIcon key={node.id} {...props} />;
    }
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-lg md:text-xl mb-3 md:mb-4 text-stone-800">{texts.title}</h3>
      <p
        className="text-xs md:text-sm text-stone-500 mb-4 md:mb-6 text-center max-w-md px-2"
        dangerouslySetInnerHTML={{ __html: texts.desc }}
      />

      <div className="bg-[#F5F5F3] rounded-xl p-2 md:p-5 mb-4 md:mb-6 w-full max-w-[580px]">
        <svg width="100%" viewBox="100 40 400 320" className="block">
          {/* Definitions */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Subtle grid */}
          <line x1="150" y1="80" x2="150" y2="320" stroke="#E8E8E6" strokeWidth="1" opacity="0.5" />
          <line x1="300" y1="80" x2="300" y2="320" stroke="#E8E8E6" strokeWidth="1" opacity="0.5" />
          <line x1="450" y1="80" x2="450" y2="320" stroke="#E8E8E6" strokeWidth="1" opacity="0.5" />
          <line x1="150" y1="80" x2="450" y2="80" stroke="#E8E8E6" strokeWidth="1" opacity="0.5" />
          <line x1="150" y1="200" x2="450" y2="200" stroke="#E8E8E6" strokeWidth="1" opacity="0.5" />
          <line x1="150" y1="320" x2="450" y2="320" stroke="#E8E8E6" strokeWidth="1" opacity="0.5" />

          {/* Connection lines */}
          {connections.map((conn, i) => {
            const from = getNode(conn.from);
            const to = getNode(conn.to);
            if (!from || !to) return null;
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#B0B0B0"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}

          {/* Animated particles */}
          {particles.map(particle => {
            const progress = easeInOutCubic(particle.progress);
            const x = particle.fromX + (particle.toX - particle.fromX) * progress;
            const y = particle.fromY + (particle.toY - particle.fromY) * progress;
            const opacity = particle.progress < 0.1
              ? particle.progress * 10
              : particle.progress > 0.9
                ? (1 - particle.progress) * 10
                : 1;

            return (
              <g key={particle.id}>
                <circle cx={x} cy={y} r="6" fill={particle.color} opacity={opacity * 0.3} filter="url(#glow)" />
                <circle cx={x} cy={y} r="4" fill={particle.color} opacity={opacity} />
                <circle cx={x} cy={y} r="2" fill="white" opacity={opacity * 0.8} />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map(node => (
            node.type === 'agent'
              ? renderAgentIcon(node, !!activeNodes[node.id], !!processingNodes[node.id])
              : <ToolIcon
                  key={node.id}
                  x={node.x}
                  y={node.y}
                  isActive={activeNodes[node.id]}
                  isProcessing={processingNodes[node.id]}
                  variant={node.variant as ToolVariant}
                />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-stone-500">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-stone-800" />
          <span>{texts.context}</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-nobel-gold" />
          <span>{texts.agentAction}</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm bg-stone-300" />
          <span>{texts.toolResource}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentInteractionNetwork;

import React, { useState, useEffect } from 'react';

const AgentInteractionNetwork = () => {
  const [particles, setParticles] = useState([]);
  const [activeNodes, setActiveNodes] = useState({});
  const [processingNodes, setProcessingNodes] = useState({});

  // Node positions in the grid
  const nodes = [
    { id: 'agent1', x: 150, y: 80, type: 'agent' },
    { id: 'tool1', x: 300, y: 80, type: 'tool' },
    { id: 'agent2', x: 450, y: 80, type: 'agent' },
    { id: 'tool2', x: 150, y: 200, type: 'tool' },
    { id: 'agent3', x: 300, y: 200, type: 'agent' },
    { id: 'tool3', x: 450, y: 200, type: 'tool' },
    { id: 'agent4', x: 150, y: 320, type: 'agent' },
    { id: 'tool4', x: 300, y: 320, type: 'tool' },
    { id: 'agent5', x: 450, y: 320, type: 'agent' },
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

  const getNode = (id) => nodes.find(n => n.id === id);

  // Generate flowing particles
  useEffect(() => {
    let particleId = 0;
    
    const createParticle = () => {
      const connection = connections[Math.floor(Math.random() * connections.length)];
      const fromNode = getNode(connection.from);
      const toNode = getNode(connection.to);
      
      const newParticle = {
        id: particleId++,
        fromX: fromNode.x,
        fromY: fromNode.y,
        toX: toNode.x,
        toY: toNode.y,
        progress: 0,
        fromId: connection.from,
        toId: connection.to,
        color: fromNode.type === 'agent' ? '#C4A052' : '#888888',
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

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const AgentIcon = ({ x, y, isActive, isProcessing }) => (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <circle 
        cx="25" 
        cy="25" 
        r="28" 
        fill={isProcessing ? 'rgba(196, 160, 82, 0.15)' : 'transparent'}
        style={{
          transition: 'fill 0.3s ease',
        }}
      />
      <rect 
        x="5" 
        y="5" 
        width="40" 
        height="40" 
        rx="8" 
        fill="white"
        stroke={isActive || isProcessing ? '#C4A052' : '#E0E0E0'}
        strokeWidth={isActive || isProcessing ? 2.5 : 1.5}
        style={{
          transition: 'stroke 0.2s ease, stroke-width 0.2s ease',
          filter: isProcessing ? 'drop-shadow(0 0 8px rgba(196, 160, 82, 0.4))' : 'none',
        }}
      />
      <rect x="12" y="15" width="26" height="3" rx="1.5" fill={isActive || isProcessing ? '#C4A052' : '#CCCCCC'} 
        style={{ transition: 'fill 0.2s ease' }} />
      <rect x="12" y="22" width="18" height="3" rx="1.5" fill={isActive || isProcessing ? '#C4A052' : '#CCCCCC'} 
        style={{ transition: 'fill 0.2s ease' }} />
      <rect x="12" y="29" width="22" height="3" rx="1.5" fill={isActive || isProcessing ? '#C4A052' : '#CCCCCC'} 
        style={{ transition: 'fill 0.2s ease' }} />
    </g>
  );

  const ToolIcon = ({ x, y, isActive, isProcessing }) => (
    <g transform={`translate(${x - 20}, ${y - 20})`}>
      <circle 
        cx="20" 
        cy="20" 
        r="24" 
        fill={isProcessing ? 'rgba(136, 136, 136, 0.1)' : 'transparent'}
        style={{
          transition: 'fill 0.3s ease',
        }}
      />
      <rect 
        x="0" 
        y="0" 
        width="40" 
        height="40" 
        rx="6" 
        fill={isActive || isProcessing ? 'rgba(200, 200, 200, 0.3)' : 'rgba(230, 230, 230, 0.4)'}
        stroke="none"
        style={{
          transition: 'fill 0.3s ease',
        }}
      />
      <path 
        d="M12 14 L20 10 L28 14 L28 22 L20 26 L12 22 Z" 
        fill="none" 
        stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'}
        strokeWidth="1.5"
        style={{ transition: 'stroke 0.2s ease' }}
      />
      <path 
        d="M20 10 L20 26 M12 14 L28 22 M28 14 L12 22" 
        fill="none" 
        stroke={isActive || isProcessing ? '#888888' : '#BBBBBB'}
        strokeWidth="1"
        opacity="0.5"
        style={{ transition: 'stroke 0.2s ease' }}
      />
    </g>
  );

  return (
    <div style={{
      fontFamily: "'Libre Baskerville', Georgia, serif",
      backgroundColor: '#FAFAFA',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '48px 60px',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '400',
          color: '#2D2D2D',
          textAlign: 'center',
          marginBottom: '16px',
          letterSpacing: '-0.5px',
        }}>
          Agent-interaktionsnät
        </h1>
        
        <p style={{
          fontSize: '15px',
          color: '#5A5A5A',
          textAlign: 'center',
          lineHeight: '1.7',
          marginBottom: '32px',
          maxWidth: '520px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Observera <strong style={{ color: '#C4A052' }}>Autonoma Agenter</strong> (färgade) som utbyter kontext via{' '}
          <strong style={{ color: '#2D2D2D' }}>MCP</strong> för att styra era system (noder). De väntar inte bara på input;
          de pratar med varandra för att lösa problem.
        </p>

        <div style={{
          backgroundColor: '#F5F5F3',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '32px',
        }}>
          <svg width="100%" viewBox="0 0 600 400" style={{ display: 'block' }}>
            {/* Grid lines */}
            <defs>
              <linearGradient id="particleGradientGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C4A052" stopOpacity="0" />
                <stop offset="50%" stopColor="#C4A052" stopOpacity="1" />
                <stop offset="100%" stopColor="#C4A052" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="particleGradientGray" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#888888" stopOpacity="0" />
                <stop offset="50%" stopColor="#888888" stopOpacity="1" />
                <stop offset="100%" stopColor="#888888" stopOpacity="0" />
              </linearGradient>
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

            {/* Connection lines (subtle) */}
            {connections.map((conn, i) => {
              const from = getNode(conn.from);
              const to = getNode(conn.to);
              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#E0E0DE"
                  strokeWidth="1"
                  opacity="0.6"
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
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={particle.color}
                    opacity={opacity * 0.3}
                    filter="url(#glow)"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill={particle.color}
                    opacity={opacity}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="2"
                    fill="white"
                    opacity={opacity * 0.8}
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map(node => (
              node.type === 'agent' ? (
                <AgentIcon 
                  key={node.id}
                  x={node.x} 
                  y={node.y}
                  isActive={activeNodes[node.id]}
                  isProcessing={processingNodes[node.id]}
                />
              ) : (
                <ToolIcon 
                  key={node.id}
                  x={node.x} 
                  y={node.y}
                  isActive={activeNodes[node.id]}
                  isProcessing={processingNodes[node.id]}
                />
              )
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          fontSize: '14px',
          color: '#6B6B6B',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#2D2D2D',
            }} />
            <span>Kontext</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              backgroundColor: '#C4A052',
            }} />
            <span>Agenthandling</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              backgroundColor: '#D4D4D4',
            }} />
            <span>Verktyg/Resurs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentInteractionNetwork;
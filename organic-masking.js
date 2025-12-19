import React, { useEffect, useRef } from 'react';

const OrganicImageMask = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);

  useEffect(() => {
    // Blob shape generator
    const createBlobPath = (seed, time, complexity = 6) => {
      const points = [];
      for (let i = 0; i < complexity; i++) {
        const angle = (i / complexity) * Math.PI * 2;
        const noise1 = Math.sin(time * 0.8 + i * 1.5 + seed) * 0.08;
        const noise2 = Math.cos(time * 0.6 + i * 2.1 + seed * 2) * 0.06;
        const noise3 = Math.sin(time * 1.1 + i * 0.8 + seed * 3) * 0.04;
        const radius = 0.35 + noise1 + noise2 + noise3;
        
        const x = 0.5 + Math.cos(angle) * radius;
        const y = 0.5 + Math.sin(angle) * radius;
        points.push({ x, y });
      }
      return points;
    };

    const pointsToSmoothPath = (points) => {
      const len = points.length;
      let d = '';
      
      for (let i = 0; i < len; i++) {
        const p0 = points[(i - 1 + len) % len];
        const p1 = points[i];
        const p2 = points[(i + 1) % len];
        const p3 = points[(i + 2) % len];

        if (i === 0) {
          d += `M ${p1.x},${p1.y} `;
        }

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d += `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y} `;
      }
      
      return d + 'Z';
    };

    let animationId;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      
      if (path1Ref.current) {
        const points1 = createBlobPath(0, elapsed);
        path1Ref.current.setAttribute('d', pointsToSmoothPath(points1));
      }
      
      if (path2Ref.current) {
        const points2 = createBlobPath(100, elapsed * 0.85);
        path2Ref.current.setAttribute('d', pointsToSmoothPath(points2));
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, sans-serif",
      backgroundColor: '#0A0A0A',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
    }}>
      <style>{`
        .founder-container {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .founder-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .image-wrapper {
          width: 320px;
          height: 400px;
          position: relative;
        }

        @media (max-width: 768px) {
          .founder-container {
            flex-direction: column;
            gap: 48px;
          }
          
          .image-wrapper {
            width: 280px;
            height: 350px;
          }
        }
      `}</style>

      {/* Hidden SVG for clip path definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="organicMask1" clipPathUnits="objectBoundingBox">
            <path ref={path1Ref} />
          </clipPath>
          <clipPath id="organicMask2" clipPathUnits="objectBoundingBox">
            <path ref={path2Ref} />
          </clipPath>
        </defs>
      </svg>

      <div className="founder-container">
        {/* Founder 1 */}
        <div className="founder-card">
          <div className="image-wrapper">
            <div style={{
              width: '100%',
              height: '100%',
              clipPath: 'url(#organicMask1)',
              overflow: 'hidden',
            }}>
              {/* ERSÄTT MED: <img src="/path/to/image1.jpg" alt="Founder 1" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '14px',
              }}>
                Bild 1
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              color: '#FFFFFF', 
              fontSize: '20px', 
              fontWeight: '500',
              margin: '0 0 4px 0',
            }}>
              Namn Efternamn
            </h3>
            <p style={{ 
              color: '#888888', 
              fontSize: '14px',
              margin: 0,
            }}>
              Co-founder & CEO
            </p>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <div className="image-wrapper">
            <div style={{
              width: '100%',
              height: '100%',
              clipPath: 'url(#organicMask2)',
              overflow: 'hidden',
            }}>
              {/* ERSÄTT MED: <img src="/path/to/image2.jpg" alt="Founder 2" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '14px',
              }}>
                Bild 2
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              color: '#FFFFFF', 
              fontSize: '20px', 
              fontWeight: '500',
              margin: '0 0 4px 0',
            }}>
              Namn Efternamn
            </h3>
            <p style={{ 
              color: '#888888', 
              fontSize: '14px',
              margin: 0,
            }}>
              Co-founder & CTO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicImageMask;
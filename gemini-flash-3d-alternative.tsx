import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Zap, Play, Pause, Sparkles } from 'lucide-react';

// Three.js CDN
const THREE_URL = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

const LiquidBlobScene = ({ quality = 'high' }) => {
  const mountRef = useRef(null);
  const requestRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, blobs = [];
    let isMounted = true;

    const initThree = () => {
      const THREE = window.THREE;
      if (!THREE || !mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      // 1. Scene & Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 7;
      cameraRef.current = camera;

      // 2. Renderer
      renderer = new THREE.WebGLRenderer({ 
        antialias: quality === 'high', 
        alpha: true,
        powerPreference: "high-performance" 
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // 3. Blobs (Gele-bollar)
      const createBlob = (size, x, y, z, speedOffset, color) => {
        const segments = quality === 'high' ? 64 : 32;
        const geometry = new THREE.SphereGeometry(size, segments, segments);
        const material = new THREE.MeshStandardMaterial({
          color: color,
          roughness: 0.1,
          metalness: 0.2,
          flatShading: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        scene.add(mesh);
        
        return {
          mesh,
          geometry,
          initialPositions: geometry.attributes.position.array.slice(),
          speed: speedOffset
        };
      };

      blobs.push(createBlob(2.6, -3, 2, -1, 0.8, 0x888888));
      blobs.push(createBlob(2.0, 4, -2, -2, 0.6, 0x777777));
      blobs.push(createBlob(1.4, -1, -3, 0, 1.1, 0x666666));

      // 4. Ljus
      const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
      mainLight.position.set(10, 10, 10);
      scene.add(mainLight);

      const fillLight = new THREE.PointLight(0xffffff, 1.2);
      fillLight.position.set(-10, -5, 5);
      scene.add(fillLight);

      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);

      // 5. Animation Loop
      let time = 0;
      const animate = () => {
        if (!isMounted) return;
        requestRef.current = requestAnimationFrame(animate);
        time += quality === 'high' ? 0.012 : 0.008;

        blobs.forEach((blob, idx) => {
          const pos = blob.geometry.attributes.position.array;
          const init = blob.initialPositions;
          const s = blob.speed;

          for (let i = 0; i < pos.length; i += 3) {
            const x = init[i];
            const y = init[i+1];
            const z = init[i+2];

            const noise = Math.sin(x * 0.8 + time * s) * 0.35 + 
                          Math.cos(y * 0.8 + time * s) * 0.35 + 
                          Math.sin(z * 0.8 + time * s) * 0.35;

            pos[i] = x * (1 + noise);
            pos[i+1] = y * (1 + noise);
            pos[i+2] = z * (1 + noise);
          }
          blob.geometry.attributes.position.needsUpdate = true;
          blob.mesh.rotation.y += 0.001 * s;
          
          blob.mesh.position.y += Math.sin(time * 0.3 + idx) * 0.006;
          blob.mesh.position.x += Math.cos(time * 0.2 + idx) * 0.004;
        });

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate();
    };

    const existingScript = document.querySelector(`script[src="${THREE_URL}"]`);
    if (existingScript) {
      if (window.THREE) {
        initThree();
      } else {
        existingScript.addEventListener('load', initThree);
      }
    } else {
      const script = document.createElement('script');
      script.src = THREE_URL;
      script.async = true;
      script.onload = initThree;
      document.head.appendChild(script);
    }

    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current || !mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (rendererRef.current && mountRef.current && rendererRef.current.domElement) {
        if (mountRef.current.contains(rendererRef.current.domElement)) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, [quality]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default function App() {
  const [quality, setQuality] = useState('high');
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-zinc-200">
      
      {/* LAGER 1: Bakgrundsfärg */}
      <div className="fixed inset-0 bg-[#f4f4f7] z-0" />

      {/* LAGER 2: 3D Animation */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {!isPaused && <LiquidBlobScene quality={quality} />}
      </div>

      {/* LAGER 3: Huvudinnehåll */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* Kortet med EXTREM grain-effekt */}
        <div className="relative max-w-xl w-full overflow-hidden rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18)] border border-white/50">
          
          {/* HEAVY Grain Overlay - numOctaves ökat till 5 och opacity till 0.6 */}
          <div className="absolute inset-0 z-0 opacity-[0.6] pointer-events-none mix-blend-overlay"
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
               }}>
          </div>

          {/* Glas-lagret */}
          <div className="relative z-10 bg-white/10 backdrop-blur-[60px] p-12 text-center">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-12">
              <Sparkles className="text-white w-10 h-10" />
            </div>
            
            <h1 className="text-6xl font-black tracking-tighter mb-6 text-zinc-900 leading-none">
              LIQUID<br/><span className="italic opacity-30 uppercase text-4xl font-light">Creative</span>
            </h1>
            
            <p className="text-zinc-800 font-bold mb-12 text-lg">
              Transparent "frostat" glas med <br/>
              maximal grain-intensitet.
            </p>

            <div className="space-y-4">
              <button className="w-full py-6 bg-zinc-900 text-white rounded-3xl font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                Utforska 3D-världen
              </button>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setQuality(quality === 'high' ? 'low' : 'high')}
                  className="flex-1 py-4 bg-white/60 border border-zinc-200 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <Monitor size={16} />
                  {quality === 'high' ? 'Grafik: Ultra' : 'Läge: PC-vänlig'}
                </button>
                
                <button 
                  onClick={() => setIsPaused(!isPaused)}
                  className="px-8 py-4 bg-white/60 border border-zinc-200 rounded-2xl flex items-center justify-center hover:bg-white transition-colors"
                >
                  {isPaused ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-8 text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">
          <span className="flex items-center gap-2 underline decoration-zinc-400 decoration-2 underline-offset-4">Heavy Grain</span>
          <span className="opacity-20">/</span>
          <span className="flex items-center gap-2 tracking-[0.2em]">Octaves: 5 / Opacity: 0.6</span>
        </div>
      </main>
    </div>
  );
}
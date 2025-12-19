/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Liquid blob 3D animation using Three.js
 * Organic morphing spheres with smooth vertex displacement
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// === BLOB COLOR PRESETS ===
const BLOB_PRESETS = {
  default:  { center: "#4F46E5", left: "#9333EA", right: "#C5A059", ring: "#C5A059" },
  warm:     { center: "#F59E0B", left: "#EF4444", right: "#F97316", ring: "#F59E0B" },
  cool:     { center: "#06B6D4", left: "#3B82F6", right: "#8B5CF6", ring: "#06B6D4" },
  nature:   { center: "#10B981", left: "#059669", right: "#34D399", ring: "#10B981" },
  mono:     { center: "#6B7280", left: "#9CA3AF", right: "#D1D5DB", ring: "#9CA3AF" },
  gold:     { center: "#C5A059", left: "#D4AF37", right: "#B8860B", ring: "#C5A059" },
  sunset:   { center: "#F472B6", left: "#FB923C", right: "#FBBF24", ring: "#F472B6" },
  ocean:    { center: "#0EA5E9", left: "#0284C7", right: "#38BDF8", ring: "#0EA5E9" },
  forest:   { center: "#22C55E", left: "#15803D", right: "#86EFAC", ring: "#22C55E" },
  royal:    { center: "#ffdd00", left: "#58719b", right: "#a3a3a3", ring: "#7C3AED" },
};

// === CHANGE THIS TO SWITCH PRESET ===
const BLOB_COLORS = BLOB_PRESETS.royal;

interface LiquidBlobSceneProps {
  quality?: 'high' | 'low';
  colors?: typeof BLOB_COLORS;
  opacity?: number;
}

interface BlobData {
  mesh: THREE.Mesh;
  geometry: THREE.SphereGeometry;
  initialPositions: Float32Array;
  speed: number;
}

const LiquidBlobScene: React.FC<LiquidBlobSceneProps> = ({
  quality = 'high',
  colors = BLOB_COLORS,
  opacity = 0.6
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const blobsRef = useRef<BlobData[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let isMounted = true;

    const init = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width === 0 || height === 0) {
        requestAnimationFrame(init);
        return;
      }

      // Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 7;
      cameraRef.current = camera;

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: quality === 'high',
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);

      // Create blob function
      const createBlob = (
        size: number,
        x: number,
        y: number,
        z: number,
        speedOffset: number,
        color: string
      ): BlobData => {
        const segments = quality === 'high' ? 64 : 32;
        const geometry = new THREE.SphereGeometry(size, segments, segments);
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          roughness: 0.15,
          metalness: 0.3,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        scene.add(mesh);

        const positionAttribute = geometry.getAttribute('position');
        const initialPositions = new Float32Array(positionAttribute.array.length);
        initialPositions.set(positionAttribute.array);

        return {
          mesh,
          geometry,
          initialPositions,
          speed: speedOffset
        };
      };

      // Create blobs with preset colors
      blobsRef.current = [
        createBlob(2.6, -3, 2, -1, 0.8, colors.center),
        createBlob(2.0, 4, -2, -2, 0.6, colors.left),
        createBlob(1.4, -1, -3, 0, 1.1, colors.right),
      ];

      // Lighting
      const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
      mainLight.position.set(10, 10, 10);
      scene.add(mainLight);

      const fillLight = new THREE.PointLight(0xffffff, 1.2);
      fillLight.position.set(-10, -5, 5);
      scene.add(fillLight);

      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);

      // Animation Loop
      const animate = () => {
        if (!isMounted) return;
        requestRef.current = requestAnimationFrame(animate);
        timeRef.current += quality === 'high' ? 0.012 : 0.008;
        const time = timeRef.current;

        blobsRef.current.forEach((blob, idx) => {
          const positionAttribute = blob.geometry.getAttribute('position');
          const positions = positionAttribute.array as Float32Array;
          const init = blob.initialPositions;
          const s = blob.speed;

          for (let i = 0; i < positions.length; i += 3) {
            const x = init[i];
            const y = init[i + 1];
            const z = init[i + 2];

            const noise = Math.sin(x * 0.8 + time * s) * 0.35 +
                          Math.cos(y * 0.8 + time * s) * 0.35 +
                          Math.sin(z * 0.8 + time * s) * 0.35;

            positions[i] = x * (1 + noise);
            positions[i + 1] = y * (1 + noise);
            positions[i + 2] = z * (1 + noise);
          }
          positionAttribute.needsUpdate = true;
          blob.geometry.computeVertexNormals();
          blob.mesh.rotation.y += 0.001 * s;

          blob.mesh.position.y += Math.sin(time * 0.3 + idx) * 0.006;
          blob.mesh.position.x += Math.cos(time * 0.2 + idx) * 0.004;
        });

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      };

      animate();
    };

    // Start initialization
    init();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (rendererRef.current && container && rendererRef.current.domElement) {
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
      }
      // Clean up geometries and materials
      blobsRef.current.forEach(blob => {
        blob.geometry.dispose();
        (blob.mesh.material as THREE.Material).dispose();
      });
      blobsRef.current = [];
    };
  }, [quality, colors]);

  return (
    <div
      ref={mountRef}
      style={{
        opacity,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <LiquidBlobScene quality="high" colors={BLOB_COLORS} opacity={0.7} />
    </div>
  );
};

export const QuantumComputerScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <LiquidBlobScene quality="high" colors={BLOB_COLORS} opacity={0.8} />
    </div>
  );
};

// Export presets for external use
export { BLOB_PRESETS, BLOB_COLORS, LiquidBlobScene };

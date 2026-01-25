import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Line } from '@react-three/drei';
import * as THREE from 'three';

// Ease function for smooth transitions
const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Custom ease for the drop
const easeOutBounce = (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
    else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
    else return n1 * (t -= 2.625 / d1) * t + 0.984375;
};

interface MorphingVisProps {
  scrollProgress: number; // 0 to 1
}

// Cluster centers for the MLP graph state
const clusterCenters = [
    new THREE.Vector3(-6, 2, 0),
    new THREE.Vector3(-6, -2, 0),
    new THREE.Vector3(0, 4, 0),
    new THREE.Vector3(0, -4, 0),
    new THREE.Vector3(6, 0, 0),
];

// Connections between clusters
const connections = [
    { from: 0, to: 2, w: 0.85 }, { from: 0, to: 3, w: 0.12 },
    { from: 1, to: 2, w: 0.43 }, { from: 1, to: 3, w: 0.76 },
    { from: 2, to: 4, w: 0.91 }, { from: 3, to: 4, w: 0.26 }
];

export const MorphingVis: React.FC<MorphingVisProps> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 4000;
  const animProgress = useRef(0);

  const [heroPos, dropPos, gaussianPos, spherePos, graphPos] = useMemo(() => {
    const hero = new Float32Array(count * 3);
    const drop = new Float32Array(count * 3);
    const gauss = new Float32Array(count * 3);
    const sphere = new Float32Array(count * 3);
    const graph = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        // 1. Hero
        const rHero = 10 + THREE.MathUtils.randFloatSpread(4);
        const thetaH = THREE.MathUtils.randFloatSpread(360);
        const phiH = THREE.MathUtils.randFloatSpread(360);
        hero[i*3] = rHero * Math.sin(thetaH) * Math.cos(phiH);
        hero[i*3+1] = rHero * Math.sin(thetaH) * Math.sin(phiH);
        hero[i*3+2] = rHero * Math.cos(thetaH);

        // 2. Drop
        drop[i*3] = (Math.random() - 0.5) * 25;
        drop[i*3+1] = -8 + Math.random() * 2;
        drop[i*3+2] = (Math.random() - 0.5) * 15;

        // 3. Gaussian
        const gridSize = Math.sqrt(count);
        const xG = (i % gridSize) / gridSize * 20 - 10;
        const zG = Math.floor(i / gridSize) / gridSize * 20 - 10;
        const yG = 6 * Math.exp(-(xG * xG + zG * zG) / 15);
        gauss[i*3] = xG;
        gauss[i*3+1] = yG - 3;
        gauss[i*3+2] = zG;

        // 4. Sphere
        const thetaS = Math.random() * Math.PI * 2;
        const phiS = Math.acos((Math.random() * 2) - 1);
        const rS = 1.5;
        sphere[i*3] = rS * Math.sin(phiS) * Math.cos(thetaS);
        sphere[i*3+1] = rS * Math.sin(phiS) * Math.sin(thetaS);
        sphere[i*3+2] = rS * Math.cos(phiS);

        // 5. Graph
        const clusterIdx = Math.floor(Math.random() * clusterCenters.length);
        const center = clusterCenters[clusterIdx];
        const spread = 1.8;
        graph[i*3] = center.x + (Math.random() - 0.5) * spread;
        graph[i*3+1] = center.y + (Math.random() - 0.5) * spread;
        graph[i*3+2] = center.z + (Math.random() - 0.5) * spread;
    }
    return [hero, drop, gauss, sphere, graph];
  }, []);

  // Initialize with Hero state so it's visible immediately even before first frame update
  const currentPositions = useMemo(() => {
      const arr = new Float32Array(count * 3);
      arr.set(heroPos); 
      return arr;
  }, [heroPos, count]);

  const colors = useMemo(() => {
      const arr = new Float32Array(count * 3);
      // Fill with Cyan (0, 1, 1) initially
      for(let i=0; i<count; i++) {
          arr[i*3] = 0;
          arr[i*3+1] = 1;
          arr[i*3+2] = 1;
      }
      return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    const isActive = scrollProgress > 0.02;
    // Reduced speed from 0.15 to 0.05 for slower animation
    const forwardSpeed = 0.05;
    const rewindSpeed = 0.5;
    
    if (isActive) {
        animProgress.current += delta * forwardSpeed;
        if (animProgress.current >= 1) animProgress.current = 0;
    } else {
        animProgress.current -= delta * rewindSpeed;
        if (animProgress.current < 0) animProgress.current = 0;
    }

    const p = animProgress.current;
    let t = 0;
    let startPos = heroPos;
    let endPos = heroPos;
    let colorR = 0, colorG = 1, colorB = 1;

    // Timeline logic
    if (p < 0.15) {
        const localP = p / 0.15;
        t = easeOutBounce(localP); 
        startPos = heroPos; endPos = dropPos;
        meshRef.current.rotation.y = time * 0.05 * (1 - localP);
        meshRef.current.position.y = 0;
        colorG = 1 - t * 0.5;
    } else if (p < 0.35) {
        const localP = (p - 0.15) / 0.20;
        t = easeInOutCubic(localP);
        startPos = dropPos; endPos = gaussianPos;
        colorB = 1; colorR = 0; colorG = 0.5 + t * 0.5;
        meshRef.current.rotation.y = 0;
    } else if (p < 0.55) {
        const localP = (p - 0.35) / 0.20;
        t = easeInOutCubic(localP);
        startPos = gaussianPos; endPos = spherePos;
        colorR = t * 0.6; colorG = 1 - t * 0.8;
        meshRef.current.rotation.y = 0;
    } else if (p < 0.75) {
        const localP = (p - 0.55) / 0.20;
        t = easeInOutCubic(localP);
        startPos = spherePos; endPos = graphPos;
        colorR = 0.6; colorG = 0.2; colorB = 1;
        meshRef.current.rotation.y = 0;
    } else if (p < 0.90) {
        startPos = graphPos; endPos = graphPos; t = 1;
        const breath = 1 + Math.sin(time * 3) * 0.05;
        meshRef.current.scale.set(breath, breath, breath);
        colorR = 0.6; colorG = 0.2; colorB = 1;
        meshRef.current.rotation.y = 0;
    } else {
        const localP = (p - 0.90) / 0.10;
        t = easeInOutCubic(localP);
        startPos = graphPos; endPos = heroPos;
        colorR = 0.6 * (1 - t); colorG = 0.2 + 0.8 * t; colorB = 1;
        meshRef.current.scale.set(1, 1, 1);
        meshRef.current.rotation.y = 0;
    }

    if (p <= 0.01 && !isActive) {
        meshRef.current.rotation.y = time * 0.05;
        meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }

    // Update geometry
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    const colorAttr = meshRef.current.geometry.attributes.color.array as Float32Array;
    
    // Safety check if arrays are available
    if (positions && colorAttr) {
        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            positions[ix] = startPos[ix] + (endPos[ix] - startPos[ix]) * t;
            positions[ix+1] = startPos[ix+1] + (endPos[ix+1] - startPos[ix+1]) * t;
            positions[ix+2] = startPos[ix+2] + (endPos[ix+2] - startPos[ix+2]) * t;
            colorAttr[ix] = colorR; colorAttr[ix+1] = colorG; colorAttr[ix+2] = colorB;
        }
        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group>
        <points ref={meshRef}>
        <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={count} array={currentPositions} itemSize={3} />
            <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.12} vertexColors sizeAttenuation={true} transparent={true} opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
        <NeuralConnections animProgress={animProgress} />
    </group>
  );
};

const NeuralConnections = ({ animProgress }: { animProgress: React.MutableRefObject<number> }) => {
    // Stable refs (do not clear in render body)
    const linesRef = useRef<(any)[]>([]);
    const textsRef = useRef<(any)[]>([]);
    
    useFrame(() => {
      const p = animProgress.current;
      let opacity = 0;
      
      // Trigger connections when nearing the graph state
      if (p > 0.60 && p < 0.95) {
          if (p < 0.70) opacity = (p - 0.60) / 0.10;
          else if (p < 0.85) opacity = 1;
          else opacity = 1 - (p - 0.85) / 0.10;
      }
      opacity = Math.max(0, Math.min(1, opacity));
  
      linesRef.current.forEach(line => {
          if (line && line.material) {
              line.material.opacity = opacity * 0.4;
              line.material.transparent = true;
              line.material.depthWrite = false;
              line.visible = opacity > 0.01;
          }
      });
  
      textsRef.current.forEach(text => {
          if (text) {
              // Troika-three-text uses fillOpacity property directly
              text.fillOpacity = opacity;
              text.visible = opacity > 0.01;
          }
      });
    });
  
    return (
      <group>
        {connections.map((conn, i) => {
          const start = clusterCenters[conn.from];
          const end = clusterCenters[conn.to];
          const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
          return (
            <group key={i}>
              <Line
                ref={(el) => { linesRef.current[i] = el; }}
                points={[start, end]}
                color="#7000FF"
                lineWidth={2}
                transparent
                opacity={0} 
              />
              <Text
                ref={(el) => { textsRef.current[i] = el; }}
                position={[mid.x, mid.y + 0.3, mid.z]}
                fontSize={0.35}
                color="#FFFFFF"
                anchorX="center"
                anchorY="middle"
                fillOpacity={0} // Init as invisible
                outlineWidth={0.02}
                outlineColor="#000000"
              >
                {conn.w.toFixed(2)}
              </Text>
            </group>
          );
        })}
      </group>
    );
  };
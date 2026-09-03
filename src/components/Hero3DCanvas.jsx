import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const VRVisorModel = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group ref={groupRef} scale={1.2}>
        {/* Main Visor Visage */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 1.1, 1.2]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.9}
            roughness={0.1}
            wireframe={false}
          />
        </mesh>
        {/* Glowing Front Lens Screen */}
        <mesh position={[0, 0, 0.61]}>
          <planeGeometry args={[2.0, 0.9]} />
          <MeshDistortMaterial
            color="#00f0ff"
            distort={0.25}
            speed={2.5}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>
        {/* Spatial Side Nodes */}
        <mesh position={[-1.25, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
          <meshStandardMaterial color="#ffaa00" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[1.25, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
          <meshStandardMaterial color="#ffaa00" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const UnrealCoreModel = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.3}>
        <icosahedronGeometry args={[1.5, 2]} />
        <MeshDistortMaterial
          color="#ffaa00"
          distort={0.4}
          speed={4}
          wireframe={true}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
};

const CyberArtifactModel = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.3}>
        <octahedronGeometry args={[1.6, 0]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.3}
          speed={3}
          wireframe={true}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const ParticleAtmosphere = () => {
  const ref = useRef();
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(3500), { radius: 4 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 18;
      ref.current.rotation.y -= delta / 22;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

const Hero3DCanvas = ({ modelType = 'visor' }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto z-0 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} color="#00f0ff" />
        <directionalLight position={[-10, -10, -10]} intensity={2.0} color="#ffaa00" />
        <pointLight position={[0, 5, 0]} intensity={1.5} color="#8b5cf6" />

        {modelType === 'visor' && <VRVisorModel />}
        {modelType === 'core' && <UnrealCoreModel />}
        {modelType === 'artifact' && <CyberArtifactModel />}

        <ParticleAtmosphere />
        <OrbitControls enableZoom={true} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default Hero3DCanvas;

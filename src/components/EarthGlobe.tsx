import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load clean earth texture
  const earthTexture = useLoader(
    TextureLoader,
    'https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg'
  );
  
  // Bump map for terrain elevation
  const bumpMap = useLoader(
    TextureLoader,
    'https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png'
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        bumpMap={bumpMap}
        bumpScale={0.05}
        roughness={0.8}
        metalness={0.1}
        // Desaturate to grayscale
        onBeforeCompile={(shader) => {
          shader.fragmentShader = shader.fragmentShader.replace(
            '#include <output_fragment>',
            `
            #include <output_fragment>
            float gray = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
            // Increase contrast: white continents, dark oceans
            gray = smoothstep(0.2, 0.6, gray);
            gl_FragColor.rgb = vec3(gray);
            `
          );
        }}
      />
    </mesh>
  );
};

const EarthGlobe = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient for base illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Main key light from top-right */}
        <directionalLight 
          position={[5, 3, 3]} 
          intensity={1.5} 
          color="#ffffff" 
        />
        
        {/* Fill light from left */}
        <directionalLight 
          position={[-3, 0, 2]} 
          intensity={0.3} 
          color="#ffffff" 
        />
        
        <Earth />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default EarthGlobe;

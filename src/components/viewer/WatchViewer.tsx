import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { WatchModel } from './WatchModel';
import { CameraControls } from './CameraControls';
import { Lighting } from './Lighting';

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

export function WatchViewer() {
  return (
    <div className="relative w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)' }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Lighting />
          <WatchModel />
          <CameraControls />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

import { OrbitControls } from '@react-three/drei';

export function CameraControls() {
  return (
    <OrbitControls
      enablePan={false}
      minDistance={3}
      maxDistance={8}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 1.8}
      autoRotate
      autoRotateSpeed={0.5}
      enableDamping
      dampingFactor={0.05}
    />
  );
}

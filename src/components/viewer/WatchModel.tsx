import * as THREE from 'three';
import { Float } from '@react-three/drei';
import { useWatchMaterials } from '../../hooks/useWatchMaterials';

// Placeholder watch geometry built from primitives
// Replace with: const { scene } = useGLTF('/models/watch.glb') when you have a real model
function PlaceholderWatch({ caseMaterial, strapMaterial, dialMaterial }: {
  caseMaterial: THREE.MeshStandardMaterial;
  strapMaterial: THREE.MeshStandardMaterial;
  dialMaterial: THREE.MeshStandardMaterial;
}) {
  return (
    <group>
      {/* Watch case body */}
      <mesh castShadow receiveShadow material={caseMaterial}>
        <cylinderGeometry args={[0.85, 0.85, 0.25, 64]} />
      </mesh>

      {/* Watch bezel (ring around dial) */}
      <mesh castShadow position={[0, 0.13, 0]} material={caseMaterial}>
        <torusGeometry args={[0.85, 0.08, 16, 64]} />
      </mesh>

      {/* Dial face */}
      <mesh position={[0, 0.14, 0]} material={dialMaterial}>
        <cylinderGeometry args={[0.76, 0.76, 0.02, 64]} />
      </mesh>

      {/* Hour hand */}
      <mesh position={[0, 0.17, 0.2]} rotation={[0, 0, 0]} material={caseMaterial}>
        <boxGeometry args={[0.04, 0.04, 0.4]} />
      </mesh>

      {/* Minute hand */}
      <mesh position={[0, 0.17, 0.27]} rotation={[0, Math.PI / 3, 0]} material={caseMaterial}>
        <boxGeometry args={[0.03, 0.03, 0.55]} />
      </mesh>

      {/* Crown */}
      <mesh position={[0.92, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={caseMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 0.18, 16]} />
      </mesh>

      {/* Upper strap */}
      <mesh position={[0, 0, -1.05]} castShadow material={strapMaterial}>
        <boxGeometry args={[0.6, 0.12, 1.2]} />
      </mesh>

      {/* Lower strap */}
      <mesh position={[0, 0, 1.05]} castShadow material={strapMaterial}>
        <boxGeometry args={[0.6, 0.12, 1.2]} />
      </mesh>

      {/* Strap lugs */}
      <mesh position={[0, 0, -0.95]} material={caseMaterial}>
        <boxGeometry args={[0.95, 0.18, 0.15]} />
      </mesh>
      <mesh position={[0, 0, 0.95]} material={caseMaterial}>
        <boxGeometry args={[0.95, 0.18, 0.15]} />
      </mesh>
    </group>
  );
}

export function WatchModel() {
  const { caseMaterial, strapMaterial, dialMaterial } = useWatchMaterials();

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group rotation={[-Math.PI / 8, 0, 0]}>
        <PlaceholderWatch
          caseMaterial={caseMaterial}
          strapMaterial={strapMaterial}
          dialMaterial={dialMaterial}
        />
      </group>
    </Float>
  );
}

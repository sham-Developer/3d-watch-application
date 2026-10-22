import { Environment, ContactShadows } from '@react-three/drei';

export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={0.8}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <spotLight
        position={[-5, 5, -5]}
        angle={0.4}
        penumbra={1}
        intensity={0.8}
        color="#4080ff"
      />
      <pointLight position={[0, -5, 0]} intensity={0.5} color="#ff8040" />
      <Environment preset="studio" />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.6}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}

import * as THREE from 'three';
import { useMemo } from 'react';
import { useWatchStore } from '../store/watchStore';
import { CASE_OPTIONS, STRAP_OPTIONS, DIAL_OPTIONS } from '../constants/watchOptions';

export function useWatchMaterials() {
  const { config } = useWatchStore();

  const caseMaterial = useMemo(() => {
    const option = CASE_OPTIONS.find((o) => o.id === config.caseMaterial)!;
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(option.color),
      roughness: option.roughness,
      metalness: option.metalness,
    });
  }, [config.caseMaterial]);

  const strapMaterial = useMemo(() => {
    const option = STRAP_OPTIONS.find((o) => o.id === config.strapType)!;
    const isLeather = config.strapType === 'leather';
    const isNATO = config.strapType === 'nato';
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(option.color),
      roughness: isLeather || isNATO ? 0.9 : 0.4,
      metalness: config.strapType === 'metal' ? 0.8 : 0.0,
    });
  }, [config.strapType]);

  const dialMaterial = useMemo(() => {
    const option = DIAL_OPTIONS.find((o) => o.id === config.dialColor)!;
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(option.hex),
      roughness: 0.05,
      metalness: 0.1,
    });
  }, [config.dialColor]);

  return { caseMaterial, strapMaterial, dialMaterial };
}

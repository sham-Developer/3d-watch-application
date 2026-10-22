import { create } from 'zustand';
import type { CaseMaterial, DialColor, StrapType, WatchConfig } from '../types/watch';

interface WatchStore {
  config: WatchConfig;
  setCaseMaterial: (material: CaseMaterial) => void;
  setStrapType: (strap: StrapType) => void;
  setDialColor: (color: DialColor) => void;
  resetConfig: () => void;
}

const defaultConfig: WatchConfig = {
  caseMaterial: 'silver',
  strapType: 'leather',
  dialColor: 'black',
};

export const useWatchStore = create<WatchStore>((set) => ({
  config: defaultConfig,
  setCaseMaterial: (material) =>
    set((state) => ({ config: { ...state.config, caseMaterial: material } })),
  setStrapType: (strap) =>
    set((state) => ({ config: { ...state.config, strapType: strap } })),
  setDialColor: (color) =>
    set((state) => ({ config: { ...state.config, dialColor: color } })),
  resetConfig: () => set({ config: defaultConfig }),
}));

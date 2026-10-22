export type CaseMaterial = 'gold' | 'silver' | 'black' | 'rose-gold';
export type StrapType = 'leather' | 'metal' | 'rubber' | 'nato';
export type DialColor = 'white' | 'black' | 'blue' | 'green' | 'champagne';

export interface WatchConfig {
  caseMaterial: CaseMaterial;
  strapType: StrapType;
  dialColor: DialColor;
}

export interface ColorOption {
  id: string;
  label: string;
  hex: string;
}

export interface MaterialOption {
  id: string;
  label: string;
  description: string;
  roughness: number;
  metalness: number;
  color: string;
}

export interface StrapOption {
  id: StrapType;
  label: string;
  description: string;
  color: string;
}

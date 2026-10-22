import type { ColorOption, MaterialOption, StrapOption } from '../types/watch';

export const CASE_OPTIONS: MaterialOption[] = [
  { id: 'gold', label: 'Gold', description: 'Polished yellow gold', roughness: 0.1, metalness: 1.0, color: '#D4AF37' },
  { id: 'silver', label: 'Silver', description: 'Brushed stainless steel', roughness: 0.3, metalness: 1.0, color: '#C0C0C0' },
  { id: 'black', label: 'Black', description: 'PVD black coating', roughness: 0.2, metalness: 0.9, color: '#2d2d2d' },
  { id: 'rose-gold', label: 'Rose Gold', description: 'Rose gold plated', roughness: 0.15, metalness: 1.0, color: '#B76E79' },
];

export const STRAP_OPTIONS: StrapOption[] = [
  { id: 'leather', label: 'Leather', description: 'Classic leather band', color: '#8B4513' },
  { id: 'metal', label: 'Metal', description: 'Stainless steel bracelet', color: '#A8A9AD' },
  { id: 'rubber', label: 'Rubber', description: 'Sport rubber strap', color: '#222222' },
  { id: 'nato', label: 'NATO', description: 'Nylon NATO strap', color: '#1B4332' },
];

export const DIAL_OPTIONS: ColorOption[] = [
  { id: 'white', label: 'White', hex: '#F5F5F0' },
  { id: 'black', label: 'Black', hex: '#1a1a1a' },
  { id: 'blue', label: 'Navy Blue', hex: '#1B2A4A' },
  { id: 'green', label: 'Forest Green', hex: '#1B4332' },
  { id: 'champagne', label: 'Champagne', hex: '#F5E6C8' },
];

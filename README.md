# Chrono Studio — 3D Watch Customizer

A real-time 3D watch customization app built with React, Three.js, and React Three Fiber.

## Tech Stack
- React 18 + TypeScript + Vite
- React Three Fiber + @react-three/drei
- Zustand (state management)
- Tailwind CSS v3

## Getting Started

```bash
npm install
npm run dev
```

## Adding a Real 3D Model

1. Place your `.glb` or `.gltf` watch model in `public/models/`
2. Update `src/components/viewer/WatchModel.tsx` to use `useGLTF('/models/your-watch.glb')`
3. Map mesh names from the model to the `caseMaterial`, `strapMaterial`, and `dialMaterial`

## Customization Options

| Category | Options |
|----------|---------|
| Case | Gold, Silver, Black, Rose Gold |
| Strap | Leather, Metal, Rubber, NATO |
| Dial | White, Black, Navy Blue, Forest Green, Champagne |

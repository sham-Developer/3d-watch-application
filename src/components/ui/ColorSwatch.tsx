interface ColorSwatchProps {
  hex: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function ColorSwatch({ hex, label, selected, onClick }: ColorSwatchProps) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`
        w-8 h-8 rounded-full transition-all duration-200 relative
        ${selected
          ? 'ring-2 ring-white ring-offset-2 ring-offset-zinc-900 scale-110'
          : 'hover:scale-105 hover:ring-1 hover:ring-white/40 hover:ring-offset-1 hover:ring-offset-zinc-900'
        }
      `}
      style={{ backgroundColor: hex }}
    />
  );
}

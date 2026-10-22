interface MaterialCardProps {
  label: string;
  description: string;
  color: string;
  selected: boolean;
  onClick: () => void;
}

export function MaterialCard({ label, description, color, selected, onClick }: MaterialCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-3 rounded-lg border transition-all duration-200 flex items-center gap-3
        ${selected
          ? 'border-white/60 bg-white/10'
          : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]'
        }
      `}
    >
      <div
        className="w-8 h-8 rounded-md flex-shrink-0 border border-white/20"
        style={{ backgroundColor: color }}
      />
      <div>
        <p className={`text-sm font-medium ${selected ? 'text-white' : 'text-zinc-300'}`}>
          {label}
        </p>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
      {selected && (
        <div className="ml-auto w-2 h-2 rounded-full bg-white" />
      )}
    </button>
  );
}

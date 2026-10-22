import { DIAL_OPTIONS } from '../../../constants/watchOptions';
import { useWatchStore } from '../../../store/watchStore';
import { ColorSwatch } from '../ColorSwatch';
import type { DialColor } from '../../../types/watch';

export function DialPanel() {
  const { config, setDialColor } = useWatchStore();

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-4">
        {DIAL_OPTIONS.map((option) => (
          <ColorSwatch
            key={option.id}
            hex={option.hex}
            label={option.label}
            selected={config.dialColor === option.id}
            onClick={() => setDialColor(option.id as DialColor)}
          />
        ))}
      </div>
      <p className="text-xs text-zinc-500">
        Selected: {DIAL_OPTIONS.find((o) => o.id === config.dialColor)?.label}
      </p>
    </div>
  );
}

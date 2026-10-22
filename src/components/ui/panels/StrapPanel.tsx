import { STRAP_OPTIONS } from '../../../constants/watchOptions';
import { useWatchStore } from '../../../store/watchStore';
import { MaterialCard } from '../MaterialCard';
import type { StrapType } from '../../../types/watch';

export function StrapPanel() {
  const { config, setStrapType } = useWatchStore();

  return (
    <div className="space-y-2">
      {STRAP_OPTIONS.map((option) => (
        <MaterialCard
          key={option.id}
          label={option.label}
          description={option.description}
          color={option.color}
          selected={config.strapType === option.id}
          onClick={() => setStrapType(option.id as StrapType)}
        />
      ))}
    </div>
  );
}

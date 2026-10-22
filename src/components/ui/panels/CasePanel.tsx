import { CASE_OPTIONS } from '../../../constants/watchOptions';
import { useWatchStore } from '../../../store/watchStore';
import { MaterialCard } from '../MaterialCard';
import type { CaseMaterial } from '../../../types/watch';

export function CasePanel() {
  const { config, setCaseMaterial } = useWatchStore();

  return (
    <div className="space-y-2">
      {CASE_OPTIONS.map((option) => (
        <MaterialCard
          key={option.id}
          label={option.label}
          description={option.description}
          color={option.color}
          selected={config.caseMaterial === option.id}
          onClick={() => setCaseMaterial(option.id as CaseMaterial)}
        />
      ))}
    </div>
  );
}

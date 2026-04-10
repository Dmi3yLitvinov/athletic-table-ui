import { CATEGORY_COLORS } from '../data';
import type { Exercise } from '../types';

interface Props {
  exercise: Exercise;
  hasRecords: boolean;
  latestRecord?: string;
  onClick: () => void;
}

export function ElementCell({ exercise, hasRecords, latestRecord, onClick }: Props) {
  const color = CATEGORY_COLORS[exercise.category];

  return (
    <button
      className={`element-cell ${hasRecords ? 'active' : ''}`}
      style={{
        gridRow: exercise.row + 1,
        gridColumn: exercise.col + 1,
        '--cat-color': color,
        '--cat-color-dim': `${color}66`,
        '--cat-color-glow': `${color}40`,
        '--cat-color-bg': `${color}18`,
      } as React.CSSProperties}
      onClick={onClick}
      title={`${exercise.name} — ${exercise.subcategory}`}
    >
      <span className="element-number">{exercise.number}</span>
      <span className="element-symbol">{exercise.symbol}</span>
      <span className="element-name">{exercise.name}</span>
      {latestRecord && (
        <span className="element-record">
          {latestRecord} {exercise.unit === 'кг' ? 'кг' : ''}
        </span>
      )}
    </button>
  );
}

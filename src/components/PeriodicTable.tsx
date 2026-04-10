import { EXERCISES, GRID_COLS, GRID_ROWS } from '../data';
import type { Exercise, UserData } from '../types';
import { ElementCell } from './ElementCell';

interface Props {
  data: UserData;
  onSelect: (exercise: Exercise) => void;
}

function getLatestRecordValue(data: UserData, exerciseId: string): string | undefined {
  const records = data[exerciseId];
  if (!records || records.length === 0) return undefined;
  const sorted = [...records].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return sorted[0].value;
}

export function PeriodicTable({ data, onSelect }: Props) {
  return (
    <div className="periodic-table-wrapper">
      <div
        className="periodic-table"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, auto)`,
        }}
      >
        {EXERCISES.map((exercise) => (
          <ElementCell
            key={exercise.id}
            exercise={exercise}
            hasRecords={!!data[exercise.id]?.length}
            latestRecord={getLatestRecordValue(data, exercise.id)}
            onClick={() => onSelect(exercise)}
          />
        ))}
      </div>
    </div>
  );
}

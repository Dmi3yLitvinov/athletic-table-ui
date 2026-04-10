import { useState } from 'react';
import './App.css';
import { ElementModal } from './components/ElementModal';
import { Legend } from './components/Legend';
import { PeriodicTable } from './components/PeriodicTable';
import { loadData, saveData } from './storage';
import type { Exercise, ExerciseRecord, UserData } from './types';

function App() {
  const [data, setData] = useState<UserData>(() => loadData());
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  function handleSave(exerciseId: string, records: ExerciseRecord[]) {
    const next = { ...data, [exerciseId]: records };
    setData(next);
    saveData(next);
  }

  const activeCount = Object.values(data).filter((r) => r.length > 0).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Таблица Атлета</h1>
        <p className="app-subtitle">Периодическая таблица спортивных достижений</p>
        {activeCount > 0 && (
          <p className="app-stats">
            Открыто элементов: <strong>{activeCount}</strong> / 38
          </p>
        )}
      </header>

      <Legend />
      <PeriodicTable data={data} onSelect={setSelectedExercise} />

      {selectedExercise && (
        <ElementModal
          exercise={selectedExercise}
          records={data[selectedExercise.id] || []}
          onSave={(records) => handleSave(selectedExercise.id, records)}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}

export default App;

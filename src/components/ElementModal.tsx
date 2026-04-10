import { useState } from 'react';
import { CATEGORY_COLORS, CATEGORY_NAMES } from '../data';
import type { Exercise, ExerciseRecord } from '../types';

interface Props {
  exercise: Exercise;
  records: ExerciseRecord[];
  onSave: (records: ExerciseRecord[]) => void;
  onClose: () => void;
}

const RECORD_TYPE_LABELS: Record<string, string> = {
  time: 'Время',
  weight: 'Вес',
  reps: 'Повторения',
  hold: 'Удержание',
};

const PLACEHOLDER_MAP: Record<string, string> = {
  time: '5:32 или 1:45:30',
  weight: '100',
  reps: '25',
  hold: '30',
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function ElementModal({ exercise, records, onSave, onClose }: Props) {
  const color = CATEGORY_COLORS[exercise.category];
  const today = new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState(today);
  const [value, setValue] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [notes, setNotes] = useState('');

  const sortedRecords = [...records].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;

    const newRecord: ExerciseRecord = {
      id: Date.now().toString(),
      date,
      value: value.trim(),
      ...(mediaUrl.trim() && { mediaUrl: mediaUrl.trim() }),
      ...(notes.trim() && { notes: notes.trim() }),
    };
    onSave([...records, newRecord]);
    setValue('');
    setMediaUrl('');
    setNotes('');
  }

  function handleDelete(recordId: string) {
    onSave(records.filter((r) => r.id !== recordId));
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" style={{ '--cat-color': color } as React.CSSProperties}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-element-card" style={{ borderColor: color, background: `${color}20` }}>
            <span className="modal-element-number">{exercise.number}</span>
            <span className="modal-element-symbol">{exercise.symbol}</span>
          </div>
          <div className="modal-element-info">
            <h2>{exercise.name}</h2>
            <p>
              <span className="modal-badge" style={{ backgroundColor: `${color}30`, color }}>
                {CATEGORY_NAMES[exercise.category]}
              </span>
              <span className="modal-subcategory">{exercise.subcategory}</span>
            </p>
            <p className="modal-record-type">
              {RECORD_TYPE_LABELS[exercise.recordType]}: {exercise.unit}
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Add form */}
        <form className="modal-form" onSubmit={handleAdd}>
          <h3>Новый рекорд</h3>
          <div className="form-grid">
            <label>
              <span>Дата</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Результат ({exercise.unit})</span>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={PLACEHOLDER_MAP[exercise.recordType]}
                required
              />
            </label>
            <label className="full-width">
              <span>Ссылка на медиа (необязательно)</span>
              <input
                type="url"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                placeholder="https://..."
              />
            </label>
            <label className="full-width">
              <span>Заметки (необязательно)</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Ощущения, условия, комментарий..."
              />
            </label>
          </div>
          <button type="submit" className="btn-add" style={{ backgroundColor: color }}>
            Добавить
          </button>
        </form>

        {/* History */}
        {sortedRecords.length > 0 && (
          <div className="modal-history">
            <h3>История ({sortedRecords.length})</h3>
            <div className="history-list">
              {sortedRecords.map((rec) => (
                <div key={rec.id} className="history-card">
                  <div className="history-card-main">
                    <span className="history-date">{formatDate(rec.date)}</span>
                    <span className="history-value" style={{ color }}>
                      {rec.value} {exercise.unit}
                    </span>
                  </div>
                  {rec.mediaUrl && (
                    <a
                      className="history-media"
                      href={rec.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Медиа
                    </a>
                  )}
                  {rec.notes && <p className="history-notes">{rec.notes}</p>}
                  <button
                    className="history-delete"
                    onClick={() => handleDelete(rec.id)}
                    title="Удалить запись"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

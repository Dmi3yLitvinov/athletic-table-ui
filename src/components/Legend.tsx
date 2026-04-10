import { CATEGORY_COLORS, CATEGORY_NAMES } from '../data';
import type { Category } from '../types';

const CATEGORIES = Object.keys(CATEGORY_NAMES) as Category[];

export function Legend() {
  return (
    <div className="legend">
      {CATEGORIES.map((cat) => (
        <div key={cat} className="legend-item">
          <span
            className="legend-dot"
            style={{ backgroundColor: CATEGORY_COLORS[cat] }}
          />
          <span className="legend-label">{CATEGORY_NAMES[cat]}</span>
        </div>
      ))}
    </div>
  );
}

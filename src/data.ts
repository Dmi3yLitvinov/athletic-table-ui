import type { Category, Exercise } from './types';

/**
 * 7 cols × 7 rows — periodic-table silhouette, gap in the middle.
 *
 * R0: [Пл1][Пл4]  .   .    .    .   [П15]
 * R1: [Б1] [Б5] [Б10] .    .   [Пм] [Мф]
 * R2: [Гб5][Г1к][Г2к]  .   .   [Г3к][Г5к]
 * R3: [Пдт][Бру][Вх2]  .   .   [Флж][ПВс]
 * R4: [Угл][Ляг][Крк]  .  [СнР][ОнР][Грз]
 * R5: [Прс][Жлж][Стн][Рвк][Тлч][ПдВ][БрВ]
 * R6: [Cin][Mry][Frn][Mrp][Ang][Grc][Din]
 */

export const GRID_COLS = 7;
export const GRID_ROWS = 7;

export const EXERCISES: Exercise[] = [
  // ── Плавание ──
  { id: 'swim-100',     number: 1,  symbol: 'Пл1', name: 'Плавание 100 м',     category: 'swimming', subcategory: 'Плавание', row: 0, col: 0, recordType: 'time', unit: 'мин:сек' },
  { id: 'swim-400',     number: 2,  symbol: 'Пл4', name: 'Плавание 400 м',     category: 'swimming', subcategory: 'Плавание', row: 0, col: 1, recordType: 'time', unit: 'мин:сек' },
  { id: 'swim-1500',    number: 3,  symbol: 'П15', name: 'Плавание 1500 м',    category: 'swimming', subcategory: 'Плавание', row: 0, col: 6, recordType: 'time', unit: 'мин:сек' },

  // ── Бег ──
  { id: 'run-1km',      number: 4,  symbol: 'Б1',  name: 'Бег 1 км',           category: 'running',  subcategory: 'Бег', row: 1, col: 0, recordType: 'time', unit: 'мин:сек' },
  { id: 'run-5km',      number: 5,  symbol: 'Б5',  name: 'Бег 5 км',           category: 'running',  subcategory: 'Бег', row: 1, col: 1, recordType: 'time', unit: 'мин:сек' },
  { id: 'run-10km',     number: 6,  symbol: 'Б10', name: 'Бег 10 км',          category: 'running',  subcategory: 'Бег', row: 1, col: 2, recordType: 'time', unit: 'мин:сек' },
  { id: 'run-hm',       number: 7,  symbol: 'Пм',  name: 'Полумарафон',        category: 'running',  subcategory: 'Бег', row: 1, col: 5, recordType: 'time', unit: 'чч:мм:сс' },
  { id: 'run-marathon',  number: 8,  symbol: 'Мф',  name: 'Марафон',            category: 'running',  subcategory: 'Бег', row: 1, col: 6, recordType: 'time', unit: 'чч:мм:сс' },

  // ── Гребля (Concept 2) ──
  { id: 'row-500',      number: 9,  symbol: 'Гб5', name: 'Гребля 500 м',       category: 'rowing', subcategory: 'Гребля', row: 2, col: 0, recordType: 'time', unit: 'мин:сек' },
  { id: 'row-1000',     number: 10, symbol: 'Г1к', name: 'Гребля 1000 м',      category: 'rowing', subcategory: 'Гребля', row: 2, col: 1, recordType: 'time', unit: 'мин:сек' },
  { id: 'row-2000',     number: 11, symbol: 'Г2к', name: 'Гребля 2000 м',      category: 'rowing', subcategory: 'Гребля', row: 2, col: 2, recordType: 'time', unit: 'мин:сек' },
  { id: 'row-3000',     number: 12, symbol: 'Г3к', name: 'Гребля 3000 м',      category: 'rowing', subcategory: 'Гребля', row: 2, col: 5, recordType: 'time', unit: 'мин:сек' },
  { id: 'row-5000',     number: 13, symbol: 'Г5к', name: 'Гребля 5000 м',      category: 'rowing', subcategory: 'Гребля', row: 2, col: 6, recordType: 'time', unit: 'мин:сек' },

  // ── Стритворкаут ──
  { id: 'sw-pullup',    number: 14, symbol: 'Пдт', name: 'Подтягивания',       category: 'street-workout', subcategory: 'Стритворкаут', row: 3, col: 0, recordType: 'reps', unit: 'повторений' },
  { id: 'sw-dips',      number: 15, symbol: 'Бру', name: 'Брусья',             category: 'street-workout', subcategory: 'Стритворкаут', row: 3, col: 1, recordType: 'reps', unit: 'повторений' },
  { id: 'sw-muscleup',  number: 16, symbol: 'Вх2', name: 'Выход на две',       category: 'street-workout', subcategory: 'Стритворкаут', row: 3, col: 2, recordType: 'reps', unit: 'повторений' },
  { id: 'sw-flag',      number: 17, symbol: 'Флж', name: 'Флажок',             category: 'street-workout', subcategory: 'Стритворкаут', row: 3, col: 5, recordType: 'hold', unit: 'секунд' },
  { id: 'sw-frontlever',number: 18, symbol: 'ПВс', name: 'Передний вис',       category: 'street-workout', subcategory: 'Стритворкаут', row: 3, col: 6, recordType: 'hold', unit: 'секунд' },

  // ── Гимнастика (difficulty → right, Горизонт = rightmost) ──
  { id: 'gym-lsit',     number: 19, symbol: 'Угл', name: 'Уголок',             category: 'gymnastics', subcategory: 'Гимнастика', row: 4, col: 0, recordType: 'hold', unit: 'секунд' },
  { id: 'gym-frog',     number: 20, symbol: 'Ляг', name: 'Лягушка',            category: 'gymnastics', subcategory: 'Гимнастика', row: 4, col: 1, recordType: 'hold', unit: 'секунд' },
  { id: 'gym-crocodile',number: 21, symbol: 'Крк', name: 'Крокодил',           category: 'gymnastics', subcategory: 'Гимнастика', row: 4, col: 2, recordType: 'hold', unit: 'секунд' },
  { id: 'gym-handstand',number: 22, symbol: 'СнР', name: 'Стойка на руках',    category: 'gymnastics', subcategory: 'Гимнастика', row: 4, col: 4, recordType: 'hold', unit: 'секунд' },
  { id: 'gym-hspu',     number: 23, symbol: 'ОнР', name: 'Отжимания на руках', category: 'gymnastics', subcategory: 'Гимнастика', row: 4, col: 5, recordType: 'reps', unit: 'повторений' },
  { id: 'gym-planche',  number: 24, symbol: 'Грз', name: 'Горизонт',           category: 'gymnastics', subcategory: 'Гимнастика', row: 4, col: 6, recordType: 'hold', unit: 'секунд' },

  // ── Пауэрлифтинг ──
  { id: 'pl-squat',     number: 25, symbol: 'Прс', name: 'Приседание',         category: 'powerlifting',  subcategory: 'Пауэрлифтинг', row: 5, col: 0, recordType: 'weight', unit: 'кг' },
  { id: 'pl-bench',     number: 26, symbol: 'Жлж', name: 'Жим лёжа',          category: 'powerlifting',  subcategory: 'Пауэрлифтинг', row: 5, col: 1, recordType: 'weight', unit: 'кг' },
  { id: 'pl-deadlift',  number: 27, symbol: 'Стн', name: 'Становая тяга',     category: 'powerlifting',  subcategory: 'Пауэрлифтинг', row: 5, col: 2, recordType: 'weight', unit: 'кг' },

  // ── Тяжелая атлетика ──
  { id: 'wl-snatch',    number: 28, symbol: 'Рвк', name: 'Рывок',             category: 'weightlifting', subcategory: 'Тяжёлая атлетика', row: 5, col: 3, recordType: 'weight', unit: 'кг' },
  { id: 'wl-cleanjerk', number: 29, symbol: 'Тлч', name: 'Толчок',            category: 'weightlifting', subcategory: 'Тяжёлая атлетика', row: 5, col: 4, recordType: 'weight', unit: 'кг' },

  // ── Стритлифтинг ──
  { id: 'sl-wpullup',   number: 30, symbol: 'ПдВ', name: 'Подтяг. с весом',   category: 'streetlifting', subcategory: 'Стритлифтинг', row: 5, col: 5, recordType: 'weight', unit: 'кг' },
  { id: 'sl-wdips',     number: 31, symbol: 'БрВ', name: 'Брусья с весом',    category: 'streetlifting', subcategory: 'Стритлифтинг', row: 5, col: 6, recordType: 'weight', unit: 'кг' },

  // ── Метконы ──
  { id: 'met-cindy',    number: 32, symbol: 'Cin', name: 'Cindy',              category: 'metcon', subcategory: 'Метконы', row: 6, col: 0, recordType: 'reps', unit: 'раундов' },
  { id: 'met-mary',     number: 33, symbol: 'Mry', name: 'Mary',               category: 'metcon', subcategory: 'Метконы', row: 6, col: 1, recordType: 'reps', unit: 'раундов' },
  { id: 'met-fran',     number: 34, symbol: 'Frn', name: 'Fran',               category: 'metcon', subcategory: 'Метконы', row: 6, col: 2, recordType: 'time', unit: 'мин:сек' },
  { id: 'met-murph',    number: 35, symbol: 'Mrp', name: 'Murph',              category: 'metcon', subcategory: 'Метконы', row: 6, col: 3, recordType: 'time', unit: 'мин:сек' },
  { id: 'met-angie',    number: 36, symbol: 'Ang', name: 'Angie',              category: 'metcon', subcategory: 'Метконы', row: 6, col: 4, recordType: 'time', unit: 'мин:сек' },
  { id: 'met-grace',    number: 37, symbol: 'Grc', name: 'Grace',              category: 'metcon', subcategory: 'Метконы', row: 6, col: 5, recordType: 'time', unit: 'мин:сек' },
  { id: 'met-diane',    number: 38, symbol: 'Din', name: 'Diane',              category: 'metcon', subcategory: 'Метконы', row: 6, col: 6, recordType: 'time', unit: 'мин:сек' },
];

export const CATEGORY_COLORS: Record<Category, string> = {
  'running':        '#4361ee',
  'swimming':       '#4cc9f0',
  'rowing':         '#3a86a4',
  'street-workout': '#f72585',
  'gymnastics':     '#b5179e',
  'powerlifting':   '#ef233c',
  'weightlifting':  '#ff6b35',
  'streetlifting':  '#fb8500',
  'metcon':         '#06d6a0',
};

export const CATEGORY_NAMES: Record<Category, string> = {
  'running':        'Бег',
  'swimming':       'Плавание',
  'rowing':         'Гребля',
  'street-workout': 'Стритворкаут',
  'gymnastics':     'Гимнастика',
  'powerlifting':   'Пауэрлифтинг',
  'weightlifting':  'Тяжёлая атлетика',
  'streetlifting':  'Стритлифтинг',
  'metcon':         'Метконы',
};

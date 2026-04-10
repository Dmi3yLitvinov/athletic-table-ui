export type Category =
  | 'running'
  | 'swimming'
  | 'rowing'
  | 'street-workout'
  | 'gymnastics'
  | 'powerlifting'
  | 'weightlifting'
  | 'streetlifting'
  | 'metcon';

export type RecordType = 'time' | 'weight' | 'reps' | 'hold';

export interface Exercise {
  id: string;
  number: number;
  symbol: string;
  name: string;
  category: Category;
  subcategory: string;
  row: number;
  col: number;
  recordType: RecordType;
  unit: string;
}

export interface ExerciseRecord {
  id: string;
  date: string;
  value: string;
  mediaUrl?: string;
  notes?: string;
}

export type UserData = Record<string, ExerciseRecord[]>;

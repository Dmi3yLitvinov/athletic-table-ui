import type { UserData } from './types';

const STORAGE_KEY = 'athletic-table-data';

export function loadData(): UserData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveData(data: UserData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

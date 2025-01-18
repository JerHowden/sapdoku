import { Combo, Run } from '@/db';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isoDateKey(date: Date) {
  const dateParts = date
    .toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    })
    .split('/');
  return Number(`${dateParts[2]}${dateParts[0]}${dateParts[1]}`);
}

export const DEFAULT_RUN: Run = {
  guesses: {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
  },
  time: 0,
  complete: false,
  hearts: 5,
};

export const useReqsMap = (combo: Combo) => ({
  1: [combo?.rows[0], combo?.columns[0]],
  2: [combo?.rows[0], combo?.columns[1]],
  3: [combo?.rows[0], combo?.columns[2]],
  4: [combo?.rows[1], combo?.columns[0]],
  5: [combo?.rows[1], combo?.columns[1]],
  6: [combo?.rows[1], combo?.columns[2]],
  7: [combo?.rows[2], combo?.columns[0]],
  8: [combo?.rows[2], combo?.columns[1]],
  9: [combo?.rows[2], combo?.columns[2]],
});

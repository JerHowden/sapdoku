import { Combo, REQUIREMENT_LIST_GENERIC, REQUIREMENT_LIST_SPECIFIC } from '@/db';
import { useState, useEffect } from 'react';

export const useComboSeed = (seed: number) => {
  const [combo, setCombo] = useState<Combo | null>(null);
  const ROW_NUM = REQUIREMENT_LIST_SPECIFIC.length;
  const COL_NUM = REQUIREMENT_LIST_GENERIC.length;

  useEffect(() => {
    const randomNumbersGenerator = () => {
      let currentSeed = seed;

      const random = () => {
        const x = Math.sin((currentSeed += 0.1)) * 10000;
        return x - Math.floor(x);
      };

      const randomInt = (min: number, max: number) => {
        return Math.floor(random() * (max - min + 1)) + min;
      };

      const generateCombo = (): Combo => {
        const rows = [randomInt(0, ROW_NUM), randomInt(0, ROW_NUM), randomInt(0, ROW_NUM)].sort(
          (a, b) => a - b
        );
        const cols = [randomInt(0, COL_NUM), randomInt(0, COL_NUM), randomInt(0, COL_NUM)].sort(
          (a, b) => a - b
        );
        return {
          rows: rows.map((reqIndex) => REQUIREMENT_LIST_SPECIFIC[reqIndex]),
          columns: cols.map((reqIndex) => REQUIREMENT_LIST_SPECIFIC[reqIndex]),
        } as Combo;
      };

      return generateCombo();
    };

    setCombo(randomNumbersGenerator());
  }, [COL_NUM, ROW_NUM, seed]);

  return combo;
};

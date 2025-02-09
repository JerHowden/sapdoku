import { Combo, DEFAULT_COMBO, REQUIREMENT_LIST_GENERIC, REQUIREMENT_LIST_SPECIFIC } from '@/db';
import { useState, useEffect } from 'react';

export const useComboSeed = (seed: number) => {
  const [combo, setCombo] = useState<Combo>(DEFAULT_COMBO);
  const ROW_NUM = REQUIREMENT_LIST_SPECIFIC.length;
  const COL_NUM = REQUIREMENT_LIST_GENERIC.length;

  useEffect(() => {
    const randomNumbersGenerator = () => {
      let currentSeed = seed;

      const random = () => {
        const x = Math.sin((currentSeed += 100000)) * 10000;
        // console.log(x - Math.floor(x));
        return x - Math.floor(x);
      };

      function generateUniqueNumbers(min: number, max: number) {
        const numbers = new Set<number>();
        while (numbers.size < 3) {
          const rand = Math.floor(random() * (max - min)) + min;
          numbers.add(rand);
          seed++;
        }
        return Array.from(numbers);
      }

      const generateCombo = (): Combo => {
        const rows = generateUniqueNumbers(0, ROW_NUM).sort((a, b) => a - b);
        const cols = generateUniqueNumbers(0, COL_NUM).sort((a, b) => a - b);
        return {
          rows: rows.map((reqIndex) => REQUIREMENT_LIST_SPECIFIC[reqIndex]),
          columns: cols.map((reqIndex) => REQUIREMENT_LIST_GENERIC[reqIndex]),
        } as Combo;
      };

      return generateCombo();
    };

    setCombo(randomNumbersGenerator());
  }, [COL_NUM, ROW_NUM, seed]);

  return combo;
};

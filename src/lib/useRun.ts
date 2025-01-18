import { SapdokuContext } from '@/app/providers';
import { useContext, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { isoDateKey, DEFAULT_RUN } from './utils';

export const useRun = () => {
  const { date } = useContext(SapdokuContext);
  const [run, setRun] = useLocalStorage(isoDateKey(date), DEFAULT_RUN);

  const runStarted = useMemo(
    () => Object.values(run.guesses).some((guess) => !!guess),
    [run.guesses]
  );

  return { run, setRun, runStarted };
};

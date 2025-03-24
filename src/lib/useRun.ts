import { Gamemode } from '@/db';
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { DEFAULT_CLASSIC_RUN, isoDateKey, isoDateString } from './utils';

export const useRun = (date: Date, gamemode: Gamemode) => {
  const gamemodeID = gamemode === 'reverse' ? 'R' : 'C';
  const runKey = `${gamemodeID}-${isoDateKey(date)}`;
  const defaultRun = useMemo(
    () => ({
      ...DEFAULT_CLASSIC_RUN,
      date: isoDateString(date),
    }),
    [date]
  );
  const [run, setRun] = useLocalStorage(runKey, defaultRun);

  // TODO: this will change with reverse gamemode
  const runStarted = useMemo(
    () => Object.values(run.guesses).some((guess) => !!guess),
    [run.guesses]
  );

  return { run, setRun, runStarted };
};

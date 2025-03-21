import { Gamemode } from '@/db';
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { DEFAULT_CLASSIC_RUN, isoDateKey } from './utils';

export const useRun = (date: Date, gamemode: Gamemode) => {
  const gamemodeID = gamemode === 'reverse' ? 'R' : 'C';
  const [run, setRun] = useLocalStorage(`${gamemodeID}-${isoDateKey(date)}`, DEFAULT_CLASSIC_RUN);

  // TODO: this will change with reverse gamemode
  const runStarted = useMemo(
    () => Object.values(run.guesses).some((guess) => !!guess),
    [run.guesses]
  );

  return { run, setRun, runStarted };
};

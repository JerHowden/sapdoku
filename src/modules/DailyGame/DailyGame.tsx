'use client';

import { Box, ClassicRun, Pet } from '@/db';
import {
  getCompletionType,
  isoDateKey,
  isoDateString,
  useComboSeed,
  useReqsMap,
  useRun,
} from '@/lib';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GuessingGrid } from '../GuessingGrid';
import { ChangeDate } from './ChangeDate';
import { CompletionMessage } from './CompletionMessage';
import { GameTimer } from './GameTimer';
import { Hearts } from './Hearts';

type DailyGameProps = {
  date: Date;
  gamemode: 'classic' | 'reverse';
};

export function DailyGame({ date, gamemode }: DailyGameProps) {
  const { run, setRun, runStarted } = useRun(date, gamemode);
  const combo = useComboSeed(isoDateKey(date));
  const reqsMap = useReqsMap(combo);

  const [seconds, setSeconds] = useState(run.time);

  useEffect(() => {
    setSeconds(run.time);
    // return () => setRun({ ...run, time: seconds });
  }, [run.time]);

  const gameTitle = useMemo(() => {
    const today = new Date();
    const isoToday = isoDateKey(today);
    if (isoDateKey(date) === isoToday) {
      return "Today's Game";
    }
    const weekAgo = new Date(today.getTime() - 60 * 60 * 24 * 7 * 1000);
    if (date > weekAgo) {
      return `${date.toLocaleDateString('default', {
        weekday: 'long',
      })}'s Game`;
    }
    return `Game for ${date.toLocaleDateString('default', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })}`;
  }, [date]);

  const makeGuess = useCallback(
    (pet: Pet, box: Box) => {
      const updatedRun: ClassicRun = run;
      if (!updatedRun.date) updatedRun.date = isoDateString(date);
      updatedRun.guesses = {
        ...run.guesses,
        [box]: pet,
      };
      if (reqsMap[box].some((req) => !req.logic(pet))) {
        updatedRun.hearts = run.hearts - 1;
        if (updatedRun.hearts <= 0) {
          updatedRun.complete = true;
        }
      }
      if (Object.values(updatedRun.guesses).filter((guess) => !!guess).length === 9) {
        updatedRun.complete = true;
      }
      updatedRun.time = seconds;
      setRun(updatedRun);
    },
    [date, reqsMap, run, seconds, setRun]
  );

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-9 md:gap-12 items-center">
      <div className="flex flex-row gap-4">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {gameTitle}
        </h1>
        <ChangeDate date={date} />
      </div>
      <GuessingGrid
        run={run}
        combo={combo}
        makeGuess={makeGuess}
      />
      <Hearts
        lives={run.hearts}
        maxLives={5}
      />
      {run.complete ? <CompletionMessage type={getCompletionType(run, seconds)} /> : null}
      <GameTimer
        seconds={seconds}
        setSeconds={setSeconds}
        tick={runStarted && !run.complete}
      />
    </div>
  );
}

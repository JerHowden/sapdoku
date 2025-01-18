'use client';

import { SapdokuContext } from '@/app/providers';
import { Box, COMBO_MAP, Pet, Run } from '@/db';
import { isoDateKey, useReqsMap, useRun } from '@/lib';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { GuessingGrid } from '../GuessingGrid';
import { GameTimer } from './GameTimer';
import { Hearts } from './Hearts';
import { CompletionMessage } from './CompletionMessage';

export function DailyGame() {
  const { date } = useContext(SapdokuContext);
  const { run, setRun, runStarted } = useRun();
  const reqsMap = useReqsMap(COMBO_MAP[isoDateKey(date)]);

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
      const updatedRun: Run = run;
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
    [reqsMap, run, seconds, setRun]
  );

  const completionType = useMemo(() => {
    if (!run.complete) return undefined;
    if (!run.hearts) return 'loss';
    if (run.hearts < 5) return 'win';
    if (seconds >= 60) return 'perfect';
    return 'under-minute-gang';
  }, [run.complete, run.hearts, seconds]);

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-9 md:gap-12 items-center">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {gameTitle}
      </h1>
      <GuessingGrid
        combo={COMBO_MAP[isoDateKey(date)]}
        makeGuess={makeGuess}
      />
      <Hearts />
      {run.complete ? <CompletionMessage type={completionType} /> : null}
      <GameTimer
        seconds={seconds}
        setSeconds={setSeconds}
        tick={runStarted && !run.complete}
      />
    </div>
  );
}

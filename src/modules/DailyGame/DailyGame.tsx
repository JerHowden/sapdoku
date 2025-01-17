'use client';

import { SapdokuContext } from '@/app/providers';
import { COMBO_MAP } from '@/db';
import { useContext, useMemo } from 'react';
import { GuessingGrid } from '../GuessingGrid';
import { GameTimer } from './GameTimer';
import { Hearts } from './Hearts';

export function DailyGame() {
  const { date } = useContext(SapdokuContext);

  const dateCombo = useMemo(() => {
    const dateParts = date
      .toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })
      .split('/');
    console.log('dateParts:', dateParts);
    const dateKey = Number(`${dateParts[2]}${dateParts[0]}${dateParts[1]}`);
    console.log('dateKey:', dateKey);
    const combo = COMBO_MAP[dateKey];
    return combo ?? undefined;
  }, [date]);

  return (
    <div className="w-full flex flex-col gap-12 items-center">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {"Today's Game"}
      </h1>
      <GuessingGrid combo={dateCombo} />
      <Hearts />
      <GameTimer />
    </div>
  );
}

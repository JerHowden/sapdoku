'use client';

import { useCallback, useEffect, useState } from 'react';

export function TimeToNextGame() {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const difference = tomorrow.getTime() - now.getTime();
    setTimeLeft(Math.floor(difference / 1000));

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const display = useCallback(() => {
    if (timeLeft <= 0) return '00:00:00';
    const hours = String(Math.floor(timeLeft / (60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft / 60) % 60)).padStart(2, '0');
    const seconds = String(Math.floor(timeLeft % 60)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }, [timeLeft]);

  return (
    <p className="flex flex-row gap-x-1 text-base md:text-lg font-lapsus text-muted-foreground">
      <span>Next Game in </span>
      <span className="text-foreground">{display()}</span>
    </p>
  );
}

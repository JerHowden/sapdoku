import { Dispatch, SetStateAction, useEffect } from 'react';

type GameTimerProps = {
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
  tick: boolean;
};

export function GameTimer({ seconds, setSeconds, tick }: GameTimerProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (tick) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setSeconds, tick]);

  return (
    <div
      className={`text-xl sm:text-2xl md:text-3xl
        font-extrabold
        tracking-wide
        ${!tick ? 'text-gray-500' : ''}`}
    >
      {`${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? 0 : ''}${seconds % 60}`}
    </div>
  );
}

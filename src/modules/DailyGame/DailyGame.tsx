import { ReactNode } from 'react';

type DailyGameProps = {
  children: ReactNode;
};

export function DailyGame({ children }: DailyGameProps) {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {"Today's Game"}
      </h1>
      {children}
    </div>
  );
}

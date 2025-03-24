import { Completion, IMAGE_SRCS } from '@/db';
import Image from 'next/image';
import { useMemo } from 'react';

type CompletionMessageProps = {
  type?: Completion;
};

export function CompletionMessage({ type }: CompletionMessageProps) {
  const message = useMemo(() => {
    switch (type) {
      case 'win':
        return 'You Won! :)';
      case 'loss':
        return 'You Lost :(';
      case 'perfect':
        return 'PERFECT';
      case 'gridbomb':
        return (
          <div className="flex flex-row items-center gap-2">
            <Image
              src={IMAGE_SRCS.trophy}
              width={48}
              height={48}
              alt=""
              className="rotate-180"
            />
            <span className="text-xl sm:text-2xl md:text-3xl italic">GRIDBOMB</span>
            <Image
              src={IMAGE_SRCS.trophy}
              width={48}
              height={48}
              alt=""
              className="rotate-180"
            />
          </div>
        );
      default:
        return '???';
    }
  }, [type]);

  const styles = useMemo(() => {
    switch (type) {
      case 'loss':
        return 'bg-red-500 font-semibold';
      case 'win':
        return 'bg-green-500 font-bold';
      case 'perfect':
        return 'bg-blue-500 font-extrabold';
      case 'gridbomb':
        return 'bg-purple-500 font-black';
      default:
        return 'bg-gray-500 font-semibold';
    }
  }, [type]);

  return (
    <div
      className={`flex text-xl sm:text-2xl md:text-3xl text-foreground justify-center rounded-md px-2 pt-2 pb-3 ${styles}`}
    >
      {message}
    </div>
  );
}

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
        return 'You Won!';
      case 'loss':
        return 'You Lost :(';
      case 'perfect':
        return 'Perfect!!';
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
            <p className="text-xl sm:text-2xl md:text-3xl italic">GRIDBOMB</p>
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
        return '';
    }
  }, [type]);

  const styles = useMemo(() => {
    switch (type) {
      case 'loss':
        return 'text-red-500 font-semibold';
      case 'win':
        return 'text-green-500 font-bold';
      case 'perfect':
        return 'text-blue-500 font-extrabold';
      case 'gridbomb':
        return 'text-purple-500 font-black';
      default:
        return 'text-gray-500';
    }
  }, [type]);

  return <div className={`text-xl sm:text-2xl md:text-3xl ${styles}`}>{message}</div>;
}

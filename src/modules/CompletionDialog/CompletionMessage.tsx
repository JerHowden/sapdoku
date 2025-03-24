import { Badge } from '@/components/ui/badge';
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
              width={16}
              height={16}
              alt=""
              className="rotate-180"
            />
            <span className="text-xs md:text-base italic leading-none">GRIDBOMB</span>
            <Image
              src={IMAGE_SRCS.trophy}
              width={16}
              height={16}
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
    <Badge
      className={`flex text-xs md:text-base text-foreground !m-0 pointer-events-none pb-1 ${styles}`}
    >
      {message}
    </Badge>
  );
}

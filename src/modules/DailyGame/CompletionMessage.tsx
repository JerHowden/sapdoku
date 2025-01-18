import { useMemo } from 'react';

type CompletionMessageProps = {
  type?: 'win' | 'loss' | 'perfect' | 'ultra-perfect';
};

export function CompletionMessage({ type }: CompletionMessageProps) {
  const message = useMemo(() => {
    switch (type) {
      case 'win':
        return 'You Won!';
      case 'loss':
        return 'You Lost :(';
      case 'perfect':
        return 'Perfect Win!';
      case 'ultra-perfect':
        return 'ULTRA PERFECT WIN!!';
      default:
        return "Completed? I don't think so";
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
      case 'ultra-perfect':
        return 'text-purple-500 font-black';
      default:
        return 'text-gray-500';
    }
  }, [type]);

  return <p className={`text-3xl ${styles}`}>{message}</p>;
}

import Image from 'next/image';

type HeartsProps = {
  lives: number;
  maxLives: number;
};

export function Hearts({ lives, maxLives }: HeartsProps) {
  return (
    <div className="flex flex-row gap-4">
      {[...Array(maxLives)].map((_, index) => (
        <Image
          key={index}
          src={index < lives ? '/images/heart.png' : '/images/heart-broken.png'}
          alt={index < lives ? 'Heart' : ''}
          width="48"
          height="48"
          className="w-6 sm:w-9 md:w-12 h-auto"
        />
      ))}
    </div>
  );
}

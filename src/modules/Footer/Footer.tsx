'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="mx-auto flex flex-col gap-3 max-w-7xl items-center justify-center p-6 lg:px-8">
      <div className="flex flex-row gap-2">
        <Button
          className="hover:bg-[#181717]"
          onClick={() => window.open('https://github.com/JerHowden/sapdoku', '_blank')}
          title="GitHub ↗"
          variant="logo"
          size="icon"
        >
          <Image
            src="logos/github.svg"
            alt="github"
            width={24}
            height={24}
            className="group-hover:invert"
          />
        </Button>
        <Button
          className="hover:bg-[#FF4500]"
          onClick={() => window.open('https://reddit.com/r/sapdoku', '_blank')}
          title="Reddit ↗"
          variant="logo"
          size="icon"
        >
          <Image
            src="logos/reddit3.svg"
            alt="github"
            width={24}
            height={24}
            className="group-hover:invert"
          />
        </Button>
        <Button
          className="hover:bg-[#FFDD00]"
          onClick={() => window.open('https://buymeacoffee.com/sapdoku', '_blank')}
          title="Buy me a Coffee ↗"
          variant="logo"
          size="icon"
        >
          <Image
            src="logos/buymeacoffee.svg"
            alt="buymeacoffee"
            width={24}
            height={24}
            className="group-hover:invert"
          />
        </Button>
      </div>
      <p className="text-muted text-sm text-center">
        {`Not affiliated with the official Super Auto Pets game or Team Wood Games.`}
      </p>
    </footer>
  );
}

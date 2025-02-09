import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { IMAGE_SRCS } from '@/db';
import { CircleHelp } from 'lucide-react';
import Image from 'next/image';

export function IntroDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title="Learn how to play Sapdoku!"
        >
          <span className="sr-only">How to Play</span>
          <CircleHelp />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to Play Sapdoku</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-1">
              <h5 className="scroll-m-20 text-md font-semibold tracking-tight">The Game</h5>
              <ul className="list-disc px-4">
                <li>Fill in the entire grid with the appropriate pets.</li>
                <li>Each row and column have a category that restricts what pets are valid.</li>
                <li>
                  Some categories are a combination of different attributes. Hover over it to see
                  what is included.
                </li>
                <li>
                  You can start a guess for a grid cell by clicking on it. Search for the pet you
                  want and click to select it.
                </li>
                <li>
                  {'Do not make too many wrong guesses and run out of hearts or you will lose :('}
                </li>
              </ul>
            </div>
            <Image
              src={IMAGE_SRCS.mascotShark}
              width="256"
              height="256"
              quality={100}
              className="flex w-[128px] h-[128px]"
              alt=""
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={IMAGE_SRCS.mascotBee}
              width="256"
              height="256"
              quality={100}
              className="flex w-[128px] h-[128px] -scale-x-100"
              alt=""
            />
            <div className="flex-1">
              <h5 className="scroll-m-20 text-md font-semibold tracking-tight">Pets</h5>
              <ul className="list-disc px-4">
                <li>
                  Pets have many different attributes including pack, tier, trigger, attack, health,
                  and tags.
                </li>
                <li>You can learn more about each pet on the pets page.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex-1">
              <h5 className="scroll-m-20 text-md font-semibold tracking-tight">More Info</h5>
              <ul className="list-disc px-4">
                <li>
                  New puzzles show up daily at midnight <span className="italic">your</span> time.
                </li>
                <li>
                  This is a fan project not affiliated with the official Super Auto Pets game or
                  Teamwood Games.
                </li>
                <li>
                  The game is open source and you can find it on GitHub{' '}
                  <a href="https://github.com/JerHowden/sapdoku">here</a>.
                </li>
                <li>
                  If you like the game, consider donating or send me a message at{' '}
                  <a
                    className="underline"
                    href="mailto:sapdokudaily@gmail.com"
                  >
                    sapdokudaily@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <Image
              src={IMAGE_SRCS.mascotPenguin}
              width="256"
              height="256"
              quality={100}
              className="flex w-[128px] h-[128px]"
              alt=""
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Got it!</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

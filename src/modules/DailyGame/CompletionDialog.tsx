import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Separator } from '@/components/ui/separator';
import { ClassicRun, Combo, Completion, Pet } from '@/db';
import { ScrollText } from 'lucide-react';
import Image from 'next/image';
import { Category } from '../GuessingGrid';
import { PetCard } from '../PetsDisplay';
import { CompletionMessage } from './CompletionMessage';

type CompletionDialogProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  run: ClassicRun;
  combo: Combo;
  type?: Completion;
};

type PetHoverCardProps = {
  pet?: Pet;
};

function PetHoverCard({ pet }: PetHoverCardProps) {
  if (!pet) return <div className="w-[32px] h-[32px] rounded-sm" />;
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex flex-col w-full h-full justify-center items-center gap-2 p-2 bg-secondary rounded-sm">
          <div className="relative flex justify-center h-[48px] w-[48px] mt-2">
            <Image
              src={pet.imageSrc || 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
              alt={pet.name}
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm md:text-base font-medium text-center">{pet.name}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="p-0 border-none">
        <PetCard pet={pet} />
      </HoverCardContent>
    </HoverCard>
  );
}

export function CompletionDialog({ open, setOpen, run, combo, type }: CompletionDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(value) => setOpen(value)}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          onClick={() => setOpen(true)}
          className={`${run.complete ? 'block ' : 'hidden '} flex flex-row gap-1`}
        >
          <ScrollText />
          Summary
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[75vh] overflow-y-auto md:max-w-xl">
        <DialogHeader className="gap-2">
          <DialogTitle className="font-lapsus text-3xl leading-none tracking-wide">
            Game Summary
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <CompletionMessage type={type} />
        <div className="h-full w-full flex flex-col">
          <div
            className={`
          grid
          grid-cols-4
          grid-rows-4
          gap-1
          aspect-square
          min-w-64
          max-w-full
          md:min-w-[30rem]
        `}
          >
            <div />
            <div className="flex flex-col items-center justify-center">
              <Category {...combo?.columns[0]} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Category {...combo?.columns[1]} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Category {...combo?.columns[2]} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Category {...combo?.rows[0]} />
            </div>
            <PetHoverCard pet={run.guesses[1]} />
            <PetHoverCard pet={run.guesses[2]} />
            <PetHoverCard pet={run.guesses[3]} />
            <div className="flex flex-col items-center justify-center">
              <Category {...combo?.rows[1]} />
            </div>
            <PetHoverCard pet={run.guesses[4]} />
            <PetHoverCard pet={run.guesses[5]} />
            <PetHoverCard pet={run.guesses[6]} />
            <div className="flex flex-col items-center justify-center">
              <Category {...combo?.rows[2]} />
            </div>
            <PetHoverCard pet={run.guesses[7]} />
            <PetHoverCard pet={run.guesses[8]} />
            <PetHoverCard pet={run.guesses[9]} />
          </div>
        </div>
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => setOpen(false)}
            >
              {type === 'loss'
                ? "I'll get it next time B)"
                : type === 'win'
                ? 'Another W'
                : 'MASSIVE W'}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

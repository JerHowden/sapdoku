import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { ClassicRun, Combo, Completion } from '@/db';
import { Clock, ScrollText } from 'lucide-react';
import { CompletedGridDetails } from './CompletedGridDetails';
import { CompletionMessage } from './CompletionMessage';
import { ShareButton } from './ShareButton';
import { TimeToNextGame } from './TimeToNextGame';

type CompletionDialogProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  run: ClassicRun;
  combo: Combo;
  type?: Completion;
};

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
          className={`${run.complete ? 'block ' : 'hidden '} flex flex-row gap-1 ${
            type === 'loss'
              ? 'bg-red-500'
              : type === 'win'
              ? 'bg-green-500'
              : type === 'perfect'
              ? 'bg-blue-500'
              : type === 'gridbomb'
              ? 'bg-purple-500'
              : ''
          }`}
        >
          <ScrollText />
          Summary
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[75vh] overflow-y-auto md:max-w-xl">
        <DialogHeader className="flex-row gap-2 items-center">
          <DialogTitle className="font-lapsus text-xl md:text-3xl leading-none tracking-wide">
            Game Summary
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <CompletionMessage type={type} />
          <div className="flex flex-row items-center justify-center gap-x-1 !m-0 pl-1">
            <Clock
              className="text-xs text-muted-foreground"
              size={16}
            />
            <p className="text-xs md:text-base text-muted-foreground font-extrabold tracking-wide">
              {`${Math.floor(run.time / 60)}:${run.time % 60 < 10 ? 0 : ''}${run.time % 60}`}
            </p>
          </div>
        </DialogHeader>
        <Separator />
        <CompletedGridDetails
          run={run}
          combo={combo}
        />
        <Separator />
        <DialogFooter className="flex flex-row !justify-between items-center">
          <TimeToNextGame />
          <div className="flex flex-row gap-2 items-center">
            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </DialogClose>
            <ShareButton
              run={run}
              combo={combo}
              type={type}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

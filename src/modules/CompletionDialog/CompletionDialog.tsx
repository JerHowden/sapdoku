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
import { ScrollText } from 'lucide-react';
import { CompletedGridDetails } from './CompletedGridDetails';
import { CompletionMessage } from './CompletionMessage';
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
        </DialogHeader>
        <Separator />
        <CompletedGridDetails
          run={run}
          combo={combo}
        />
        <Separator />
        <DialogFooter className="flex flex-row !justify-between items-center">
          <TimeToNextGame />
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { isoDateString } from '@/lib';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type ChangeDateProps = {
  date: Date;
};

export function ChangeDate({ date }: ChangeDateProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function onSelect(newDate?: Date) {
    if (newDate) {
      console.log({ newDate, iso: isoDateString(newDate) });
      router.push(`?date=${isoDateString(newDate)}`);
      setOpen(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          size="icon"
          title="Play a Game from another Day"
          // disabled={runStarted && !run.complete}
        >
          <CalendarIcon />
          <span className="sr-only">Choose Date</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-4 w-auto">
        <DialogHeader>
          <DialogTitle>Date</DialogTitle>
          <DialogDescription>Choose a new game date.</DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex items-center justify-center">
          <Calendar
            className="rounded-md p-0"
            mode="single"
            selected={date}
            onSelect={onSelect}
            disabled={(date: Date) => date.getFullYear() < 2025 || date > new Date()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

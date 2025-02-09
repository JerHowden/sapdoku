'use client';

import { SapdokuContext } from '@/app/providers';
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
import { useRun } from '@/lib';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useContext } from 'react';

export function ChangeDate() {
  const { date, setDate } = useContext(SapdokuContext);
  const { run, runStarted } = useRun();

  function onSelect(newDate?: Date) {
    if (newDate) setDate(newDate);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          size="icon"
          title="Play a Game from another Day"
          disabled={runStarted && !run.complete}
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

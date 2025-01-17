'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export function ChangeDate() {
  return (
    <Button
      variant="outline"
      type="button"
      size="textToIcon"
      onClick={() => window.open('https://buymeacoffee.com/jeremiahhowden', '_blank')}
      title="Play a Game from another Day"
    >
      <Calendar />
      <span className="hidden md:inline">Choose Date</span>
    </Button>
  );
}

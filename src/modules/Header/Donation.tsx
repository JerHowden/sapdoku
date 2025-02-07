'use client';

import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

export function Donation() {
  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={() => window.open('https://buymeacoffee.com/jeremiahhowden', '_blank')}
      title="Buy me a Coffee ↗"
    >
      <Coffee />
      <span className="sr-only">Donate to Sapdoku</span>
    </Button>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

export function Donation() {
  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      onClick={() => window.open('https://buymeacoffee.com/jeremiahhowden', '_blank')}
    >
      <Coffee />
      <span className="sr-only">Donate to Sapdoku</span>
    </Button>
  );
}

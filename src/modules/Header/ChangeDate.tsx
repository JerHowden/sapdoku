'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export function ChangeDate() {
  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => window.open('https://buymeacoffee.com/jeremiahhowden', '_blank')}
    >
      <Calendar />
      Choose Date
    </Button>
  );
}

import { Pet } from '@/db';
import { ReactNode } from 'react';

export type Requirement = {
  logic: (pet: Pet) => boolean;
  display: ReactNode;
  label: string;
};

'use client';

import { SapdokuContext } from '@/app/providers';
import { DEFAULT_RUN, isoDateKey, useLocalStorage } from '@/lib';
import Image from 'next/image';
import { useContext } from 'react';

export function Hearts() {
  const { date } = useContext(SapdokuContext);
  const [run] = useLocalStorage(isoDateKey(date), DEFAULT_RUN);
  return (
    <div className="flex flex-row gap-4">
      {[...Array(DEFAULT_RUN.hearts)].map((_, index) => (
        <Image
          key={index}
          src={index < run.hearts ? '/images/heart.png' : '/images/heart-broken.png'}
          alt={index < run.hearts ? 'Heart' : ''}
          width="48"
          height="48"
          className="w-6 sm:w-9 md:w-12 h-auto"
        />
      ))}
    </div>
  );
}

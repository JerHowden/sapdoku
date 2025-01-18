'use client';

import { SapdokuContext } from '@/app/providers';
import { IMAGE_SRCS } from '@/db';
import { DEFAULT_RUN, isoDateKey, useLocalStorage } from '@/lib';
import Image from 'next/image';
import { useContext } from 'react';

export function Hearts() {
  const { date } = useContext(SapdokuContext);
  const [run] = useLocalStorage(isoDateKey(date), DEFAULT_RUN);
  return (
    <div className="flex flex-row gap-4">
      {[...Array(run.hearts)].map((_, index) => (
        <Image
          key={index}
          src={IMAGE_SRCS.health ?? ''}
          alt="1 Life"
          width="48"
          height="48"
          className="w-6 sm:w-9 md:w-12 h-auto"
        />
      ))}
    </div>
  );
}

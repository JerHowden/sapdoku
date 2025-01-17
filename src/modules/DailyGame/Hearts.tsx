'use client';

import { SapdokuContext } from '@/app/providers';
import { IMAGE_SRCS } from '@/db';
import Image from 'next/image';
import { useContext } from 'react';

export function Hearts() {
  const { hearts } = useContext(SapdokuContext);
  return (
    <div className="flex flex-row gap-4 p-4">
      {[...Array(hearts)].map((_, index) => (
        <Image
          key={index}
          src={IMAGE_SRCS.health}
          alt="1 Life"
          width={48}
          height={48}
        />
      ))}
    </div>
  );
}

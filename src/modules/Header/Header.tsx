'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { Donation } from './Donation';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Fish } from 'lucide-react';
import { ChangeDate } from './ChangeDate';

export function Header() {
  const router = useRouter();

  return (
    <header className="sticky">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link
            href="/"
            className="-m-1.5 p-1.5 flex gap-2"
          >
            <Image
              src="https://superautopets.wiki.gg/images/f/fa/Sloth.png"
              width={32}
              height={30.5}
              alt=""
            />
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
              Sapdoku
            </h1>
          </Link>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <ChangeDate />
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push('/pets')}
            size="textToIcon"
            title="See all the SAP Pets"
          >
            <Fish />
            <span className="hidden md:inline">Pets</span>
          </Button>
          <ThemeToggle />
          <Donation />
        </div>
      </nav>
    </header>
  );
}

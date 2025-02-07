'use client';

import { Button } from '@/components/ui/button';
import { Fish } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeDate } from './ChangeDate';
import { Donation } from './Donation';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="sticky">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link
            href="/"
            className="-m-1.5 p-1.5 flex gap-2 items-center"
          >
            <Image
              src="https://superautopets.wiki.gg/images/f/fa/Sloth.png"
              width={32}
              height={30.5}
              alt=""
            />
            <h1 className="scroll-m-20 text-[16px] md:text-[24px] font-extrabold lg:text-[32px] leading-none font-lapsus">
              Sapdoku
            </h1>
          </Link>
        </div>
        <div className="flex gap-2 md:gap-4 justify-end items-center">
          {pathname === '' || pathname === '/' ? <ChangeDate /> : null}
          {pathname !== '/pets' ? (
            <Button
              variant="ghost"
              type="button"
              onClick={() => router.push('/pets')}
              size="textToIcon"
              title="See all the SAP Pets"
            >
              <Fish className="inline md:hidden" />
              <span className="hidden md:inline">Pets</span>
            </Button>
          ) : null}
          <ThemeToggle />
          <Donation />
        </div>
      </nav>
    </header>
  );
}

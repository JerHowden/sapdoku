import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Donation } from './Donation';
import { IntroDialog } from './IntroDialog';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
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
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <Link
                href="/classic"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Classic
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/reverse"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Reverse
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link
                href="/pets"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pets
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Separator
            orientation="vertical"
            className="h-8 mx-2"
          />
          <NavigationMenuList>
            <NavigationMenuItem>
              <IntroDialog />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Donation />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <div className="flex gap-2 md:gap-4 justify-end items-center"></div> */}
      </nav>
    </header>
  );
}

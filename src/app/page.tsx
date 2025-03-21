'use client';

import { ISO_DATE_REGEX, isoDateKey } from '@/lib';
import { DailyGame } from '@/modules/DailyGame';
import { forbidden, notFound, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const urlDate = searchParams.get('date');

  const date = useMemo(() => {
    if (!urlDate) return new Date();
    if (!ISO_DATE_REGEX.test(urlDate)) {
      notFound();
    } else if (Number(urlDate.replaceAll('-', '')) > isoDateKey(new Date())) {
      forbidden();
    }
    const urlDateNums = urlDate.split('-').map((section) => Number(section));
    if (urlDateNums.length === 3) {
      return new Date(urlDateNums[0], urlDateNums[1] - 1, urlDateNums[2]);
    } else {
      console.error('Where are you going??');
      notFound();
    }
  }, [urlDate]);

  return (
    <div className="p-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <DailyGame
        date={date}
        gamemode="classic"
      />
    </div>
  );

  // TODO: Use when reverse is dropped

  // const date = isoDateString(new Date());
  // return (
  //   <div className="p-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
  //     <div className="flex flex-col gap-6 items-center mt-16 md:mt-32">
  //       <h1 className="scroll-m-20 pb-2 text-4xl font-semibold first:mt-0 font-lapsus">Sapdoku</h1>
  //       <p className="text-lg text-muted-foreground">
  //         // description here
  //       </p>
  //       <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-6">
  //         <Link
  //           href={`/classic/${date}`}
  //           className="block w-full"
  //         >
  //           <Card className="flex flex-col gap-2 p-8">
  //             <div className="flex flex-col gap-2 items-center">
  //               <div className="relative w-32 md:w-64 h-32 md:h-32">
  //                 <Image
  //                   src={IMAGE_SRCS.ribbon}
  //                   alt=""
  //                   fill
  //                   objectFit="scale-down"
  //                 />
  //               </div>
  //               <h2 className="text-xl font-lapsus">Classic</h2>
  //             </div>
  //           </Card>
  //         </Link>
  //         <Link
  //           href={`/reverse/${date}`}
  //           className="block w-full"
  //           aria-disabled
  //         >
  //           <Card className="flex flex-col gap-2 p-8">
  //             <div className="flex flex-col gap-2 items-center">
  //               <div className="relative w-32 md:w-64 h-32 md:h-32">
  //                 <Image
  //                   src={IMAGE_SRCS.hardRibbon}
  //                   alt=""
  //                   fill
  //                   objectFit="scale-down"
  //                 />
  //               </div>
  //               <h2 className="text-xl font-lapsus">Reverse</h2>
  //             </div>
  //           </Card>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
}

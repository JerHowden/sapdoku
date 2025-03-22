import { DailyGame, DailyGameLoading } from '@/modules/DailyGame';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="p-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<DailyGameLoading />}>
        <DailyGame gamemode="classic" />
      </Suspense>
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

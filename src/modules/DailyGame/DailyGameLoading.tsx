import { Skeleton } from '@/components/ui/skeleton';

export function DailyGameLoading() {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-9 md:gap-12 items-center">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-muted-foreground">
        Loading...
      </h1>
      <div
        className={`
          grid
          grid-cols-4
          grid-rows-4
          gap-1
          aspect-square
          min-w-64
          max-w-full
          md:min-w-[30rem]
        `}
      >
        <Skeleton className="animate-none bg-transparent" />
        <Skeleton className="bg-secondary/50" />
        <Skeleton className="bg-secondary/50" />
        <Skeleton className="bg-secondary/50" />
        <Skeleton className="bg-secondary/50" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary/50" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary/50" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary" />
        <Skeleton className="bg-secondary" />
      </div>
    </div>
  );
}

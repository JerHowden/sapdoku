import { Requirement } from '@/db';

export function Category({ display, label }: Requirement) {
  return (
    <div className="flex flex-col w-full items-center gap-2 p-2">
      {display}
      <p className="text-xs sm:text-sm md:text-base font-medium text-center">{label}</p>
    </div>
  );
}

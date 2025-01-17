import { Requirement } from '@/db';

export function Category({ display, label }: Requirement) {
  return (
    <div className="flex flex-col w-full items-center gap-2 p-2">
      {display}
      <p>{label}</p>
    </div>
  );
}

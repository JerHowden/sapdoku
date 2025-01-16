import { Requirement } from './types';

export function Category({ display, label }: Requirement) {
  return (
    <div className="flex w-full items-center">
      {display}
      <p>{label}</p>
    </div>
  );
}

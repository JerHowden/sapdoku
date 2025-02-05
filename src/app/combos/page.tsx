import { ComboTable } from '@/modules/ComboTable';

export default function Combos() {
  return (
    <div className="flex flex-col gap-4 mx-auto max-w-7xl p-6 lg:px-8">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Combos
      </h1>
      <ComboTable />
    </div>
  );
}

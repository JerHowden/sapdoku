import { PetsDisplay } from '@/modules/PetsDisplay';

export default function Pets() {
  return (
    <div className="px-8 py-6 flex flex-col gap-6">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Pets
      </h1>
      <PetsDisplay />
    </div>
  );
}

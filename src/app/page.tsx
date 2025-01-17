import { DailyGame } from '@/modules/DailyGame';

export default function Home() {
  return (
    <div className="p-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <DailyGame />
    </div>
  );
}

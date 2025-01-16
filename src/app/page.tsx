import { DailyGame } from '@/modules/DailyGame';
import { GuessingGrid } from '@/modules/GuessingGrid';

export default function Home() {
  return (
    <div className="p-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <DailyGame>
        <GuessingGrid />
      </DailyGame>
    </div>
  );
}

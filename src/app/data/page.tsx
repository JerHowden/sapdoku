import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ComboTable, GenerateGame, TotalsTable } from '@/modules/ComboTable';

export default function Data() {
  return (
    <div className="flex flex-col gap-4 mx-auto w-full max-w-7xl p-6 lg:px-8">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Data
      </h1>
      <Tabs
        defaultValue="table"
        className="w-full h-full"
      >
        <TabsList className="w-full">
          <TabsTrigger
            value="table"
            className="flex-1"
          >
            Table
          </TabsTrigger>
          <TabsTrigger
            value="filters"
            className="flex-1"
          >
            Filters
          </TabsTrigger>
          <TabsTrigger
            value="generate"
            className="flex-1"
          >
            Generate
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="table"
          className="py-4 [&>.relative]:overflow-visible"
        >
          <ComboTable />
        </TabsContent>
        <TabsContent value="filters">
          <TotalsTable />
        </TabsContent>
        <TabsContent value="generate">
          <GenerateGame />
        </TabsContent>
      </Tabs>
    </div>
  );
}

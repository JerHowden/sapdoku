'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AbilityTrigger,
  IMAGE_SRCS_PACK_MAP,
  IMAGE_SRCS_TIER_MAP,
  Pack,
  PETS_LIST,
  Tag,
  Tier,
} from '@/db';
import { ABILITY_TRIGGERS_LIST, PACKS_LIST, TAGS_LIST, TIERS_LIST } from '@/db/constants';
import { Columns3, RotateCcw, Table2 } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { PetsCards } from './PetsCards';
import { PetsTable } from './PetsTable';

export function PetsDisplay() {
  const [searchText, setSearchText] = useState('');
  const [tierFilter, setTierFilter] = useState<Tier | undefined>();
  const [packFilter, setPackFilter] = useState<Pack | undefined>();
  const [abilityFilter, setAbilityFilter] = useState<AbilityTrigger | undefined>();
  const [tagFilter, setTagFilter] = useState<Tag | undefined | 'No Tags'>();
  const [mode, setMode] = useState<'cards' | 'table'>('cards');

  const filteredPets = useMemo(() => {
    return PETS_LIST.filter(
      (pet) =>
        pet.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (!tierFilter || pet.tier === tierFilter) &&
        (!packFilter || pet.pack.includes(packFilter)) &&
        (abilityFilter === undefined || pet.abilityTrigger === abilityFilter) &&
        (!tagFilter ||
          (pet.tags.length === 0 && tagFilter === 'No Tags') ||
          (tagFilter !== 'No Tags' && pet.tags.includes(tagFilter)))
    );
  }, [searchText, tierFilter, packFilter, abilityFilter, tagFilter]);

  const reset = () => {
    setSearchText('');
    setTierFilter(undefined);
    setPackFilter(undefined);
    setAbilityFilter(undefined);
    setTagFilter(undefined);
  };

  return (
    <div className="space-y-4 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-2">
        <div className="flex flex-col md:flex-row items-stretch gap-2 w-auto">
          <Input
            placeholder="Search pets..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="min-w-8 sm:min-w-12 md:min-w-64"
          />
          <Menubar className="justify-evenly">
            <MenubarMenu>
              <MenubarTrigger className="whitespace-nowrap">
                {tierFilter
                  ? typeof tierFilter === 'number'
                    ? `Tier ${tierFilter}`
                    : tierFilter
                  : 'Tiers'}
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setTierFilter(undefined)}>All</MenubarItem>
                <Separator className="my-1.5 mx-2 w-auto" />
                {TIERS_LIST.map((tier) => (
                  <MenubarItem
                    key={tier}
                    onClick={() => setTierFilter(tier)}
                    className="flex flex-row justify-between items-center"
                  >
                    {typeof tier === 'number' ? `Tier ${tier}` : tier}
                    {typeof tier === 'number' ? (
                      <Image
                        src={IMAGE_SRCS_TIER_MAP[tier]}
                        alt={String(tier)}
                        width="16"
                        height="16"
                      />
                    ) : null}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="whitespace-nowrap">{packFilter || 'Packs'}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setPackFilter(undefined)}>All</MenubarItem>
                <Separator className="my-1.5 mx-2 w-auto" />
                {PACKS_LIST.map((pack) => (
                  <MenubarItem
                    key={pack}
                    onClick={() => setPackFilter(pack)}
                    className="flex flex-row justify-between items-center"
                  >
                    {pack}
                    <Image
                      src={IMAGE_SRCS_PACK_MAP[pack]}
                      alt={pack}
                      width="16"
                      height="16"
                    />
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="whitespace-nowrap">
                {abilityFilter === undefined
                  ? 'Abilities'
                  : abilityFilter === ''
                  ? 'No Ability'
                  : abilityFilter}
              </MenubarTrigger>
              <MenubarContent className="max-h-[50vh] overflow-auto">
                <MenubarItem onClick={() => setAbilityFilter(undefined)}>All</MenubarItem>
                <Separator className="my-1.5 mx-2 w-auto" />
                {ABILITY_TRIGGERS_LIST.filter((ability) => ability !== '').map((ability) => (
                  <MenubarItem
                    key={ability}
                    onClick={() => setAbilityFilter(ability)}
                  >
                    {ability}
                  </MenubarItem>
                ))}
                <Separator className="my-1.5 mx-2 w-auto" />
                <MenubarItem
                  key="No Trigger"
                  onClick={() => setAbilityFilter('')}
                >
                  No Trigger
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="whitespace-nowrap">{tagFilter || 'Tags'}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setTagFilter(undefined)}>All</MenubarItem>
                <Separator className="my-1.5 mx-2 w-auto" />
                {TAGS_LIST.map((tag) => (
                  <MenubarItem
                    key={tag}
                    onClick={() => setTagFilter(tag)}
                  >
                    {tag}
                  </MenubarItem>
                ))}
                <Separator className="my-1.5 mx-2 w-auto" />
                <MenubarItem onClick={() => setTagFilter('No Tags')}>No Tags</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex-1 flex flex-row flex-nowrap items-stretch justify-between">
          <Button
            variant="outline"
            size="icon"
            title="Reset"
            onClick={reset}
            className="px-3"
          >
            <RotateCcw />
          </Button>
          <ToggleGroup
            type="single"
            className="border rounded-md p-1"
            value={mode}
            onValueChange={(newMode: 'cards' | 'table') => (newMode ? setMode(newMode) : null)}
          >
            <ToggleGroupItem
              value="cards"
              className="rounded-sm h-full py-1"
            >
              <Columns3 />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="table"
              className="rounded-sm h-full py-1"
            >
              <Table2 />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      {mode === 'table' ? <PetsTable filteredPets={filteredPets} /> : null}
      {mode === 'cards' ? <PetsCards filteredPets={filteredPets} /> : null}
    </div>
  );
}

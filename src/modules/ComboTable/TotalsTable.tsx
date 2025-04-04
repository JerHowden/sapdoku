'use client';

import { AbilityTrigger, Pack, PETS_LIST, Tag, Tier } from '@/db';
import { ABILITY_TRIGGERS_LIST, PACKS_LIST, TAGS_LIST, TIERS_LIST } from '@/db/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';

type StatSelection = 'Healthier' | 'Stronger' | 'Even';

type Selection = {
  type: 'tier' | 'stats' | 'pack' | 'trigger' | 'tag';
  value: Tier | StatSelection | Pack | AbilityTrigger | Tag | 'No Tags';
};

export function TotalsTable() {
  const [selections, setSelections] = useState<Selection[]>([]);

  const selectionPets = PETS_LIST.filter((pet) => {
    if (selections.length === 0) return true;
    for (let i = 0; i < selections.length; i++) {
      const selected = selections[i];
      if (selected.type === 'tier' && selected.value === pet.tier) return true;
      if (
        selected.type === 'stats' &&
        ((selected.value === 'Healthier' && pet.health > pet.attack) ||
          (selected.value === 'Stronger' && pet.attack > pet.health) ||
          (selected.value === 'Even' && pet.attack === pet.health))
      )
        return true;
      if (selected.type === 'pack' && pet.pack.includes(selected.value as Pack)) return true;
      if (selected.type === 'trigger' && selected.value === pet.abilityTrigger) return true;
      if (selected.type === 'tag' && pet.tags.includes(selected.value as Tag)) return true;
      if (selected.type === 'tag' && selected.value === 'No Tags' && pet.tags.length === 0)
        return true;
    }
    return false;
  });

  const tierTotals = TIERS_LIST.map((tier) => ({
    tier,
    count: selectionPets.filter((pet) => pet.tier === tier).length,
  }));

  const statTotals = [
    { stats: 'Healthier', count: selectionPets.filter((pet) => pet.health > pet.attack).length },
    { stats: 'Stronger', count: selectionPets.filter((pet) => pet.attack > pet.health).length },
    { stats: 'Even', count: selectionPets.filter((pet) => pet.attack === pet.health).length },
  ] as const;

  const packTotals = PACKS_LIST.map((pack) => ({
    pack,
    count: selectionPets.filter((pet) => pet.pack.includes(pack)).length,
  }));

  const abilityTriggerTotals = ABILITY_TRIGGERS_LIST.map((trigger) => ({
    trigger,
    count: selectionPets.filter((pet) => pet.abilityTrigger === trigger).length,
  }));

  const tagTotals = TAGS_LIST.map((tag) => ({
    tag,
    count: selectionPets.filter((pet) => pet.tags.includes(tag)).length,
  }));

  const toggleSelection = (selection: Selection) => {
    const index = selections.findIndex(
      (s) => s.type === selection.type && s.value === selection.value
    );
    if (index === -1) {
      setSelections([...selections, selection]);
    } else {
      setSelections(selections.filter((_, i) => i !== index));
    }
  };

  const handleClearType = (type: Selection['type']) => {
    setSelections(selections.filter((selection) => selection.type !== type));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <Table>
        <TableHeader>
          <TableRow onClick={() => handleClearType('tier')}>
            <TableHead>Tier</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tierTotals.map(({ tier, count }) => (
            <TableRow
              key={tier}
              data-selected={selections.some(
                (selection) => selection.type === 'tier' && selection.value === tier
              )}
              data-none={count === 0}
              onClick={() => toggleSelection({ type: 'tier', value: tier })}
              className="data-[selected=true]:text-red-500 data-[none=true]:text-muted-foreground"
            >
              <TableCell>{tier}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
          <TableRow onClick={() => handleClearType('stats')}>
            <TableHead>Stats</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
          {statTotals.map(({ stats, count }) => (
            <TableRow
              key={stats}
              data-selected={selections.some(
                (selection) => selection.type === 'stats' && selection.value === stats
              )}
              data-none={count === 0}
              onClick={() => toggleSelection({ type: 'stats', value: stats })}
              className="data-[selected=true]:text-red-500 data-[none=true]:text-muted-foreground"
            >
              <TableCell>{stats}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
          <TableRow onClick={() => handleClearType('stats')}>
            <TableHead>Packs</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
          {packTotals.map(({ pack, count }) => (
            <TableRow
              key={pack}
              data-selected={selections.some(
                (selection) => selection.type === 'pack' && selection.value === pack
              )}
              data-none={count === 0}
              onClick={() => toggleSelection({ type: 'pack', value: pack })}
              className="data-[selected=true]:text-red-500 data-[none=true]:text-muted-foreground"
            >
              <TableCell>{pack}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableHead>Total Pets</TableHead>
            <TableHead>{selectionPets.length}</TableHead>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <TableRow onClick={() => handleClearType('trigger')}>
            <TableHead>Ability Trigger</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {abilityTriggerTotals.map(({ trigger, count }) => (
            <TableRow
              key={trigger}
              data-selected={selections.some(
                (selection) => selection.type === 'trigger' && selection.value === trigger
              )}
              data-none={count === 0}
              onClick={() => toggleSelection({ type: 'trigger', value: trigger })}
              className="data-[selected=true]:text-red-500 data-[none=true]:text-muted-foreground"
            >
              <TableCell>{trigger || 'No Ability'}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <TableRow onClick={() => handleClearType('tag')}>
            <TableHead>Tag</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tagTotals.map(({ tag, count }) => (
            <TableRow
              key={tag}
              data-selected={selections.some(
                (selection) => selection.type === 'tag' && selection.value === tag
              )}
              data-none={count === 0}
              onClick={() => toggleSelection({ type: 'tag', value: tag })}
              className="data-[selected=true]:text-red-500 data-[none=true]:text-muted-foreground"
            >
              <TableCell>{tag}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
          <TableRow
            data-selected={selections.some(
              (selection) => selection.type === 'tag' && selection.value === 'No Tags'
            )}
            data-none={selectionPets.filter((pet) => pet.tags.length === 0).length === 0}
            onClick={() => toggleSelection({ type: 'tag', value: 'No Tags' })}
            className="data-[selected=true]:text-red-500 data-[none=true]:text-muted-foreground"
          >
            <TableCell>No Tags</TableCell>
            <TableCell>{selectionPets.filter((pet) => pet.tags.length === 0).length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

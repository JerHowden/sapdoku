'use client';

import { AbilityTrigger, PETS_LIST, Tag, Tier } from '@/db';
import { ABILITY_TRIGGERS_LIST, TAGS_LIST, TIERS_LIST } from '@/db/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';

type Selection = {
  type: 'tier' | 'trigger' | 'tag';
  value: Tier | AbilityTrigger | Tag | 'No Tags';
};

export function TotalsTable() {
  const [selected, setSelected] = useState<Selection | null>(null);

  const selectionPets = PETS_LIST.filter((pet) => {
    if (!selected) return true;
    if (selected.type === 'tag' && selected.value === 'No Tags') return pet.tags.length === 0;
    return (
      (selected.type === 'trigger' && selected.value === pet.abilityTrigger) ||
      (selected.type === 'tag' && pet.tags.includes(selected.value as Tag)) ||
      (selected.type === 'tier' && pet.tier === selected.value)
    );
  });

  const tierTotals = TIERS_LIST.map((tier) => ({
    tier,
    count: selectionPets.filter((pet) => pet.tier === tier).length,
  }));

  const abilityTriggerTotals = ABILITY_TRIGGERS_LIST.map((trigger) => ({
    trigger,
    count: selectionPets.filter((pet) => pet.abilityTrigger === trigger).length,
  }));

  const tagTotals = TAGS_LIST.map((tag) => ({
    tag,
    count: selectionPets.filter((pet) => pet.tags.includes(tag)).length,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <Table>
        <TableHeader>
          <TableRow onClick={() => setSelected(null)}>
            <TableHead>Tier</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tierTotals.map(({ tier, count }) => (
            <TableRow
              key={tier}
              data-selected={selected?.value === tier && selected.type === 'tier'}
              onClick={() => setSelected({ type: 'tier', value: tier })}
              className="data-[selected=true]:text-red-500"
            >
              <TableCell>{tier}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <TableRow onClick={() => setSelected(null)}>
            <TableHead>Ability Trigger</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {abilityTriggerTotals.map(({ trigger, count }) => (
            <TableRow
              key={trigger}
              data-selected={selected?.value === trigger && selected.type === 'trigger'}
              onClick={() => setSelected({ type: 'trigger', value: trigger })}
              className="data-[selected=true]:text-red-500"
            >
              <TableCell>{trigger || 'No Ability'}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableHeader>
          <TableRow onClick={() => setSelected(null)}>
            <TableHead>Tag</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tagTotals.map(({ tag, count }) => (
            <TableRow
              key={tag}
              data-selected={selected?.value === tag && selected.type === 'tag'}
              onClick={() => setSelected({ type: 'tag', value: tag })}
              className="data-[selected=true]:text-red-500"
            >
              <TableCell>{tag}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
          <TableRow
            data-selected={selected?.value === 'No Tags' && selected.type === 'tag'}
            onClick={() => setSelected({ type: 'tag', value: 'No Tags' })}
            className="data-[selected=true]:text-red-500"
          >
            <TableCell>No Tags</TableCell>
            <TableCell>{selectionPets.filter((pet) => pet.tags.length === 0).length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

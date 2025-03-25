'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PETS_LIST, REQUIREMENT_LIST_GENERIC, REQUIREMENT_LIST_SPECIFIC } from '@/db';
import { PACKS_LIST } from '@/db/constants';

export function ComboTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Requirement</TableHead>
          <TableHead>Total</TableHead>
          {REQUIREMENT_LIST_SPECIFIC.map((specReq) => (
            <TableHead
              key={specReq.label}
              className="whitespace-nowrap"
            >
              <div className="max-w-8">{specReq.display}</div>
              {specReq.label}
            </TableHead>
          ))}
          {PACKS_LIST.map((pack) => (
            <TableHead
              key={pack}
              className="whitespace-nowrap"
            >
              {pack}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold text-muted-foreground whitespace-nowrap">
            Total
          </TableCell>
          <TableCell className="font-semibold whitespace-nowrap"></TableCell>
          {REQUIREMENT_LIST_SPECIFIC.map((specReq) => (
            <TableCell
              key={specReq.label}
              className="font-bold"
            >
              {PETS_LIST.filter((pet) => specReq.logic(pet)).length}
            </TableCell>
          ))}
        </TableRow>
        {REQUIREMENT_LIST_GENERIC.map((genReq) => (
          <TableRow key={genReq.label}>
            <TableCell className="font-semibold whitespace-nowrap flex flex-row gap-2 items-center text-muted-foreground">
              <div className="max-w-12 max-h-12">{genReq.display}</div>
              {genReq.label}
            </TableCell>
            <TableCell className="font-bold">
              {PETS_LIST.filter((pet) => genReq.logic(pet)).length}
            </TableCell>
            {REQUIREMENT_LIST_SPECIFIC.map((specReq) => (
              <TableCell key={`${genReq.label}-${specReq.label}`}>
                {PETS_LIST.filter((pet) => specReq.logic(pet) && genReq.logic(pet)).length}
              </TableCell>
            ))}
            {PACKS_LIST.map((pack) => (
              <TableCell key={`${genReq.label}-${pack}`}>
                {PETS_LIST.filter((pet) => pet.pack.includes(pack) && genReq.logic(pet)).length}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

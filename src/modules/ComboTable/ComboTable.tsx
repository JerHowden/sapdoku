'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GENERIC_REQUIREMENT_LIST, PETS_LIST, SPECIFIC_REQUIREMENT_LIST } from '@/db';

export function ComboTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Requirement</TableHead>
          {SPECIFIC_REQUIREMENT_LIST.map((specReq) => (
            <TableHead
              key={specReq.label}
              className="whitespace-nowrap"
            >
              {specReq.display}
              {specReq.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {GENERIC_REQUIREMENT_LIST.map((genReq) => (
          <TableRow key={genReq.label}>
            <TableCell className="font-semibold whitespace-nowrap flex flex-row gap-2 items-center text-muted-foreground">
              {genReq.display}
              {genReq.label}
            </TableCell>
            {SPECIFIC_REQUIREMENT_LIST.map((specReq) => (
              <TableCell key={`${genReq.label}-${specReq.label}`}>
                {PETS_LIST.filter((pet) => specReq.logic(pet) && genReq.logic(pet)).length}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

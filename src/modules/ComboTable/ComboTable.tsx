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
          <TableHead>Total</TableHead>
          {SPECIFIC_REQUIREMENT_LIST.map((specReq) => (
            <TableHead
              key={specReq.label}
              className="whitespace-nowrap"
            >
              <div className="max-w-8">{specReq.display}</div>
              {specReq.label.replace('Attack', '').replace('Health', '')}
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
          {SPECIFIC_REQUIREMENT_LIST.map((specReq) => (
            <TableCell
              key={specReq.label}
              className="font-bold"
            >
              {PETS_LIST.filter((pet) => specReq.logic(pet)).length}
            </TableCell>
          ))}
        </TableRow>
        {GENERIC_REQUIREMENT_LIST.map((genReq) => (
          <TableRow key={genReq.label}>
            <TableCell className="font-semibold whitespace-nowrap flex flex-row gap-2 items-center text-muted-foreground">
              <div className="max-w-12 max-h-12">{genReq.display}</div>
              {genReq.label}
            </TableCell>
            <TableCell className="font-bold">
              {PETS_LIST.filter((pet) => genReq.logic(pet)).length}
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

'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PETS_LIST, Requirement, REQUIREMENT_LIST_GENERIC, REQUIREMENT_LIST_SPECIFIC } from '@/db';
import { useState } from 'react';

export function ComboTable() {
  const [selectedReq, setSelectedReq] = useState<Requirement | null>(null);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead onClick={() => setSelectedReq(null)}>Requirement</TableHead>
          <TableHead>Total</TableHead>
          {REQUIREMENT_LIST_SPECIFIC.map((specReq) => (
            <TableHead
              key={specReq.label}
              className="whitespace-nowrap"
              onClick={() => setSelectedReq(specReq)}
              style={selectedReq?.id === specReq.id ? { color: 'red' } : {}}
            >
              <div className="max-w-8">{specReq.display}</div>
              {specReq.label}
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
              {
                PETS_LIST.filter(
                  (pet) => specReq.logic(pet) && (selectedReq ? selectedReq.logic(pet) : true)
                ).length
              }
            </TableCell>
          ))}
        </TableRow>
        {REQUIREMENT_LIST_GENERIC.map((genReq) => (
          <TableRow key={genReq.label}>
            <TableCell
              className="font-semibold whitespace-nowrap flex flex-row gap-2 items-center text-muted-foreground"
              style={selectedReq?.id === genReq.id ? { color: 'red' } : {}}
              onClick={() => setSelectedReq(genReq)}
            >
              <div className="max-w-12 max-h-12">{genReq.display}</div>
              {genReq.label}
            </TableCell>
            <TableCell className="font-bold">
              {
                PETS_LIST.filter(
                  (pet) => genReq.logic(pet) && (selectedReq ? selectedReq.logic(pet) : true)
                ).length
              }
            </TableCell>
            {REQUIREMENT_LIST_SPECIFIC.map((specReq) => (
              <TableCell key={`${genReq.label}-${specReq.label}`}>
                {
                  PETS_LIST.filter(
                    (pet) =>
                      specReq.logic(pet) &&
                      genReq.logic(pet) &&
                      (selectedReq ? selectedReq.logic(pet) : true)
                  ).length
                }
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

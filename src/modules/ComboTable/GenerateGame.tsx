'use client';

import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  PETS_LIST,
  REQUIREMENT_LIST_GENERIC,
  REQUIREMENT_LIST_SPECIFIC,
  REQUIREMENT_MAP_GENERIC,
  REQUIREMENT_MAP_SPECIFIC,
} from '@/db';
import { Requirement } from '@/db/types';
import { isoDateKey } from '@/lib';
import { useState } from 'react';

type GeneratedReqList = [Requirement | null, Requirement | null, Requirement | null];
export function GenerateGame() {
  const [specificReqs, setSpecificReqs] = useState<GeneratedReqList>([null, null, null]);
  const [genericReqs, setGenericReqs] = useState<GeneratedReqList>([null, null, null]);

  const availablePets = (specReq: number, genReq: number) => {
    if (specificReqs[specReq] === null || genericReqs[genReq] === null) return [];
    return PETS_LIST.filter(
      (pet) => specificReqs[specReq]?.logic(pet) && genericReqs[genReq]?.logic(pet)
    );
  };
  const handleSpecificReqChange = (index: number, req: Requirement | null) => {
    const newReqs: GeneratedReqList = [specificReqs[0], specificReqs[1], specificReqs[2]];
    newReqs[index] = req;
    setSpecificReqs(newReqs);
  };

  const handleGenericReqChange = (index: number, req: Requirement | null) => {
    const newReqs: GeneratedReqList = [genericReqs[0], genericReqs[1], genericReqs[2]];
    newReqs[index] = req;
    setGenericReqs(newReqs);
  };

  const randomizeGame = () => {
    const shuffledSpecific = [...REQUIREMENT_LIST_SPECIFIC].sort(() => 0.5 - Math.random());
    const shuffledGeneric = [...REQUIREMENT_LIST_GENERIC].sort(() => 0.5 - Math.random());
    setSpecificReqs([shuffledSpecific[0], shuffledSpecific[1], shuffledSpecific[2]]);
    setGenericReqs([shuffledGeneric[0], shuffledGeneric[1], shuffledGeneric[2]]);
  };

  const log = () => {
    if (specificReqs.includes(null) || genericReqs.includes(null)) return;
    const specReqEntries = Object.entries(REQUIREMENT_MAP_SPECIFIC);
    const rowKeys = [0, 1, 2].map((row) => {
      const rowEntry = specReqEntries.find(([, req]) => req.label === specificReqs[row]?.label);
      if (rowEntry) return rowEntry[0];
      return '';
    });
    const genReqEntries = Object.entries(REQUIREMENT_MAP_GENERIC);
    const colKeys = [0, 1, 2].map((col) => {
      const colEntry = genReqEntries.find(([, req]) => req.label === genericReqs[col]?.label);
      if (colEntry) return colEntry[0];
      return '';
    });
    console.log(isoDateKey(new Date()));
    console.log('rows:');
    console.log(rowKeys.map((rowKey) => `REQUIREMENT_MAP_SPECIFIC.${rowKey}`).join(', '));
    console.log(', columns:');
    console.log(colKeys.map((colKey) => `REQUIREMENT_MAP_GENERIC.${colKey}`).join(', '));
  };

  return (
    <div className="flex flex-col gap-8 space-y-4">
      <div className="flex flex-row justify-center gap-6">
        <Menubar className="justify-evenly">
          {[0, 1, 2].map((index) => (
            <MenubarMenu key={index}>
              <MenubarTrigger className="whitespace-nowrap">
                {specificReqs[index]?.label || `Gen Req ${index + 1}`}
              </MenubarTrigger>
              <MenubarContent className="max-h-[50vh] overflow-auto">
                {REQUIREMENT_LIST_SPECIFIC.map((req) => (
                  <MenubarItem
                    key={req.label}
                    onClick={() => handleSpecificReqChange(index, req)}
                    onContextMenu={() => handleSpecificReqChange(index, null)}
                    className="flex flex-row justify-between items-center"
                  >
                    {req.label}
                    <div className="w-4 h-4">{req.display}</div>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
        <Menubar className="justify-evenly">
          {[0, 1, 2].map((index) => (
            <MenubarMenu key={index}>
              <MenubarTrigger className="whitespace-nowrap">
                {genericReqs[index]?.label || `Gen Req ${index + 1}`}
              </MenubarTrigger>
              <MenubarContent className="max-h-[50vh] overflow-auto">
                {REQUIREMENT_LIST_GENERIC.map((req) => (
                  <MenubarItem
                    key={req.label}
                    onClick={() => handleGenericReqChange(index, req)}
                    onContextMenu={() => handleGenericReqChange(index, null)}
                    className="flex flex-row justify-between items-center"
                  >
                    {req.label}
                    {req.display}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
        <Button
          onClick={randomizeGame}
          onContextMenu={log}
        >
          Randomize
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>{genericReqs[0]?.label || 'Gen Req 1'}</TableHead>
            <TableHead>{genericReqs[1]?.label || 'Gen Req 2'}</TableHead>
            <TableHead>{genericReqs[2]?.label || 'Gen Req 3'}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[0, 1, 2].map((specReq) => (
            <TableRow key={specReq}>
              <TableHead>{specificReqs[specReq]?.label || 'Spec Req 1'}</TableHead>
              <TableCell
                title={availablePets(specReq, 0)
                  .map((pet) => pet.name)
                  .join('\n')}
              >
                {availablePets(specReq, 0).length}
              </TableCell>
              <TableCell
                title={availablePets(specReq, 1)
                  .map((pet) => pet.name)
                  .join('\n')}
              >
                {availablePets(specReq, 1).length}
              </TableCell>
              <TableCell
                title={availablePets(specReq, 2)
                  .map((pet) => pet.name)
                  .join('\n')}
              >
                {availablePets(specReq, 2).length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { Box, ClassicRun, Combo, Completion, EMOJIS, EMOJIS_DISCORD, EmojiShareKey } from '@/db';
import { useReqsMap } from '@/lib';
import { PopoverContent } from '@radix-ui/react-popover';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

type ShareButtonProps = {
  run: ClassicRun;
  combo: Combo;
  type?: Completion;
};

type CopyType = 'raw' | 'discord' | 'reddit';

export function ShareButton({ run, combo, type }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<CopyType | null>(null);

  const reqsMap = useReqsMap(combo);

  const checkValid = useCallback(
    (box: Box): EmojiShareKey => {
      const guess = run.guesses[box];
      if (!guess) return 'blank';
      for (let i = 0; i < reqsMap[box].length; i++) {
        if (!reqsMap[box][i].logic(guess)) {
          return 'invalid';
        }
      }
      return 'valid';
    },
    [reqsMap, run.guesses]
  );

  // const iosOverkillSpacingFix = useCallback(
  //   (rowID: 0 | 1 | 2) => {
  //     if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  //       return ' ';
  //     }
  //     if (combo.rows[rowID].id.includes('tier')) {
  //       return ' ';
  //     }
  //     return '';
  //   },
  //   [combo.rows]
  // );

  const shareText = useCallback(
    (copyType: CopyType) => {
      const emojisMap = copyType === 'discord' ? EMOJIS_DISCORD : EMOJIS;
      const sapdoku = copyType === 'discord' || copyType === 'reddit' ? '**Sapdoku**' : 'Sapdoku';

      // title, date, and time
      const time =
        run.time >= 60
          ? `${Math.floor(run.time / 60)}m ${run.time % 60 < 10 ? 0 : ''}${run.time % 60}s`
          : `${run.time} seconds`;
      let result = `${emojisMap.sloth} `;
      switch (type) {
        case 'loss':
          result += `I lost ${sapdoku} in ${time}.`;
          break;
        case 'win':
          result += `I just beat ${sapdoku} in ${time}!`;
          break;
        case 'perfect':
        case 'gridbomb':
          result += `I got a perfect ${sapdoku} in ${time}!!`;
          break;
        default:
          result += `${sapdoku}`;
          break;
      }
      const date = `${emojisMap.calendar} ${run.date}`;

      // grid
      const { col1, col2, col3, row1, row2, row3 } = {
        col1: emojisMap[combo.columns[0].id],
        col2: emojisMap[combo.columns[1].id],
        col3: emojisMap[combo.columns[2].id],
        row1: emojisMap[combo.rows[0].id],
        row2: emojisMap[combo.rows[1].id],
        row3: emojisMap[combo.rows[2].id],
      };
      const { box1, box2, box3, box4, box5, box6, box7, box8, box9 } = {
        box1: emojisMap[checkValid(1)],
        box2: emojisMap[checkValid(2)],
        box3: emojisMap[checkValid(3)],
        box4: emojisMap[checkValid(4)],
        box5: emojisMap[checkValid(5)],
        box6: emojisMap[checkValid(6)],
        box7: emojisMap[checkValid(7)],
        box8: emojisMap[checkValid(8)],
        box9: emojisMap[checkValid(9)],
      };
      const colSpacing =
        copyType === 'discord'
          ? '       '
          : copyType === 'reddit'
          ? '__ '
          : /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
          ? '       '
          : '   ';
      const gridNewLine = copyType === 'reddit' ? '\n\n' : '\n';
      const grid = `${colSpacing}${col1} ${col2} ${col3}${gridNewLine}${row1} ${box1} ${box2} ${box3}${gridNewLine}${row2} ${box4} ${box5} ${box6}${gridNewLine}${row3} ${box7} ${box8} ${box9}`;
      if (copyType === 'reddit') {
        return `${result}\n\n${date}\n\n${grid}\n\nPlay at: ${window.location.href}`;
      }
      return `${result}\n${date}\n\n${grid}\n\nPlay at: ${window.location.href}`;
    },
    [checkValid, combo.columns, combo.rows, run.date, run.time, type]
  );

  async function copy(type: CopyType) {
    try {
      await navigator.clipboard.writeText(shareText(type));
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy', error, shareText);
    }
  }

  async function share() {
    try {
      await navigator.share({
        title: 'Sapdoku Summary',
        text: shareText('raw'),
        url: window.location.href,
      });
    } catch {
      try {
        copy('raw');
      } catch (error) {
        console.error('Failed to share', error, shareText);
      }
    }
  }

  return (
    <Popover
      modal
      open={open}
      onOpenChange={(value) => setOpen(value)}
    >
      <PopoverTrigger asChild>
        <Button>Share</Button>
      </PopoverTrigger>
      {createPortal(
        <PopoverContent className="pointer-events-auto z-[10000]">
          <Card>
            <CardHeader>
              <CardTitle>Shareable Text</CardTitle>
              <CardDescription>Tell your friends how you did!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button
                variant="secondary"
                onClick={() => share()}
              >
                Share
              </Button>
              <Button
                variant="secondary"
                onClick={() => copy('raw')}
                disabled={copied === 'raw'}
              >
                {copied === 'raw' ? 'Copied!' : 'Copy Raw'}
              </Button>
              <Button
                variant="secondary"
                onClick={() => copy('discord')}
                disabled={copied === 'discord'}
              >
                {copied === 'discord' ? 'Copied!' : 'Copy for Discord'}
              </Button>
              <Button
                variant="secondary"
                onClick={() => copy('reddit')}
                disabled={copied === 'reddit'}
              >
                {copied === 'reddit' ? 'Copied!' : 'Copy for Reddit'}
              </Button>
            </CardContent>
          </Card>
        </PopoverContent>,
        document.body
      )}
    </Popover>
  );
}

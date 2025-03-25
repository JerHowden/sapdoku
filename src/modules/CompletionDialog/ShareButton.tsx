'use client';

import { Button } from '@/components/ui/button';
import { Box, ClassicRun, Combo, Completion, EmojiGuessKey, EMOJIS } from '@/db';
import { useReqsMap } from '@/lib';
import { useCallback, useMemo, useState } from 'react';

type ShareButtonProps = {
  run: ClassicRun;
  combo: Combo;
  type?: Completion;
};

export function ShareButton({ run, combo, type }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const reqsMap = useReqsMap(combo);

  const checkValid = useCallback(
    (box: Box): EmojiGuessKey => {
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

  const iosOverkillSpacingFix = useCallback(
    (rowID: 0 | 1 | 2) => {
      if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return ' ';
      }
      if (combo.rows[rowID].id.includes('tier')) {
        return ' ';
      }
      return '';
    },
    [combo.rows]
  );

  const shareText = useMemo(() => {
    const time =
      run.time >= 60
        ? `${Math.floor(run.time / 60)}m ${run.time % 60 < 10 ? 0 : ''}${run.time % 60}s`
        : `${run.time} seconds`;
    let result = '🦥 ';
    switch (type) {
      case 'loss':
        result += `I lost Sapdoku in ${time}.`;
        break;
      case 'win':
        result += `I just beat Sapdoku in ${time}!`;
        break;
      case 'perfect':
      case 'gridbomb':
        result += `I got a perfect Sapdoku in ${time}!!`;
        break;
      default:
        result += `Sapdoku`;
        break;
    }
    const date = `📅 ${run.date}`;
    const androidOverkillSpacingFix = /Android/i.test(navigator.userAgent) ? ' ' : '';
    const grid = `     ${androidOverkillSpacingFix}${EMOJIS[combo.columns[0].id]} ${
      EMOJIS[combo.columns[1].id]
    } ${EMOJIS[combo.columns[2].id]}\n${EMOJIS[combo.rows[0].id]}${iosOverkillSpacingFix(0)}${
      EMOJIS[checkValid(1)]
    } ${EMOJIS[checkValid(2)]} ${EMOJIS[checkValid(3)]}\n${
      EMOJIS[combo.rows[1].id]
    }${iosOverkillSpacingFix(1)}${EMOJIS[checkValid(4)]} ${EMOJIS[checkValid(5)]} ${
      EMOJIS[checkValid(6)]
    }\n${EMOJIS[combo.rows[2].id]}${iosOverkillSpacingFix(2)}${EMOJIS[checkValid(7)]} ${
      EMOJIS[checkValid(8)]
    } ${EMOJIS[checkValid(9)]}
    `;
    return `${result}\n${date}\n\n${grid}\nPlay at: ${window.location.href}`;
  }, [checkValid, combo.columns, combo.rows, iosOverkillSpacingFix, run.date, run.time, type]);

  async function share() {
    try {
      await navigator.share({
        title: 'Sapdoku Summary',
        text: shareText,
        url: window.location.href,
      });
    } catch {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to share', error, shareText);
      }
    }
  }

  return (
    <Button
      onClick={share}
      disabled={copied}
    >
      {copied ? 'Copied!' : 'Share'}
    </Button>
  );
}

'use client';

import { useEffect, useRef, memo } from 'react';
import { useReducedMotion } from 'framer-motion';

const glyphs = [
  'ア', 'イ', 'ウ', 'エ', 'オ',
  'カ', 'キ', 'ク', 'ケ', 'コ',
  'サ', 'シ', 'ス', 'セ', 'ソ',
  'タ', 'チ', 'ツ', 'テ', 'ト',
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
  'マ', 'ミ', 'ム', 'メ', 'モ',
  'ヤ', 'ユ', 'ヨ', 'ー',
  'ラ', 'リ', 'ル', 'レ', 'ロ',
  'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

interface CharData {
  type: string;
  value: string;
}

function shuffle(content: string[], output: CharData[], position: number): CharData[] {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

interface DecoderTextProps {
  text: string;
  start?: boolean;
  delay?: number;
  className?: string;
}

export const DecoderText = memo(({ 
  text, 
  start = true, 
  delay: startDelay = 0, 
  className = '' 
}: DecoderTextProps) => {
  const outputRef = useRef<CharData[]>([{ type: CharType.Glyph, value: '' }]);
  const containerRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    const content = text.split('');
    let currentPosition = 0;

    const renderOutput = () => {
      if (!containerRef.current) return;
      
      const characterMap = outputRef.current.map((item) => {
        const className = item.type === CharType.Glyph ? 'opacity-40' : 'opacity-100';
        return `<span class="${className}">${item.value}</span>`;
      });

      containerRef.current.innerHTML = characterMap.join('');
    };

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp + startDelay;
      }

      const elapsed = timestamp - startTimeRef.current;
      
      if (elapsed < 0) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Progress from 0 to content.length over ~2 seconds
      const duration = 2000;
      const progress = Math.min(elapsed / duration, 1);
      currentPosition = progress * content.length;

      outputRef.current = shuffle(content, outputRef.current, currentPosition);
      renderOutput();

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    if (start && !prefersReducedMotion) {
      frameRef.current = requestAnimationFrame(animate);
    } else if (prefersReducedMotion) {
      outputRef.current = content.map((value) => ({
        type: CharType.Value,
        value,
      }));
      renderOutput();
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, start, startDelay, prefersReducedMotion]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden ref={containerRef} />
    </span>
  );
});

DecoderText.displayName = 'DecoderText';


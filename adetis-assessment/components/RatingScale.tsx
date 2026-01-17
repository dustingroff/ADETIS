'use client';

import { useMemo } from 'react';
import type { QuestionScale } from '@/lib/types';

export function RatingScale({
  value,
  onChange,
  scale,
  name
}: {
  value: number | null;
  onChange: (v: number) => void;
  scale: QuestionScale;
  name: string;
}) {
  const options = useMemo(() => {
    const arr: number[] = [];
    for (let i = scale.min; i <= scale.max; i++) arr.push(i);
    return arr;
  }, [scale.max, scale.min]);

  return (
    <fieldset className="mt-3">
      <legend className="sr-only">{name}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((n) => (
          <label
            key={n}
            className={`cursor-pointer rounded-md border px-3 py-2 text-sm shadow-sm transition ${
              value === n ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 bg-white'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={n}
              checked={value === n}
              onChange={() => onChange(n)}
              className="sr-only"
            />
            {n}
          </label>
        ))}
      </div>
      {(scale.labels?.minLabel || scale.labels?.maxLabel) && (
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>{scale.labels?.minLabel ?? ''}</span>
          <span>{scale.labels?.maxLabel ?? ''}</span>
        </div>
      )}
    </fieldset>
  );
}

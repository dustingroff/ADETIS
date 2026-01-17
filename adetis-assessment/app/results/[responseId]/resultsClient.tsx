'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../../components/Card';
import { QUESTIONS } from '../../../data/questions';
import { GUIDANCE_BY_KEY } from '../../../lib/guidance';
import { computeResults, behaviorLabel, splitLines } from '../../../lib/utils';
import { getLowBehaviorThreshold } from '../../../lib/config';
import type { ComputedResults, BehaviorKey, PairingGuidance } from '../../../lib/types';

type Intake = {
  name: string;
  discipline: string;
  building: string;
  cluster: string;
};

type StoredPayload = {
  intake: Intake;
  answers: Record<string, number>;
  thresholdUsed: number;
  computed: ComputedResults;
};

function formatPercent(n: number) {
  return `${Math.round(n)}%`;
}

function formatGapLabel(label: ComputedResults['gapLabel']) {
  return label;
}

export default function ResultsClient({ responseId }: { responseId: string }) {
  const router = useRouter();
  const [payload, setPayload] = useState<StoredPayload | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(`adetis:response:${responseId}`);
    if (raw) {
      try {
        setPayload(JSON.parse(raw));
      } catch {
        setPayload(null);
      }
    }
  }, [responseId]);

  const computed = useMemo(() => {
    if (!payload) return null;
    const threshold = payload.thresholdUsed ?? getLowBehaviorThreshold();
    const fresh = computeResults(QUESTIONS, payload.answers, GUIDANCE_BY_KEY, threshold);
    // guidance cards (PairingGuidance) in order
    const guidanceCards = fresh.lowPairingsShown.map((k) => GUIDANCE_BY_KEY[k]).filter(Boolean) as PairingGuidance[];
    return { fresh, threshold, guidanceCards };
  }, [payload]);

  if (!payload || !computed) {
    return (
      <Card title="Results">
        <p className="text-slate-600">
          We couldn’t load this result on this device. If you just completed the assessment, keep this tab open.
          Otherwise, start a new assessment.
        </p>
        <div className="mt-4">
          <button className="rounded-md bg-slate-900 px-4 py-2 text-white" onClick={() => router.push('/')}
          >
            Start New Assessment
          </button>
        </div>
      </Card>
    );
  }

  const r = computed.fresh;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="text-2xl font-bold">ADETIS Assessment Results</h1>
        <div className="flex gap-2">
          <button className="rounded-md border px-3 py-2" onClick={() => window.print()}>
            View/Print Results
          </button>
          <button className="rounded-md bg-slate-900 px-3 py-2 text-white" onClick={() => router.push('/')}
          >
            Start New Assessment
          </button>
        </div>
      </div>

      <Card title="Executive Summary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-md border p-4">
            <div className="text-xs text-slate-600">Behavioral %</div>
            <div className="text-3xl font-bold">{formatPercent(r.behavioralPercentScore)}</div>
          </div>
          <div className="rounded-md border p-4">
            <div className="text-xs text-slate-600">Self-Perception %</div>
            <div className="text-3xl font-bold">{formatPercent(r.selfPerceptionPercentScore)}</div>
          </div>
          <div className="rounded-md border p-4">
            <div className="text-xs text-slate-600">Gap</div>
            <div className="text-3xl font-bold">{r.perceptionVsBehaviorGap.toFixed(1)}</div>
            <div className="mt-1 text-sm text-slate-600">{formatGapLabel(r.gapLabel)}</div>
          </div>
          <div className="rounded-md border p-4">
            <div className="text-xs text-slate-600">Low Behaviors</div>
            <div className="text-3xl font-bold">{r.lowBehaviors.length}</div>
            <div className="mt-1 text-sm text-slate-600">{r.lowBehaviors.join(', ') || 'None'}</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-500">Low behavior threshold used: {computed.threshold} / 15</div>
      </Card>

      <Card title="Executive Narrative">
        <p className="leading-relaxed">{r.executiveNarrative}</p>
      </Card>

      <Card title="Next 30 Days">
        <ol className="list-decimal pl-5 space-y-2">
          {r.next30DayActions.map((a, i) => (
            <li key={i} className="leading-relaxed">
              {a}
            </li>
          ))}
        </ol>
      </Card>

      <Card title="Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-md border p-4">
            <div className="font-semibold">Self-Perception</div>
            <ul className="mt-2 text-sm space-y-1">
              <li>
                Kickoff (Q1): <span className="font-semibold">{r.selfPerceptionKickoff}</span> / 10
              </li>
              <li>
                Final (Q20): <span className="font-semibold">{r.selfPerceptionFinal}</span> / 10
              </li>
              <li>
                Average: <span className="font-semibold">{r.selfPerceptionAverage.toFixed(1)}</span> / 10
              </li>
            </ul>
          </div>
          <div className="rounded-md border p-4">
            <div className="font-semibold">Behavioral</div>
            <ul className="mt-2 text-sm space-y-1">
              <li>
                Raw: <span className="font-semibold">{r.behavioralRawScore}</span> / 90
              </li>
              <li>
                Percent: <span className="font-semibold">{formatPercent(r.behavioralPercentScore)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-md border p-4">
          <div className="font-semibold">Behavior scores (out of 15)</div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {(Object.keys(r.behaviorScores) as BehaviorKey[]).map((k) => {
              const v = r.behaviorScores[k];
              const isLow = r.lowBehaviors.includes(k);
              return (
                <div key={k} className={'rounded-md border p-3 ' + (isLow ? 'border-amber-500 bg-amber-50' : '')}>
                  <div className="text-xs text-slate-600">{k} — {behaviorLabel(k)}</div>
                  <div className="text-xl font-bold">{v} / 15</div>
                  {isLow ? (
                    <div className="text-xs text-amber-700">Low (≤ {computed.threshold})</div>
                  ) : (
                    <div className="text-xs text-slate-500">Not low</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="font-semibold">Selected guidance (1–3 cards)</div>
          {computed.guidanceCards.map((c) => {
            const warn = splitLines(c.whatTeamSees).flatMap((s) => s.split(/\.\s+/)).map((s) => s.trim()).filter(Boolean).slice(0, 5);
            const todo = splitLines(c.whatToDo).map((s) => s.replace(/^•\s?/, '').trim()).filter(Boolean);
            const talk = splitLines(c.commonSelfTalkTraps).map((s) => s.replace(/^•\s?/, '').trim()).filter(Boolean);
            const counter = splitLines(c.counterQuestions).map((s) => s.replace(/^•\s?/, '').trim()).filter(Boolean);
            return (
              <Card key={c.key} title={`${c.key}: ${c.leaderType}`}>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600">
                    Low behaviors: <span className="font-semibold">{c.lowBehaviors.split('').join(' + ')}</span>
                  </p>
                  <div>
                    <div className="font-semibold">Profile description</div>
                    <p className="mt-1 text-sm leading-relaxed">{c.leaderTypeDescription}</p>
                  </div>
                  <div>
                    <div className="font-semibold">Early warning signs (derived from “What the Team Sees”)</div>
                    <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
                      {warn.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">What to do next</div>
                    <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
                      {todo.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">What progress looks like (when “What to do next” is happening)</div>
                    <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
                      {todo.slice(0, 3).map((t, i) => (
                        <li key={i}>You consistently {t.charAt(0).toLowerCase() + t.slice(1)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold">Common self-talk traps</div>
                      <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
                        {talk.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold">Counter-questions</div>
                      <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
                        {counter.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

import { getLowBehaviorThreshold } from '@/lib/config';
import type { AssessmentQuestion, BehaviorKey, ComputedResults, PairingGuidance } from '@/lib/types';

export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export function splitLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function behaviorLabel(k: BehaviorKey): string {
  return (
    {
      A: 'Aware',
      D: 'Decisive',
      E: 'Empowering',
      T: 'Trustworthy',
      I: 'Inspiring',
      S: 'Stewarding'
    } as const
  )[k];
}

export function scoreBand(percent: number): 'Strong' | 'Developing' | 'At risk' {
  if (percent >= 80) return 'Strong';
  if (percent >= 65) return 'Developing';
  return 'At risk';
}

export function gapLabel(gap: number): ComputedResults['gapLabel'] {
  if (Math.abs(gap) <= 5) return 'Aligned';
  return gap > 5 ? 'Self-perception higher' : 'Self-perception lower';
}

export function computeResults(
  questions: AssessmentQuestion[],
  answers: Record<string, number>,
  guidanceByKey: Record<string, PairingGuidance>,
  thresholdOverride?: number
): ComputedResults {
  const threshold =
    typeof thresholdOverride === 'number' && Number.isFinite(thresholdOverride)
      ? Math.floor(thresholdOverride)
      : getLowBehaviorThreshold();

  const q = (id: string) => answers[id];

  const selfPerceptionKickoff = clamp(q('Q1') ?? 1, 1, 10);
  const selfPerceptionFinal = clamp(q('Q20') ?? 1, 1, 10);
  const selfPerceptionAverage = round1((selfPerceptionKickoff + selfPerceptionFinal) / 2);
  const selfPerceptionPercentScore = round1((selfPerceptionAverage / 10) * 100);

  // Behavioral raw score is Q2..Q19 inclusive.
  const behavioralIds = questions
    .filter((x) => x.id !== 'Q1' && x.id !== 'Q20')
    .map((x) => x.id);
  const behavioralRawScore = behavioralIds.reduce((sum, id) => sum + clamp(q(id) ?? 1, 1, 5), 0);
  const behavioralPercentScore = round1((behavioralRawScore / 90) * 100);

  const behaviorScores: Record<BehaviorKey, number> = { A: 0, D: 0, E: 0, T: 0, I: 0, S: 0 };
  for (const qq of questions) {
    if (!qq.behaviorKey) continue;
    behaviorScores[qq.behaviorKey] += clamp(q(qq.id) ?? 1, 1, 5);
  }

  const lowBehaviors = (Object.keys(behaviorScores) as BehaviorKey[]).filter(
    (k) => behaviorScores[k] <= threshold
  );

  const perceptionVsBehaviorGap = round1(selfPerceptionPercentScore - behavioralPercentScore);
  const gapLbl = gapLabel(perceptionVsBehaviorGap);

  const { lowPairingsShown, selectedGuidance } = selectGuidance(lowBehaviors, behaviorScores, guidanceByKey);

  const executiveNarrative = buildExecutiveNarrative({
    behavioralPercentScore,
    selfPerceptionPercentScore,
    gapLabel: gapLbl,
    lowBehaviors,
    selectedGuidance
  });

  const next30DayActions = buildNext30DayActions({
    lowBehaviors,
    behaviorScores,
    selectedGuidance,
    guidanceByKey
  });

  return {
    lowBehaviorThreshold: threshold,

    behavioralRawScore,
    behavioralPercentScore,

    selfPerceptionKickoff,
    selfPerceptionFinal,
    selfPerceptionAverage,
    selfPerceptionPercentScore,

    perceptionVsBehaviorGap,
    gapLabel: gapLbl,

    behaviorScores,
    lowBehaviors,
    lowPairingsShown,

    executiveNarrative,
    next30DayActions
  };
}

function normalizePairKey(a: string, b: string): string {
  return [a, b].sort().join('');
}

function selectGuidance(
  lowBehaviors: BehaviorKey[],
  behaviorScores: Record<BehaviorKey, number>,
  guidanceByKey: Record<string, PairingGuidance>
): { lowPairingsShown: string[]; selectedGuidance: PairingGuidance[] } {
  if (lowBehaviors.length === 0) return { lowPairingsShown: [], selectedGuidance: [] };

  if (lowBehaviors.length === 1) {
    const k = lowBehaviors[0];
    const g = guidanceByKey[k];
    return g ? { lowPairingsShown: [g.key], selectedGuidance: [g] } : { lowPairingsShown: [k], selectedGuidance: [] };
  }

  const candidates: { key: string; combined: number; g: PairingGuidance }[] = [];
  for (let i = 0; i < lowBehaviors.length; i++) {
    for (let j = i + 1; j < lowBehaviors.length; j++) {
      const a = lowBehaviors[i];
      const b = lowBehaviors[j];
      const key = normalizePairKey(a, b);
      const g = guidanceByKey[key];
      if (!g) continue;
      candidates.push({ key, combined: behaviorScores[a] + behaviorScores[b], g });
    }
  }

  candidates.sort((x, y) => x.combined - y.combined);

  if (candidates.length === 0) {
    const singles = [...lowBehaviors]
      .sort((a, b) => behaviorScores[a] - behaviorScores[b])
      .slice(0, 3)
      .map((k) => guidanceByKey[k])
      .filter(Boolean) as PairingGuidance[];
    return { lowPairingsShown: singles.map((s) => s.key), selectedGuidance: singles };
  }

  const selected: typeof candidates = [];
  const cutoff = candidates[Math.min(2, candidates.length - 1)].combined;
  for (const c of candidates) {
    if (selected.length < 3) {
      selected.push(c);
      continue;
    }
    if (c.combined === cutoff) selected.push(c);
  }

  const top = selected.slice(0, 3);
  return { lowPairingsShown: top.map((x) => x.g.key), selectedGuidance: top.map((x) => x.g) };
}

function buildExecutiveNarrative(args: {
  behavioralPercentScore: number;
  selfPerceptionPercentScore: number;
  gapLabel: ComputedResults['gapLabel'];
  lowBehaviors: BehaviorKey[];
  selectedGuidance: PairingGuidance[];
}): string {
  const band = scoreBand(args.behavioralPercentScore);
  const gap = args.gapLabel;

  const sentence1 = `Overall leadership signal: ${band} (behavioral score ${args.behavioralPercentScore}%).`;

  let sentence2 = '';
  if (gap === 'Aligned') {
    sentence2 = `Your self-perception is closely aligned with your behavioral pattern (self-perception ${args.selfPerceptionPercentScore}%).`;
  } else if (gap === 'Self-perception higher') {
    sentence2 = `Your self-perception scores higher than your behavioral pattern, which can indicate blind spots or inconsistent execution under pressure.`;
  } else {
    sentence2 = `Your self-perception scores lower than your behavioral pattern, which can indicate you are being harder on yourself than your day-to-day behaviors reflect.`;
  }

  if (args.lowBehaviors.length === 0) {
    const sentence3 = `No behaviors were flagged as low at the current threshold—this is a “raise the ceiling” opportunity.`;
    const sentence4 = `Next 30 days: pick a higher bar and practice the habits that strengthen your strongest areas into repeatable systems.`;
    return [sentence1, sentence2, sentence3, sentence4].join(' ');
  }

  const topLow = args.lowBehaviors.slice(0, 3).map((k) => behaviorLabel(k));
  const sentence3 = `Priority low behaviors: ${topLow.join(', ')}.`;

  const teamLens = args.selectedGuidance[0]?.whatTeamSees;
  const teamSnippet = teamLens ? splitLines(teamLens).slice(0, 2).join(' ') : 'reduced clarity, slower momentum, and weaker ownership in the team.';

  const sentence4 = `To a team, this often looks like: ${teamSnippet}`;
  const sentence5 = `Next 30 days: focus on 1–2 repeatable actions from the guidance below and track them weekly until they become consistent.`;

  return [sentence1, sentence2, sentence3, sentence4, sentence5].join(' ');
}

function buildNext30DayActions(args: {
  lowBehaviors: BehaviorKey[];
  behaviorScores: Record<BehaviorKey, number>;
  selectedGuidance: PairingGuidance[];
  guidanceByKey: Record<string, PairingGuidance>;
}): string[] {
  if (args.selectedGuidance.length > 0) {
    const actions: string[] = [];
    for (const g of args.selectedGuidance) {
      for (const line of splitLines(g.whatToDo)) {
        const cleaned = line.replace(/^•\s?/, '').trim();
        if (!cleaned) continue;
        if (!actions.includes(cleaned)) actions.push(cleaned);
        if (actions.length >= 3) return actions;
      }
    }
    return actions.slice(0, 3);
  }

  const top = (Object.keys(args.behaviorScores) as BehaviorKey[])
    .sort((a, b) => args.behaviorScores[b] - args.behaviorScores[a])
    .slice(0, 2);

  const raise: string[] = [];
  for (const k of top) {
    const g = args.guidanceByKey[k];
    if (!g) continue;
    for (const line of splitLines(g.whatToDo)) {
      const cleaned = line.replace(/^•\s?/, '').trim();
      if (!cleaned) continue;
      if (!raise.includes(cleaned)) raise.push(cleaned);
      if (raise.length >= 3) return raise;
    }
  }

  return [
    'Pick one leadership habit to practice daily and track it visibly for 30 days.',
    'Ask for one piece of candid feedback each week and close the loop within 72 hours.',
    'Define one clear standard and reinforce it consistently with follow-through.'
  ];
}

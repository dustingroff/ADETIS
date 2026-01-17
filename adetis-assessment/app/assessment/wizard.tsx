'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
import { QUESTIONS } from '../../data/questions';
import { getLowBehaviorThreshold } from '../../lib/config';
import { computeResults } from '../../lib/utils';
import { GUIDANCE_BY_KEY } from '../../lib/guidance';

type Intake = {
  name: string;
  discipline: string;
  building: string;
  cluster: string;
  website?: string; // honeypot
};

type Stored = {
  intake: Omit<Intake, 'website'>;
  answers: Record<string, number>;
  thresholdUsed: number;
  computed: any;
};

export default function Wizard() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0=intake, 1..20 questions
  const [intake, setIntake] = useState<Intake>({ name: '', discipline: '', building: '', cluster: '', website: '' });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const intakeValid = useMemo(
    () => intake.name.trim() && intake.discipline.trim() && intake.building.trim() && intake.cluster.trim(),
    [intake]
  );

  const qIndex = step - 1;
  const currentQ = step >= 1 ? QUESTIONS[qIndex] : null;
  const currentAnswer = currentQ ? answers[currentQ.id] : undefined;
  const isLast = step === QUESTIONS.length;

  function setAnswer(qid: string, value: number) {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  }

  async function handleSubmit() {
    setSubmitError(null);

    if (!intakeValid) return setSubmitError('Please complete all required fields.');
    for (const q of QUESTIONS) {
      if (typeof answers[q.id] !== 'number') return setSubmitError('Please answer all questions.');
    }

    // honeypot
    if (intake.website && intake.website.trim()) return setSubmitError('Submission blocked.');

    const threshold = getLowBehaviorThreshold();
    const computed = computeResults(QUESTIONS, answers, GUIDANCE_BY_KEY, threshold);

    setSubmitting(true);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          intake,
          answers
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submit failed');

      const stored: Stored = {
        intake: { name: intake.name, discipline: intake.discipline, building: intake.building, cluster: intake.cluster },
        answers,
        thresholdUsed: threshold,
        computed
      };
      localStorage.setItem(`adetis:response:${data.responseId}`, JSON.stringify(stored));
      router.push(`/results/${data.responseId}`);
    } catch (e: any) {
      setSubmitError(e?.message || 'Submit failed');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {step === 0 ? (
        <Card title="Before you start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="space-y-1">
              <span className="text-sm font-medium">Name<span className="text-red-600">*</span></span>
              <input className="w-full rounded-md border px-3 py-2" value={intake.name} onChange={(e) => setIntake({ ...intake, name: e.target.value })} />
            </label>
            <label className="space-y-1">
              <span className="text-sm font-medium">Discipline<span className="text-red-600">*</span></span>
              <input className="w-full rounded-md border px-3 py-2" value={intake.discipline} onChange={(e) => setIntake({ ...intake, discipline: e.target.value })} />
            </label>
            <label className="space-y-1">
              <span className="text-sm font-medium">Building<span className="text-red-600">*</span></span>
              <input className="w-full rounded-md border px-3 py-2" value={intake.building} onChange={(e) => setIntake({ ...intake, building: e.target.value })} />
            </label>
            <label className="space-y-1">
              <span className="text-sm font-medium">Cluster<span className="text-red-600">*</span></span>
              <input className="w-full rounded-md border px-3 py-2" value={intake.cluster} onChange={(e) => setIntake({ ...intake, cluster: e.target.value })} />
            </label>

            {/* honeypot */}
            <label className="hidden">
              <span>Website</span>
              <input value={intake.website || ''} onChange={(e) => setIntake({ ...intake, website: e.target.value })} />
            </label>
          </div>

          <div className="mt-5 rounded-md border bg-slate-50 p-4 text-sm">
            <p className="font-medium">Consent</p>
            <p className="mt-1">Your responses will be stored for internal leadership development purposes.</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Threshold for “low behavior”: <span className="font-semibold">{getLowBehaviorThreshold()}</span> / 15
            </div>
            <button className="rounded-md bg-slate-900 px-4 py-2 text-white disabled:opacity-50" disabled={!intakeValid} onClick={() => setStep(1)}>
              Start Assessment
            </button>
          </div>
        </Card>
      ) : (
        <Card title={step === 1 ? 'Kickoff Self-Perception (Q1)' : step === QUESTIONS.length ? 'Final Self-Perception (Q20)' : `Question ${step} of ${QUESTIONS.length}`}>
          {currentQ && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold tracking-wide text-slate-500">{currentQ.sectionTitle}</div>
                <div className="text-lg font-semibold leading-snug whitespace-pre-line">{currentQ.prompt}</div>
              </div>

              <div className="rounded-md border p-4">
                <div className="text-sm font-medium">Your score</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {Array.from({ length: currentQ.scale.max - currentQ.scale.min + 1 }, (_, i) => currentQ.scale.min + i).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setAnswer(currentQ.id, n)}
                      className={
                        'h-10 w-10 rounded-md border text-sm font-semibold ' +
                        (currentAnswer === n ? 'bg-slate-900 text-white border-slate-900' : 'bg-white hover:bg-slate-50')
                      }
                      aria-pressed={currentAnswer === n}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-xs text-slate-500">Scale: {currentQ.scale.min}–{currentQ.scale.max}</div>
              </div>

              {submitError ? <div className="text-sm text-red-700">{submitError}</div> : null}

              <div className="flex items-center justify-between">
                <button className="rounded-md border px-4 py-2" onClick={() => setStep((s) => Math.max(0, s - 1))}>
                  Back
                </button>

                {!isLast ? (
                  <button className="rounded-md bg-slate-900 px-4 py-2 text-white disabled:opacity-50" disabled={typeof currentAnswer !== 'number'} onClick={() => setStep((s) => Math.min(QUESTIONS.length, s + 1))}>
                    Next
                  </button>
                ) : (
                  <button className="rounded-md bg-emerald-700 px-4 py-2 text-white disabled:opacity-50" disabled={typeof currentAnswer !== 'number' || submitting} onClick={handleSubmit}>
                    {submitting ? 'Submitting…' : 'Submit & View Results'}
                  </button>
                )}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

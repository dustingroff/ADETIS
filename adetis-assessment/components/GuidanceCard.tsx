import type { PairingGuidance } from '@/lib/types';
import { splitLines } from '@/lib/utils';

function BulletList({ text }: { text: string }) {
  const lines = splitLines(text).map((l) => l.replace(/^•\s?/, '').trim());
  return (
    <ul className="list-disc space-y-1 pl-5">
      {lines.map((l, i) => (
        <li key={i}>{l}</li>
      ))}
    </ul>
  );
}

export function GuidanceCard({ g }: { g: PairingGuidance }) {
  const earlyWarning = splitLines(g.whatTeamSees).slice(0, 5).join('\n');
  const progressProxy = splitLines(g.whatToDo).slice(0, 5).join('\n');

  return (
    <section className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{g.leaderType}</h3>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Low behaviors: {g.lowBehaviors}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-700">{g.leaderTypeDescription}</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold">What the team experiences</h4>
          <p className="mt-1 whitespace-pre-line text-sm text-slate-700">{g.whatTeamSees}</p>

          <h4 className="mt-4 text-sm font-semibold">Early warning signs</h4>
          <p className="mt-1 whitespace-pre-line text-sm text-slate-700">{earlyWarning}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">What to do next</h4>
          <div className="mt-1 text-sm text-slate-700">
            <BulletList text={g.whatToDo} />
          </div>

          <h4 className="mt-4 text-sm font-semibold">What progress looks like</h4>
          <p className="mt-1 whitespace-pre-line text-sm text-slate-700">{progressProxy}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold">Common self-talk traps</h4>
          <div className="mt-1 text-sm text-slate-700">
            <BulletList text={g.commonSelfTalkTraps} />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Counter-questions</h4>
          <div className="mt-1 text-sm text-slate-700">
            <BulletList text={g.counterQuestions} />
          </div>
        </div>
      </div>
    </section>
  );
}

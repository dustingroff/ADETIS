import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Start</h2>
        <p className="mt-2 text-sm text-slate-700">
          Before the assessment, we collect basic context (Name, Discipline, Building, Cluster). Then you’ll answer
          Q1, the behavioral questions (Q2–Q19), and Q20.
        </p>
        <div className="mt-4">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
          >
            Begin Assessment
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold">Consent</h3>
        <p className="mt-2 text-sm text-slate-700">
          Your responses will be stored for internal leadership development purposes.
        </p>
      </section>
    </main>
  );
}

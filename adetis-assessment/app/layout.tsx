import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADETIS Leadership Assessment',
  description: 'ADETIS leadership assessment and results',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">ADETIS Leadership Assessment</h1>
            <p className="text-slate-600">Internal leadership development tool</p>
          </header>
          {children}
          <footer className="mt-10 text-xs text-slate-500">
            <p>Print-friendly results available after submission.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

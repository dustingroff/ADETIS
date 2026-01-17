import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import { submitSchema } from '@/lib/validation';
import { QUESTIONS } from '@/data/questions';
import { GUIDANCE_BY_KEY } from '@/lib/guidance';
import { computeResults } from '@/lib/utils';
import { getLowBehaviorThreshold } from '@/lib/config';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = submitSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload', details: parsed.error.issues }, { status: 400 });
    }

    // Honeypot anti-spam (kept in intake.website)
    if (parsed.data.intake.website && parsed.data.intake.website.trim().length > 0) {
      return NextResponse.json({ ok: true, spam: true }, { status: 200 });
    }

    const responseId = uuidv4();
    const timestamp = new Date().toISOString();
    const thresholdUsed = getLowBehaviorThreshold();

    // Recompute server-side for integrity
    const computed = computeResults(QUESTIONS, parsed.data.answers, GUIDANCE_BY_KEY, thresholdUsed);

    const payloadToStore = {
      timestamp,
      responseId,
      intake: {
        name: parsed.data.intake.name,
        discipline: parsed.data.intake.discipline,
        building: parsed.data.intake.building,
        cluster: parsed.data.intake.cluster
      },
      answers: parsed.data.answers,
      computed
    };

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    const secret = process.env.APPS_SCRIPT_SECRET;

    if (!scriptUrl || !secret) {
      return NextResponse.json(
        { error: 'Missing GOOGLE_APPS_SCRIPT_URL or APPS_SCRIPT_SECRET on server' },
        { status: 500 }
      );
    }

    const r = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ADETIS-SECRET': secret
      },
      body: JSON.stringify(payloadToStore)
    });

    if (!r.ok) {
      const txt = await r.text();
      return NextResponse.json({ error: 'Sheet append failed', details: txt }, { status: 502 });
    }

    return NextResponse.json({ ok: true, responseId }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}

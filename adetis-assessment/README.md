# ADETIS Leadership Assessment (Next.js + TypeScript + Tailwind)

Production-ready web app that:
- Collects **Name, Discipline, Building, Cluster** (required)
- Runs the assessment in the required structure:
  1) **Q1** kickoff (1–10)
  2) **Q2–Q19** behavioral (1–5 each; 6 behaviors × 3 questions)
  3) **Q20** final (1–10)
- Computes behavioral vs self-perception scores + a clear alignment gap
- Flags “low behaviors” using **one master threshold** (default 11)
- Selects 1–3 **most relevant** low pairings by lowest combined behavior score
- Shows an executive-ready results page + print-friendly cards
- Appends every submission to Google Sheets via a **server-only** integration (no creds in frontend)

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables
- `GOOGLE_APPS_SCRIPT_URL` **(required)**: your Apps Script Web App URL
- `APPS_SCRIPT_SECRET` **(required)**: shared secret validated by Apps Script
- Low behavior threshold override (optional):
  - `NEXT_PUBLIC_LOW_BEHAVIOR_THRESHOLD` (client+server) **or**
  - `LOW_BEHAVIOR_THRESHOLD` (server only)

## Google Sheets setup (simplest secure option)
1. Create a Google Sheet.
2. In Google Drive → **New → Apps Script**.
3. Paste the contents of `scripts/google-apps-script.gs`.
4. Set **Script Property**:
   - Apps Script → **Project Settings** → **Script properties** → add `APPS_SCRIPT_SECRET`.
5. Deploy:
   - **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone with the link**
   - Copy the **Web app URL** into `GOOGLE_APPS_SCRIPT_URL`.
6. In the Apps Script file, update the `SHEET_NAME` constant if needed.

## Deployment (Vercel)
1. Push this repo to GitHub.
2. In Vercel: **New Project → Import**.
3. Add env vars in **Project Settings → Environment Variables**:
   - `GOOGLE_APPS_SCRIPT_URL`
   - `APPS_SCRIPT_SECRET`
   - (optional) `NEXT_PUBLIC_LOW_BEHAVIOR_THRESHOLD`
4. Deploy.

## Updating questions / pairings / threshold later
- **Questions**: edit `data/questions.ts` (wording + order must match `ADETIS questions.pdf`).
- **Low pairings content**: edit/regenerate `data/lowBehaviors.ts`.
  - A helper script is provided: `scripts/extract_low_behaviors.py`.
- **Threshold**:
  - Change once in env var (`NEXT_PUBLIC_LOW_BEHAVIOR_THRESHOLD` or `LOW_BEHAVIOR_THRESHOLD`) and redeploy.
  - The threshold used is stored in each row for auditability.

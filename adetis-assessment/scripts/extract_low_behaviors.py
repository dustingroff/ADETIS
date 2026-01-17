"""Extract the Low Behaviors / Pairings table from the provided PDF into a TS file.

Usage:
  python scripts/extract_low_behaviors.py \
    --pdf "../ADETIS Low Behaviors.pdf" \
    --out "../data/lowBehaviors.ts"

Notes:
- This relies on the PDF having clear table lines.
- It preserves wording and line breaks as returned by pdfplumber.
"""

import argparse
import json
from pathlib import Path

import pdfplumber


def extract_rows(pdf_path: Path):
    rows = []
    with pdfplumber.open(pdf_path) as pdf:
        for p in pdf.pages:
            tables = p.extract_tables(
                {
                    "vertical_strategy": "lines",
                    "horizontal_strategy": "lines",
                    "intersection_tolerance": 5,
                    "snap_tolerance": 3,
                    "join_tolerance": 3,
                    "edge_min_length": 3,
                    "min_words_vertical": 3,
                    "min_words_horizontal": 1,
                }
            )
            for t in tables:
                # rows look like: [row#, LowBehaviors, LeaderType, Desc, TeamSees, WhatToDo, SelfTalk, Counter]
                for r in t[2:]:
                    if not r or len(r) < 8:
                        continue
                    key = (r[1] or "").strip()
                    if not key:
                        continue
                    rows.append(
                        {
                            "key": key,
                            "lowBehaviors": key,
                            "leaderType": (r[2] or "").strip(),
                            "leaderTypeDescription": (r[3] or "").strip(),
                            "whatTeamSees": (r[4] or "").strip(),
                            "whatToDo": (r[5] or "").strip(),
                            "commonSelfTalkTraps": (r[6] or "").strip(),
                            "counterQuestions": (r[7] or "").strip(),
                        }
                    )
    # de-dupe by key, keep first
    seen = {}
    for r in rows:
        seen.setdefault(r["key"], r)
    return list(seen.values())


def to_ts(rows):
    def esc(s: str):
        return s.replace("\\", "\\\\").replace("`", "\\`")

    lines = []
    lines.append("import type { PairingGuidance } from '@/lib/types';")
    lines.append("// Auto-extracted from ADETIS Low Behaviors.pdf. Do not hand-edit unless you know what you're doing.")
    lines.append("")
    lines.append("export const LOW_BEHAVIORS: PairingGuidance[] = [")
    for r in rows:
        lines.append("  {")
        for k in [
            "key",
            "lowBehaviors",
            "leaderType",
            "leaderTypeDescription",
            "whatTeamSees",
            "whatToDo",
            "commonSelfTalkTraps",
            "counterQuestions",
        ]:
            lines.append(f"    {k}: `{esc(r[k])}`,")
        lines.append("  },")
    lines.append("];\n")
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    pdf_path = Path(args.pdf)
    out_path = Path(args.out)

    rows = extract_rows(pdf_path)
    out_path.write_text(to_ts(rows), encoding="utf-8")
    print(f"Wrote {len(rows)} rows to {out_path}")


if __name__ == "__main__":
    main()

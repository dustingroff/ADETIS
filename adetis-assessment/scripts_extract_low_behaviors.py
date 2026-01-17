import pdfplumber, json

PDF_PATH = '/mnt/data/ADETIS Low Behaviors.pdf'

rows=[]
with pdfplumber.open(PDF_PATH) as pdf:
    for p in pdf.pages:
        tables=p.extract_tables({
            'vertical_strategy':'lines',
            'horizontal_strategy':'lines',
            'intersection_tolerance':5,
            'snap_tolerance':3,
            'join_tolerance':3,
            'edge_min_length':3,
            'min_words_vertical':3,
            'min_words_horizontal':1,
        })
        if not tables:
            continue
        t=tables[0]
        for r in t[2:]:
            if not r or not r[1] or r[1]=='Low Behaviors':
                continue
            rows.append({
                'lowBehaviors': (r[1] or '').strip(),
                'leaderType': (r[2] or '').strip(),
                'leaderTypeDescription': (r[3] or '').strip(),
                'whatTeamSees': (r[4] or '').strip(),
                'whatToDo': (r[5] or '').strip(),
                'commonSelfTalkTraps': (r[6] or '').strip(),
                'counterQuestions': (r[7] or '').strip(),
            })

# Deduplicate by lowBehaviors, keeping first occurrence
seen=set()
out=[]
for r in rows:
    k=r['lowBehaviors']
    if k in seen:
        continue
    seen.add(k)
    out.append({
        'key': k,
        **r
    })

print('items',len(out))
print(out[0]['key'],out[0]['leaderType'])

with open('/mnt/data/adetis-assessment/data/lowBehaviors.generated.json','w') as f:
    json.dump(out,f,ensure_ascii=False,indent=2)

import type { AssessmentQuestion } from '@/lib/types';

// Source of truth: ADETIS questions.pdf (wording/order preserved).

export const QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'Q1',
    sectionTitle: 'Kickoff Self-Perception',
    prompt:
      'How would I rate the overall health and stability of my team or organization?\n\nConsider all employees under your influence — not just your direct reports.',
    scale: { min: 1, max: 10 }
  },

  // A — Aware
  {
    id: 'Q2',
    sectionTitle: 'A — Aware',
    prompt:
      'How clearly can I identify which people on my team are thriving, which are struggling, and which are at risk — and explain why for each?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'A'
  },
  {
    id: 'Q3',
    sectionTitle: 'A — Aware',
    prompt:
      'How quickly do I notice changes in a person’s engagement, performance, or behavior before outcomes are impacted?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'A'
  },
  {
    id: 'Q4',
    sectionTitle: 'A — Aware',
    prompt:
      'How often do I pause to ask whether a people issue is an isolated moment or part of a larger pattern I’ve been tolerating?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'A'
  },

  // D — Decisive
  {
    id: 'Q5',
    sectionTitle: 'D — Decisive',
    prompt:
      'How often do I delay a decision I know needs to be made because I want to avoid discomfort, conflict, or emotional fallout?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'D'
  },
  {
    id: 'Q6',
    sectionTitle: 'D — Decisive',
    prompt:
      'When someone remains in a “yellow” state for too long, do I actively resolve it — or allow it to drift?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'D'
  },
  {
    id: 'Q7',
    sectionTitle: 'D — Decisive',
    prompt:
      'How often do my conversations create real momentum because I step into decisions with ownership rather than looking for cover?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'D'
  },

  // E — Empowering
  {
    id: 'Q8',
    sectionTitle: 'E — Empowering',
    prompt:
      'How often do I intentionally give people real ownership of decisions or outcomes rather than keeping control myself?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'E'
  },
  {
    id: 'Q9',
    sectionTitle: 'E — Empowering',
    prompt:
      'How willing am I to let people struggle, learn, and even fail within clear boundaries rather than stepping in too quickly?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'E'
  },
  {
    id: 'Q10',
    sectionTitle: 'E — Empowering',
    prompt:
      'How consistently do I invest time in building others’ capability so they can succeed without my involvement?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'E'
  },

  // T — Trustworthy
  {
    id: 'Q11',
    sectionTitle: 'T — Trustworthy',
    prompt:
      'How consistent am I in upholding stated standards and expectations when doing so creates discomfort, resistance, or personal cost?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'T'
  },
  {
    id: 'Q12',
    sectionTitle: 'T — Trustworthy',
    prompt:
      'When I commit to a person, decision, or standard, how reliable am I in following through without needing reminders, pressure, or escalation?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'T'
  },
  {
    id: 'Q13',
    sectionTitle: 'T — Trustworthy',
    prompt:
      'How safe do people feel being honest with me even when the truth is hard to hear or reflects poorly on me?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'T'
  },

  // I — Inspiring
  {
    id: 'Q14',
    sectionTitle: 'I — Inspiring',
    prompt:
      'How often do I connect everyday work and expectations to a deeper purpose that matters to the people I lead?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'I'
  },
  {
    id: 'Q15',
    sectionTitle: 'I — Inspiring',
    prompt:
      'How consistently do I recognize and reinforce behaviors that reflect our values — not just outcomes or results?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'I'
  },
  {
    id: 'Q16',
    sectionTitle: 'I — Inspiring',
    prompt:
      'How often do people leave interactions with me feeling clearer, more hopeful, or more committed — even when the message is difficult?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'I'
  },

  // S — Stewarding
  {
    id: 'Q17',
    sectionTitle: 'S — Stewarding',
    prompt:
      'How often do I make decisions based on what is best for the long-term health of the team or organization — not what is easiest, fastest, or most self-protective in the moment?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'S'
  },
  {
    id: 'Q18',
    sectionTitle: 'S — Stewarding',
    prompt:
      'How intentional am I about developing others who could step into key roles — including my own — if needed?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'S'
  },
  {
    id: 'Q19',
    sectionTitle: 'S — Stewarding',
    prompt:
      'How well do I treat people, roles, and resources as something I am temporarily responsible for, leaving them stronger than I found them?',
    scale: { min: 1, max: 5 },
    behaviorKey: 'S'
  },

  {
    id: 'Q20',
    sectionTitle: 'Final Self-Perception',
    prompt:
      'How consistent is my leadership behavior across pressure, time, and people?\n\nConsider whether your awareness, decisiveness, empowerment, follow-through, inspiration, and stewardship remain present:\n\n• During high stress or survey pressure\n• With struggling team members\n• When outcomes are at risk\n• When you are tired or overloaded\n• When your presence is minimal\n\nRate the overall consistency of your leadership across these contexts.',
    scale: { min: 1, max: 10 }
  }
];

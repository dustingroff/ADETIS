export type BehaviorKey = 'A' | 'D' | 'E' | 'T' | 'I' | 'S';

export type QuestionScale = {
  min: number;
  max: number;
  labels?: { minLabel?: string; maxLabel?: string };
};

export type AssessmentQuestion = {
  id: 'Q1' | 'Q20' | `Q${2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19}`;
  sectionTitle: string;
  prompt: string;
  scale: QuestionScale;
  behaviorKey?: BehaviorKey; // present only for Q2–Q19
};

export type PairingGuidance = {
  key: string; // e.g., A, AD, AEI, ADETS, etc.
  lowBehaviors: string;
  leaderType: string;
  leaderTypeDescription: string;
  whatTeamSees: string;
  whatToDo: string;
  commonSelfTalkTraps: string;
  counterQuestions: string;
};

export type Submission = {
  responseId: string;
  timestamp: string;
  name: string;
  discipline: string;
  building: string;
  cluster: string;
  answers: Record<string, number>;
  computed: ComputedResults;
};

export type ComputedResults = {
  lowBehaviorThreshold: number;

  behavioralRawScore: number; // 0–90
  behavioralPercentScore: number; // 0–100

  selfPerceptionKickoff: number; // 1–10
  selfPerceptionFinal: number; // 1–10
  selfPerceptionAverage: number; // 1–10
  selfPerceptionPercentScore: number; // 0–100

  perceptionVsBehaviorGap: number; // points
  gapLabel: 'Self-perception higher' | 'Self-perception lower' | 'Aligned';

  behaviorScores: Record<BehaviorKey, number>; // each 0–15
  lowBehaviors: BehaviorKey[];
  lowPairingsShown: string[]; // keys

  executiveNarrative: string;
  next30DayActions: string[];
};

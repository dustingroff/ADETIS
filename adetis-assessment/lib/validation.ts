import { z } from 'zod';

export const intakeSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  discipline: z.string().min(1, 'Discipline is required').max(100),
  building: z.string().min(1, 'Building is required').max(100),
  cluster: z.string().min(1, 'Cluster is required').max(100),
  // Honeypot
  website: z.string().optional().default('')
});

export const answersSchema = z.record(z.string(), z.number());

export const submitSchema = z.object({
  intake: intakeSchema,
  answers: answersSchema,
  computed: z.any() // server re-computes anyway; kept for debugging
});

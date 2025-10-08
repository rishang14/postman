import * as z from 'zod';
export const RequestrunDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  requestid: z.string(),
  request: z.unknown(),
  status: z.number().int(),
  statusText: z.string().optional(),
  headers: z.unknown().optional(),
  body: z.string().optional(),
  durationMs: z.number().int().optional(),
  createdAt: z.date()
}));
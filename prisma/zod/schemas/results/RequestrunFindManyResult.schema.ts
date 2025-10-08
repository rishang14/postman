import * as z from 'zod';
export const RequestrunFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  requestid: z.string(),
  request: z.unknown(),
  status: z.number().int(),
  statusText: z.string().optional(),
  headers: z.unknown().optional(),
  body: z.string().optional(),
  durationMs: z.number().int().optional(),
  createdAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});
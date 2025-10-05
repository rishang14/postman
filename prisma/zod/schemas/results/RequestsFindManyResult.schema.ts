import * as z from 'zod';
export const RequestsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  method: z.unknown(),
  collectionId: z.string(),
  collection: z.unknown(),
  url: z.string(),
  parameters: z.unknown().optional(),
  headers: z.unknown().optional(),
  saved: z.boolean(),
  body: z.unknown().optional(),
  response: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
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
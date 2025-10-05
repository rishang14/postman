import * as z from 'zod';
export const RequestsCreateResultSchema = z.object({
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
});
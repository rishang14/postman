import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  method: z.literal(true).optional(),
  collectionId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  parameters: z.literal(true).optional(),
  headers: z.literal(true).optional(),
  saved: z.literal(true).optional(),
  requestrun: z.literal(true).optional(),
  body: z.literal(true).optional(),
  response: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RequestsCountAggregateInputObjectSchema: z.ZodType<Prisma.RequestsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCountAggregateInputType>;
export const RequestsCountAggregateInputObjectZodSchema = makeSchema();

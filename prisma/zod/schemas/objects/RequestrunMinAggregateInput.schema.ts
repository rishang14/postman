import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  requestid: z.literal(true).optional(),
  status: z.literal(true).optional(),
  statusText: z.literal(true).optional(),
  body: z.literal(true).optional(),
  durationMs: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const RequestrunMinAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunMinAggregateInputType>;
export const RequestrunMinAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  status: z.literal(true).optional(),
  durationMs: z.literal(true).optional()
}).strict();
export const RequestrunAvgAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunAvgAggregateInputType>;
export const RequestrunAvgAggregateInputObjectZodSchema = makeSchema();

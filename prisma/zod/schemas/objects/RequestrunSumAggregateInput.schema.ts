import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  status: z.literal(true).optional(),
  durationMs: z.literal(true).optional()
}).strict();
export const RequestrunSumAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunSumAggregateInputType>;
export const RequestrunSumAggregateInputObjectZodSchema = makeSchema();

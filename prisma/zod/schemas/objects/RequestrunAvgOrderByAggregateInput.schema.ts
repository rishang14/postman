import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  status: SortOrderSchema.optional(),
  durationMs: SortOrderSchema.optional()
}).strict();
export const RequestrunAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunAvgOrderByAggregateInput>;
export const RequestrunAvgOrderByAggregateInputObjectZodSchema = makeSchema();

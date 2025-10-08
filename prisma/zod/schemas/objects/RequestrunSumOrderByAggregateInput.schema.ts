import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  status: SortOrderSchema.optional(),
  durationMs: SortOrderSchema.optional()
}).strict();
export const RequestrunSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunSumOrderByAggregateInput>;
export const RequestrunSumOrderByAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  requestid: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  statusText: SortOrderSchema.optional(),
  body: SortOrderSchema.optional(),
  durationMs: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const RequestrunMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunMinOrderByAggregateInput>;
export const RequestrunMinOrderByAggregateInputObjectZodSchema = makeSchema();

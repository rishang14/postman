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
export const RequestrunMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunMaxOrderByAggregateInput>;
export const RequestrunMaxOrderByAggregateInputObjectZodSchema = makeSchema();

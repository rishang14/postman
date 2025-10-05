import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  collectionId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  saved: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RequestsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsMinOrderByAggregateInput>;
export const RequestsMinOrderByAggregateInputObjectZodSchema = makeSchema();

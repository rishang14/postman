import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  collectionId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RequestsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsMaxOrderByAggregateInput>;
export const RequestsMaxOrderByAggregateInputObjectZodSchema = makeSchema();

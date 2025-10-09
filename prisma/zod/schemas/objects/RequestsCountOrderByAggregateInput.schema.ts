import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  collectionId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  parameters: SortOrderSchema.optional(),
  headers: SortOrderSchema.optional(),
  saved: SortOrderSchema.optional(),
  requestrun: SortOrderSchema.optional(),
  body: SortOrderSchema.optional(),
  response: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RequestsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RequestsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCountOrderByAggregateInput>;
export const RequestsCountOrderByAggregateInputObjectZodSchema = makeSchema();

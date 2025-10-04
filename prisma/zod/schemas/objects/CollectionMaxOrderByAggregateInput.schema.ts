import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CollectionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CollectionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionMaxOrderByAggregateInput>;
export const CollectionMaxOrderByAggregateInputObjectZodSchema = makeSchema();

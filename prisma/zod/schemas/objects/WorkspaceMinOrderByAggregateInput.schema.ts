import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkspaceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMinOrderByAggregateInput>;
export const WorkspaceMinOrderByAggregateInputObjectZodSchema = makeSchema();

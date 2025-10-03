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
export const WorkspaceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMaxOrderByAggregateInput>;
export const WorkspaceMaxOrderByAggregateInputObjectZodSchema = makeSchema();

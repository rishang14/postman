import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional()
}).strict();
export const WorkspaceMemberMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberMinOrderByAggregateInput>;
export const WorkspaceMemberMinOrderByAggregateInputObjectZodSchema = makeSchema();

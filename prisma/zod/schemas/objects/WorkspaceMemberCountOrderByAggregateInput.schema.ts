import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional()
}).strict();
export const WorkspaceMemberCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCountOrderByAggregateInput>;
export const WorkspaceMemberCountOrderByAggregateInputObjectZodSchema = makeSchema();

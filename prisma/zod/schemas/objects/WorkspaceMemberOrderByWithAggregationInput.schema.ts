import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkspaceMemberCountOrderByAggregateInputObjectSchema as WorkspaceMemberCountOrderByAggregateInputObjectSchema } from './WorkspaceMemberCountOrderByAggregateInput.schema';
import { WorkspaceMemberMaxOrderByAggregateInputObjectSchema as WorkspaceMemberMaxOrderByAggregateInputObjectSchema } from './WorkspaceMemberMaxOrderByAggregateInput.schema';
import { WorkspaceMemberMinOrderByAggregateInputObjectSchema as WorkspaceMemberMinOrderByAggregateInputObjectSchema } from './WorkspaceMemberMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkspaceMemberCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkspaceMemberMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkspaceMemberMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberOrderByWithAggregationInput>;
export const WorkspaceMemberOrderByWithAggregationInputObjectZodSchema = makeSchema();

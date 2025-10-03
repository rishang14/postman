import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { WorkspaceMemberOrderByRelationAggregateInputObjectSchema as WorkspaceMemberOrderByRelationAggregateInputObjectSchema } from './WorkspaceMemberOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ownerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  members: z.lazy(() => WorkspaceMemberOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WorkspaceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkspaceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceOrderByWithRelationInput>;
export const WorkspaceOrderByWithRelationInputObjectZodSchema = makeSchema();

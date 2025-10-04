import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WorkspaceOrderByWithRelationInputObjectSchema as WorkspaceOrderByWithRelationInputObjectSchema } from './WorkspaceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  workspace: z.lazy(() => WorkspaceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CollectionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CollectionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionOrderByWithRelationInput>;
export const CollectionOrderByWithRelationInputObjectZodSchema = makeSchema();

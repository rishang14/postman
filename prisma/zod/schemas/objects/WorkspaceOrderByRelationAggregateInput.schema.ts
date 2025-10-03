import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WorkspaceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceOrderByRelationAggregateInput>;
export const WorkspaceOrderByRelationAggregateInputObjectZodSchema = makeSchema();

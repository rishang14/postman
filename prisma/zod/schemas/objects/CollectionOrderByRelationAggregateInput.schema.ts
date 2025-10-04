import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CollectionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CollectionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionOrderByRelationAggregateInput>;
export const CollectionOrderByRelationAggregateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RequestrunOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RequestrunOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunOrderByRelationAggregateInput>;
export const RequestrunOrderByRelationAggregateInputObjectZodSchema = makeSchema();

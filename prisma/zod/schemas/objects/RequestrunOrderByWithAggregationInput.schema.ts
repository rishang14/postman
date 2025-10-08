import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RequestrunCountOrderByAggregateInputObjectSchema as RequestrunCountOrderByAggregateInputObjectSchema } from './RequestrunCountOrderByAggregateInput.schema';
import { RequestrunAvgOrderByAggregateInputObjectSchema as RequestrunAvgOrderByAggregateInputObjectSchema } from './RequestrunAvgOrderByAggregateInput.schema';
import { RequestrunMaxOrderByAggregateInputObjectSchema as RequestrunMaxOrderByAggregateInputObjectSchema } from './RequestrunMaxOrderByAggregateInput.schema';
import { RequestrunMinOrderByAggregateInputObjectSchema as RequestrunMinOrderByAggregateInputObjectSchema } from './RequestrunMinOrderByAggregateInput.schema';
import { RequestrunSumOrderByAggregateInputObjectSchema as RequestrunSumOrderByAggregateInputObjectSchema } from './RequestrunSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  requestid: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  statusText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  headers: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  body: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  durationMs: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RequestrunCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RequestrunAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RequestrunMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RequestrunMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RequestrunSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RequestrunOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RequestrunOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunOrderByWithAggregationInput>;
export const RequestrunOrderByWithAggregationInputObjectZodSchema = makeSchema();

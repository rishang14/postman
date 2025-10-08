import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CollectionOrderByWithRelationInputObjectSchema as CollectionOrderByWithRelationInputObjectSchema } from './CollectionOrderByWithRelationInput.schema';
import { RequestrunOrderByRelationAggregateInputObjectSchema as RequestrunOrderByRelationAggregateInputObjectSchema } from './RequestrunOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  collectionId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  parameters: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  headers: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  saved: SortOrderSchema.optional(),
  body: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  response: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  collection: z.lazy(() => CollectionOrderByWithRelationInputObjectSchema).optional(),
  requestrun: z.lazy(() => RequestrunOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RequestsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RequestsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsOrderByWithRelationInput>;
export const RequestsOrderByWithRelationInputObjectZodSchema = makeSchema();

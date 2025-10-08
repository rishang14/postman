import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RequestsOrderByWithRelationInputObjectSchema as RequestsOrderByWithRelationInputObjectSchema } from './RequestsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  requestid: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  statusText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  headers: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  body: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  durationMs: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  request: z.lazy(() => RequestsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RequestrunOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RequestrunOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunOrderByWithRelationInput>;
export const RequestrunOrderByWithRelationInputObjectZodSchema = makeSchema();

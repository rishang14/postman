import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { NestedEnumREST_METHODWithAggregatesFilterObjectSchema as NestedEnumREST_METHODWithAggregatesFilterObjectSchema } from './NestedEnumREST_METHODWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumREST_METHODFilterObjectSchema as NestedEnumREST_METHODFilterObjectSchema } from './NestedEnumREST_METHODFilter.schema'

const makeSchema = () => z.object({
  equals: REST_METHODSchema.optional(),
  in: REST_METHODSchema.array().optional(),
  notIn: REST_METHODSchema.array().optional(),
  not: z.union([REST_METHODSchema, z.lazy(() => NestedEnumREST_METHODWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumREST_METHODFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumREST_METHODFilterObjectSchema).optional()
}).strict();
export const EnumREST_METHODWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumREST_METHODWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumREST_METHODWithAggregatesFilter>;
export const EnumREST_METHODWithAggregatesFilterObjectZodSchema = makeSchema();

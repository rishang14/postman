import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { NestedEnumMEMBER_ROLEWithAggregatesFilterObjectSchema as NestedEnumMEMBER_ROLEWithAggregatesFilterObjectSchema } from './NestedEnumMEMBER_ROLEWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMEMBER_ROLEFilterObjectSchema as NestedEnumMEMBER_ROLEFilterObjectSchema } from './NestedEnumMEMBER_ROLEFilter.schema'

const makeSchema = () => z.object({
  equals: MEMBER_ROLESchema.optional(),
  in: MEMBER_ROLESchema.array().optional(),
  notIn: MEMBER_ROLESchema.array().optional(),
  not: z.union([MEMBER_ROLESchema, z.lazy(() => NestedEnumMEMBER_ROLEWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMEMBER_ROLEFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMEMBER_ROLEFilterObjectSchema).optional()
}).strict();
export const EnumMEMBER_ROLEWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMEMBER_ROLEWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMEMBER_ROLEWithAggregatesFilter>;
export const EnumMEMBER_ROLEWithAggregatesFilterObjectZodSchema = makeSchema();

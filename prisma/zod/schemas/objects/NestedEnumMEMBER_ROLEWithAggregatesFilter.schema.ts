import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMEMBER_ROLEFilterObjectSchema as NestedEnumMEMBER_ROLEFilterObjectSchema } from './NestedEnumMEMBER_ROLEFilter.schema'

const nestedenummember_rolewithaggregatesfilterSchema = z.object({
  equals: MEMBER_ROLESchema.optional(),
  in: MEMBER_ROLESchema.array().optional(),
  notIn: MEMBER_ROLESchema.array().optional(),
  not: z.union([MEMBER_ROLESchema, z.lazy(() => NestedEnumMEMBER_ROLEWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMEMBER_ROLEFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMEMBER_ROLEFilterObjectSchema).optional()
}).strict();
export const NestedEnumMEMBER_ROLEWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumMEMBER_ROLEWithAggregatesFilter> = nestedenummember_rolewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumMEMBER_ROLEWithAggregatesFilter>;
export const NestedEnumMEMBER_ROLEWithAggregatesFilterObjectZodSchema = nestedenummember_rolewithaggregatesfilterSchema;

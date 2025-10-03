import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { NestedEnumMEMBER_ROLEFilterObjectSchema as NestedEnumMEMBER_ROLEFilterObjectSchema } from './NestedEnumMEMBER_ROLEFilter.schema'

const makeSchema = () => z.object({
  equals: MEMBER_ROLESchema.optional(),
  in: MEMBER_ROLESchema.array().optional(),
  notIn: MEMBER_ROLESchema.array().optional(),
  not: z.union([MEMBER_ROLESchema, z.lazy(() => NestedEnumMEMBER_ROLEFilterObjectSchema)]).optional()
}).strict();
export const EnumMEMBER_ROLEFilterObjectSchema: z.ZodType<Prisma.EnumMEMBER_ROLEFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMEMBER_ROLEFilter>;
export const EnumMEMBER_ROLEFilterObjectZodSchema = makeSchema();

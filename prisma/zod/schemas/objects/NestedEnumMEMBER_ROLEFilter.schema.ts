import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const nestedenummember_rolefilterSchema = z.object({
  equals: MEMBER_ROLESchema.optional(),
  in: MEMBER_ROLESchema.array().optional(),
  notIn: MEMBER_ROLESchema.array().optional(),
  not: z.union([MEMBER_ROLESchema, z.lazy(() => NestedEnumMEMBER_ROLEFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumMEMBER_ROLEFilterObjectSchema: z.ZodType<Prisma.NestedEnumMEMBER_ROLEFilter> = nestedenummember_rolefilterSchema as unknown as z.ZodType<Prisma.NestedEnumMEMBER_ROLEFilter>;
export const NestedEnumMEMBER_ROLEFilterObjectZodSchema = nestedenummember_rolefilterSchema;

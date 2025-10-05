import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { NestedEnumREST_METHODFilterObjectSchema as NestedEnumREST_METHODFilterObjectSchema } from './NestedEnumREST_METHODFilter.schema'

const makeSchema = () => z.object({
  equals: REST_METHODSchema.optional(),
  in: REST_METHODSchema.array().optional(),
  notIn: REST_METHODSchema.array().optional(),
  not: z.union([REST_METHODSchema, z.lazy(() => NestedEnumREST_METHODFilterObjectSchema)]).optional()
}).strict();
export const EnumREST_METHODFilterObjectSchema: z.ZodType<Prisma.EnumREST_METHODFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumREST_METHODFilter>;
export const EnumREST_METHODFilterObjectZodSchema = makeSchema();

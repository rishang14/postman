import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema'

const nestedenumrest_methodfilterSchema = z.object({
  equals: REST_METHODSchema.optional(),
  in: REST_METHODSchema.array().optional(),
  notIn: REST_METHODSchema.array().optional(),
  not: z.union([REST_METHODSchema, z.lazy(() => NestedEnumREST_METHODFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumREST_METHODFilterObjectSchema: z.ZodType<Prisma.NestedEnumREST_METHODFilter> = nestedenumrest_methodfilterSchema as unknown as z.ZodType<Prisma.NestedEnumREST_METHODFilter>;
export const NestedEnumREST_METHODFilterObjectZodSchema = nestedenumrest_methodfilterSchema;

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RequestsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const RequestsScalarRelationFilterObjectSchema: z.ZodType<Prisma.RequestsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RequestsScalarRelationFilter>;
export const RequestsScalarRelationFilterObjectZodSchema = makeSchema();

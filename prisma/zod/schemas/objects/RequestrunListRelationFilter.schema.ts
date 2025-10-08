import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './RequestrunWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RequestrunWhereInputObjectSchema).optional(),
  some: z.lazy(() => RequestrunWhereInputObjectSchema).optional(),
  none: z.lazy(() => RequestrunWhereInputObjectSchema).optional()
}).strict();
export const RequestrunListRelationFilterObjectSchema: z.ZodType<Prisma.RequestrunListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunListRelationFilter>;
export const RequestrunListRelationFilterObjectZodSchema = makeSchema();

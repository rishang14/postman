import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionWhereInputObjectSchema as CollectionWhereInputObjectSchema } from './CollectionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CollectionWhereInputObjectSchema).optional(),
  some: z.lazy(() => CollectionWhereInputObjectSchema).optional(),
  none: z.lazy(() => CollectionWhereInputObjectSchema).optional()
}).strict();
export const CollectionListRelationFilterObjectSchema: z.ZodType<Prisma.CollectionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CollectionListRelationFilter>;
export const CollectionListRelationFilterObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionArgsObjectSchema as CollectionArgsObjectSchema } from './CollectionArgs.schema'

const makeSchema = () => z.object({
  collection: z.union([z.boolean(), z.lazy(() => CollectionArgsObjectSchema)]).optional()
}).strict();
export const RequestsIncludeObjectSchema: z.ZodType<Prisma.RequestsInclude> = makeSchema() as unknown as z.ZodType<Prisma.RequestsInclude>;
export const RequestsIncludeObjectZodSchema = makeSchema();

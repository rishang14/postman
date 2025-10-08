import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionArgsObjectSchema as CollectionArgsObjectSchema } from './CollectionArgs.schema';
import { RequestrunFindManySchema as RequestrunFindManySchema } from '../findManyRequestrun.schema';
import { RequestsCountOutputTypeArgsObjectSchema as RequestsCountOutputTypeArgsObjectSchema } from './RequestsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  collection: z.union([z.boolean(), z.lazy(() => CollectionArgsObjectSchema)]).optional(),
  requestrun: z.union([z.boolean(), z.lazy(() => RequestrunFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RequestsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RequestsIncludeObjectSchema: z.ZodType<Prisma.RequestsInclude> = makeSchema() as unknown as z.ZodType<Prisma.RequestsInclude>;
export const RequestsIncludeObjectZodSchema = makeSchema();

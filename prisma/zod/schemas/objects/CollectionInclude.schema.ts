import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsObjectSchema as WorkspaceArgsObjectSchema } from './WorkspaceArgs.schema';
import { RequestsFindManySchema as RequestsFindManySchema } from '../findManyRequests.schema';
import { CollectionCountOutputTypeArgsObjectSchema as CollectionCountOutputTypeArgsObjectSchema } from './CollectionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsObjectSchema)]).optional(),
  request: z.union([z.boolean(), z.lazy(() => RequestsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CollectionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CollectionIncludeObjectSchema: z.ZodType<Prisma.CollectionInclude> = makeSchema() as unknown as z.ZodType<Prisma.CollectionInclude>;
export const CollectionIncludeObjectZodSchema = makeSchema();

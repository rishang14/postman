import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsObjectSchema as WorkspaceArgsObjectSchema } from './WorkspaceArgs.schema';
import { RequestsFindManySchema as RequestsFindManySchema } from '../findManyRequests.schema';
import { CollectionCountOutputTypeArgsObjectSchema as CollectionCountOutputTypeArgsObjectSchema } from './CollectionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsObjectSchema)]).optional(),
  request: z.union([z.boolean(), z.lazy(() => RequestsFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CollectionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CollectionSelectObjectSchema: z.ZodType<Prisma.CollectionSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollectionSelect>;
export const CollectionSelectObjectZodSchema = makeSchema();

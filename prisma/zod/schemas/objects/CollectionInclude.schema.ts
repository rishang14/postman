import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsObjectSchema as WorkspaceArgsObjectSchema } from './WorkspaceArgs.schema'

const makeSchema = () => z.object({
  workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsObjectSchema)]).optional()
}).strict();
export const CollectionIncludeObjectSchema: z.ZodType<Prisma.CollectionInclude> = makeSchema() as unknown as z.ZodType<Prisma.CollectionInclude>;
export const CollectionIncludeObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsObjectSchema as WorkspaceArgsObjectSchema } from './WorkspaceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const CollectionSelectObjectSchema: z.ZodType<Prisma.CollectionSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollectionSelect>;
export const CollectionSelectObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WorkspaceArgsObjectSchema as WorkspaceArgsObjectSchema } from './WorkspaceArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  userId: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsObjectSchema)]).optional()
}).strict();
export const WorkspaceMemberSelectObjectSchema: z.ZodType<Prisma.WorkspaceMemberSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberSelect>;
export const WorkspaceMemberSelectObjectZodSchema = makeSchema();

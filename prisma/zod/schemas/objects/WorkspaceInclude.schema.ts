import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WorkspaceMemberFindManySchema as WorkspaceMemberFindManySchema } from '../findManyWorkspaceMember.schema';
import { CollectionFindManySchema as CollectionFindManySchema } from '../findManyCollection.schema';
import { WorkspaceCountOutputTypeArgsObjectSchema as WorkspaceCountOutputTypeArgsObjectSchema } from './WorkspaceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => WorkspaceMemberFindManySchema)]).optional(),
  colllection: z.union([z.boolean(), z.lazy(() => CollectionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WorkspaceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WorkspaceIncludeObjectSchema: z.ZodType<Prisma.WorkspaceInclude> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceInclude>;
export const WorkspaceIncludeObjectZodSchema = makeSchema();

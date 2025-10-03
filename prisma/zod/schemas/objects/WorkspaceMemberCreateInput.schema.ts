import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema as UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceMemberInput.schema';
import { WorkspaceCreateNestedOneWithoutMembersInputObjectSchema as WorkspaceCreateNestedOneWithoutMembersInputObjectSchema } from './WorkspaceCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MEMBER_ROLESchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const WorkspaceMemberCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateInput>;
export const WorkspaceMemberCreateInputObjectZodSchema = makeSchema();

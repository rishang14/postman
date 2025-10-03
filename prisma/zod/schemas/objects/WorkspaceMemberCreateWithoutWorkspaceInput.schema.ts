import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema as UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MEMBER_ROLESchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema)
}).strict();
export const WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateWithoutWorkspaceInput>;
export const WorkspaceMemberCreateWithoutWorkspaceInputObjectZodSchema = makeSchema();

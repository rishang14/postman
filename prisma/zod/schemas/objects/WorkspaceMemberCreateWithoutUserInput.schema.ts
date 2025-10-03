import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { WorkspaceCreateNestedOneWithoutMembersInputObjectSchema as WorkspaceCreateNestedOneWithoutMembersInputObjectSchema } from './WorkspaceCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MEMBER_ROLESchema.optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const WorkspaceMemberCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateWithoutUserInput>;
export const WorkspaceMemberCreateWithoutUserInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutWorkapceInputObjectSchema as UserCreateNestedOneWithoutWorkapceInputObjectSchema } from './UserCreateNestedOneWithoutWorkapceInput.schema';
import { WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutWorkapceInputObjectSchema),
  members: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema)
}).strict();
export const WorkspaceCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateInput>;
export const WorkspaceCreateInputObjectZodSchema = makeSchema();

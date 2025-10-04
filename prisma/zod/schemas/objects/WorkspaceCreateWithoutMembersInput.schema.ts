import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutWorkapceInputObjectSchema as UserCreateNestedOneWithoutWorkapceInputObjectSchema } from './UserCreateNestedOneWithoutWorkapceInput.schema';
import { CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema as CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema } from './CollectionCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutWorkapceInputObjectSchema),
  colllection: z.lazy(() => CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema).optional()
}).strict();
export const WorkspaceCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateWithoutMembersInput>;
export const WorkspaceCreateWithoutMembersInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateNestedManyWithoutWorkspaceInput.schema';
import { CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema as CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema } from './CollectionCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema).optional(),
  colllection: z.lazy(() => CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema).optional()
}).strict();
export const WorkspaceCreateWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateWithoutOwnerInput>;
export const WorkspaceCreateWithoutOwnerInputObjectZodSchema = makeSchema();

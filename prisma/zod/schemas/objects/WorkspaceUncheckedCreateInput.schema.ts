import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput.schema';
import { CollectionUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema as CollectionUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  members: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema),
  colllection: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema)
}).strict();
export const WorkspaceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedCreateInput>;
export const WorkspaceUncheckedCreateInputObjectZodSchema = makeSchema();

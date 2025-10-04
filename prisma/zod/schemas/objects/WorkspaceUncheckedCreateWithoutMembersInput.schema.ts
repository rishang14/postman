import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema as CollectionUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  colllection: z.lazy(() => CollectionUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema).optional()
}).strict();
export const WorkspaceUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutMembersInput>;
export const WorkspaceUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();

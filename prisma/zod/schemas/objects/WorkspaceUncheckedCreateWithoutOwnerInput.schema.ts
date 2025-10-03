import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema).optional()
}).strict();
export const WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutOwnerInput>;
export const WorkspaceUncheckedCreateWithoutOwnerInputObjectZodSchema = makeSchema();

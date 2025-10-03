import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MEMBER_ROLESchema.optional(),
  userId: z.string()
}).strict();
export const WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>;
export const WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectZodSchema = makeSchema();

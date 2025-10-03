import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MEMBER_ROLESchema.optional(),
  workspaceId: z.string()
}).strict();
export const WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedCreateWithoutUserInput>;
export const WorkspaceMemberUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();

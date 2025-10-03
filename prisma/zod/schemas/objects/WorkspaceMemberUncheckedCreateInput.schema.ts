import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: MEMBER_ROLESchema.optional(),
  userId: z.string(),
  workspaceId: z.string()
}).strict();
export const WorkspaceMemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedCreateInput>;
export const WorkspaceMemberUncheckedCreateInputObjectZodSchema = makeSchema();

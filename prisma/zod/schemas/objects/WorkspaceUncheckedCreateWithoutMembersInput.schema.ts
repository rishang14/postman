import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkspaceUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutMembersInput>;
export const WorkspaceUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceUpdateWithoutMembersInputObjectSchema as WorkspaceUpdateWithoutMembersInputObjectSchema } from './WorkspaceUpdateWithoutMembersInput.schema';
import { WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema as WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutMembersInput.schema';
import { WorkspaceCreateWithoutMembersInputObjectSchema as WorkspaceCreateWithoutMembersInputObjectSchema } from './WorkspaceCreateWithoutMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutMembersInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkspaceUpdateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => WorkspaceWhereInputObjectSchema).optional()
}).strict();
export const WorkspaceUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpsertWithoutMembersInput>;
export const WorkspaceUpsertWithoutMembersInputObjectZodSchema = makeSchema();

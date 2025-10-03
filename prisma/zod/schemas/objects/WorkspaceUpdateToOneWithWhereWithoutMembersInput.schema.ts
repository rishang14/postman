import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema';
import { WorkspaceUpdateWithoutMembersInputObjectSchema as WorkspaceUpdateWithoutMembersInputObjectSchema } from './WorkspaceUpdateWithoutMembersInput.schema';
import { WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema as WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkspaceUpdateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const WorkspaceUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutMembersInput>;
export const WorkspaceUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();

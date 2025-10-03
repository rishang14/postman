import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceCreateWithoutMembersInputObjectSchema as WorkspaceCreateWithoutMembersInputObjectSchema } from './WorkspaceCreateWithoutMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const WorkspaceCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutMembersInput>;
export const WorkspaceCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();

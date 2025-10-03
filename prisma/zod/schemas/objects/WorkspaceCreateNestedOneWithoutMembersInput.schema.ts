import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateWithoutMembersInputObjectSchema as WorkspaceCreateWithoutMembersInputObjectSchema } from './WorkspaceCreateWithoutMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutMembersInput.schema';
import { WorkspaceCreateOrConnectWithoutMembersInputObjectSchema as WorkspaceCreateOrConnectWithoutMembersInputObjectSchema } from './WorkspaceCreateOrConnectWithoutMembersInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkspaceCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutMembersInput>;
export const WorkspaceCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();

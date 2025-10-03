import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateWithoutMembersInputObjectSchema as WorkspaceCreateWithoutMembersInputObjectSchema } from './WorkspaceCreateWithoutMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutMembersInput.schema';
import { WorkspaceCreateOrConnectWithoutMembersInputObjectSchema as WorkspaceCreateOrConnectWithoutMembersInputObjectSchema } from './WorkspaceCreateOrConnectWithoutMembersInput.schema';
import { WorkspaceUpsertWithoutMembersInputObjectSchema as WorkspaceUpsertWithoutMembersInputObjectSchema } from './WorkspaceUpsertWithoutMembersInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceUpdateToOneWithWhereWithoutMembersInputObjectSchema as WorkspaceUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './WorkspaceUpdateToOneWithWhereWithoutMembersInput.schema';
import { WorkspaceUpdateWithoutMembersInputObjectSchema as WorkspaceUpdateWithoutMembersInputObjectSchema } from './WorkspaceUpdateWithoutMembersInput.schema';
import { WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema as WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUpdateWithoutMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const WorkspaceUpdateOneRequiredWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutMembersNestedInput>;
export const WorkspaceUpdateOneRequiredWithoutMembersNestedInputObjectZodSchema = makeSchema();

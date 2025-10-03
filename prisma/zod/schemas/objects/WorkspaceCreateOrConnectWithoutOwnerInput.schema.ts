import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceCreateWithoutOwnerInputObjectSchema as WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema';
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema as WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutOwnerInput>;
export const WorkspaceCreateOrConnectWithoutOwnerInputObjectZodSchema = makeSchema();

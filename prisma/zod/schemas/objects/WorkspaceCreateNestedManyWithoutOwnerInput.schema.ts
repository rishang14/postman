import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateWithoutOwnerInputObjectSchema as WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema';
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema as WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema';
import { WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema as WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema } from './WorkspaceCreateOrConnectWithoutOwnerInput.schema';
import { WorkspaceCreateManyOwnerInputEnvelopeObjectSchema as WorkspaceCreateManyOwnerInputEnvelopeObjectSchema } from './WorkspaceCreateManyOwnerInputEnvelope.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkspaceCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkspaceWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateNestedManyWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateNestedManyWithoutOwnerInput>;
export const WorkspaceCreateNestedManyWithoutOwnerInputObjectZodSchema = makeSchema();

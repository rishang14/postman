import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateWithoutOwnerInputObjectSchema as WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema';
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema as WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema';
import { WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema as WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema } from './WorkspaceCreateOrConnectWithoutOwnerInput.schema';
import { WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema as WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './WorkspaceUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { WorkspaceCreateManyOwnerInputEnvelopeObjectSchema as WorkspaceCreateManyOwnerInputEnvelopeObjectSchema } from './WorkspaceCreateManyOwnerInputEnvelope.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema as WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './WorkspaceUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema as WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './WorkspaceUpdateManyWithWhereWithoutOwnerInput.schema';
import { WorkspaceScalarWhereInputObjectSchema as WorkspaceScalarWhereInputObjectSchema } from './WorkspaceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema).array(), z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkspaceCreateManyOwnerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkspaceWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkspaceWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkspaceWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkspaceWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkspaceScalarWhereInputObjectSchema), z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkspaceUpdateManyWithoutOwnerNestedInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateManyWithoutOwnerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateManyWithoutOwnerNestedInput>;
export const WorkspaceUpdateManyWithoutOwnerNestedInputObjectZodSchema = makeSchema();

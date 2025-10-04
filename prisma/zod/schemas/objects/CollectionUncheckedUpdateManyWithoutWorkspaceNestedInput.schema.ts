import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionCreateWithoutWorkspaceInputObjectSchema as CollectionCreateWithoutWorkspaceInputObjectSchema } from './CollectionCreateWithoutWorkspaceInput.schema';
import { CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema as CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedCreateWithoutWorkspaceInput.schema';
import { CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema as CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema } from './CollectionCreateOrConnectWithoutWorkspaceInput.schema';
import { CollectionUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema as CollectionUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './CollectionUpsertWithWhereUniqueWithoutWorkspaceInput.schema';
import { CollectionCreateManyWorkspaceInputEnvelopeObjectSchema as CollectionCreateManyWorkspaceInputEnvelopeObjectSchema } from './CollectionCreateManyWorkspaceInputEnvelope.schema';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema';
import { CollectionUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema as CollectionUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './CollectionUpdateWithWhereUniqueWithoutWorkspaceInput.schema';
import { CollectionUpdateManyWithWhereWithoutWorkspaceInputObjectSchema as CollectionUpdateManyWithWhereWithoutWorkspaceInputObjectSchema } from './CollectionUpdateManyWithWhereWithoutWorkspaceInput.schema';
import { CollectionScalarWhereInputObjectSchema as CollectionScalarWhereInputObjectSchema } from './CollectionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollectionCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionCreateWithoutWorkspaceInputObjectSchema).array(), z.lazy(() => CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CollectionUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CollectionCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CollectionWhereUniqueInputObjectSchema), z.lazy(() => CollectionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CollectionWhereUniqueInputObjectSchema), z.lazy(() => CollectionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CollectionWhereUniqueInputObjectSchema), z.lazy(() => CollectionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CollectionWhereUniqueInputObjectSchema), z.lazy(() => CollectionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CollectionUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CollectionUpdateManyWithWhereWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUpdateManyWithWhereWithoutWorkspaceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CollectionScalarWhereInputObjectSchema), z.lazy(() => CollectionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema: z.ZodType<Prisma.CollectionUncheckedUpdateManyWithoutWorkspaceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUncheckedUpdateManyWithoutWorkspaceNestedInput>;
export const CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectZodSchema = makeSchema();

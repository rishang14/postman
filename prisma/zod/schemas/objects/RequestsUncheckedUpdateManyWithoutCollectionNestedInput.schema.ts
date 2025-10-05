import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsCreateWithoutCollectionInputObjectSchema as RequestsCreateWithoutCollectionInputObjectSchema } from './RequestsCreateWithoutCollectionInput.schema';
import { RequestsUncheckedCreateWithoutCollectionInputObjectSchema as RequestsUncheckedCreateWithoutCollectionInputObjectSchema } from './RequestsUncheckedCreateWithoutCollectionInput.schema';
import { RequestsCreateOrConnectWithoutCollectionInputObjectSchema as RequestsCreateOrConnectWithoutCollectionInputObjectSchema } from './RequestsCreateOrConnectWithoutCollectionInput.schema';
import { RequestsUpsertWithWhereUniqueWithoutCollectionInputObjectSchema as RequestsUpsertWithWhereUniqueWithoutCollectionInputObjectSchema } from './RequestsUpsertWithWhereUniqueWithoutCollectionInput.schema';
import { RequestsCreateManyCollectionInputEnvelopeObjectSchema as RequestsCreateManyCollectionInputEnvelopeObjectSchema } from './RequestsCreateManyCollectionInputEnvelope.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithWhereUniqueWithoutCollectionInputObjectSchema as RequestsUpdateWithWhereUniqueWithoutCollectionInputObjectSchema } from './RequestsUpdateWithWhereUniqueWithoutCollectionInput.schema';
import { RequestsUpdateManyWithWhereWithoutCollectionInputObjectSchema as RequestsUpdateManyWithWhereWithoutCollectionInputObjectSchema } from './RequestsUpdateManyWithWhereWithoutCollectionInput.schema';
import { RequestsScalarWhereInputObjectSchema as RequestsScalarWhereInputObjectSchema } from './RequestsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsCreateWithoutCollectionInputObjectSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutCollectionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutCollectionInputObjectSchema), z.lazy(() => RequestsCreateOrConnectWithoutCollectionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RequestsUpsertWithWhereUniqueWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUpsertWithWhereUniqueWithoutCollectionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestsCreateManyCollectionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RequestsUpdateWithWhereUniqueWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUpdateWithWhereUniqueWithoutCollectionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RequestsUpdateManyWithWhereWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUpdateManyWithWhereWithoutCollectionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RequestsUncheckedUpdateManyWithoutCollectionNestedInputObjectSchema: z.ZodType<Prisma.RequestsUncheckedUpdateManyWithoutCollectionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUncheckedUpdateManyWithoutCollectionNestedInput>;
export const RequestsUncheckedUpdateManyWithoutCollectionNestedInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunCreateWithoutRequestInputObjectSchema as RequestrunCreateWithoutRequestInputObjectSchema } from './RequestrunCreateWithoutRequestInput.schema';
import { RequestrunUncheckedCreateWithoutRequestInputObjectSchema as RequestrunUncheckedCreateWithoutRequestInputObjectSchema } from './RequestrunUncheckedCreateWithoutRequestInput.schema';
import { RequestrunCreateOrConnectWithoutRequestInputObjectSchema as RequestrunCreateOrConnectWithoutRequestInputObjectSchema } from './RequestrunCreateOrConnectWithoutRequestInput.schema';
import { RequestrunUpsertWithWhereUniqueWithoutRequestInputObjectSchema as RequestrunUpsertWithWhereUniqueWithoutRequestInputObjectSchema } from './RequestrunUpsertWithWhereUniqueWithoutRequestInput.schema';
import { RequestrunCreateManyRequestInputEnvelopeObjectSchema as RequestrunCreateManyRequestInputEnvelopeObjectSchema } from './RequestrunCreateManyRequestInputEnvelope.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './RequestrunWhereUniqueInput.schema';
import { RequestrunUpdateWithWhereUniqueWithoutRequestInputObjectSchema as RequestrunUpdateWithWhereUniqueWithoutRequestInputObjectSchema } from './RequestrunUpdateWithWhereUniqueWithoutRequestInput.schema';
import { RequestrunUpdateManyWithWhereWithoutRequestInputObjectSchema as RequestrunUpdateManyWithWhereWithoutRequestInputObjectSchema } from './RequestrunUpdateManyWithWhereWithoutRequestInput.schema';
import { RequestrunScalarWhereInputObjectSchema as RequestrunScalarWhereInputObjectSchema } from './RequestrunScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestrunCreateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunCreateWithoutRequestInputObjectSchema).array(), z.lazy(() => RequestrunUncheckedCreateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUncheckedCreateWithoutRequestInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestrunCreateOrConnectWithoutRequestInputObjectSchema), z.lazy(() => RequestrunCreateOrConnectWithoutRequestInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RequestrunUpsertWithWhereUniqueWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUpsertWithWhereUniqueWithoutRequestInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestrunCreateManyRequestInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RequestrunWhereUniqueInputObjectSchema), z.lazy(() => RequestrunWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RequestrunWhereUniqueInputObjectSchema), z.lazy(() => RequestrunWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RequestrunWhereUniqueInputObjectSchema), z.lazy(() => RequestrunWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RequestrunWhereUniqueInputObjectSchema), z.lazy(() => RequestrunWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RequestrunUpdateWithWhereUniqueWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUpdateWithWhereUniqueWithoutRequestInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RequestrunUpdateManyWithWhereWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUpdateManyWithWhereWithoutRequestInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RequestrunScalarWhereInputObjectSchema), z.lazy(() => RequestrunScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RequestrunUncheckedUpdateManyWithoutRequestNestedInputObjectSchema: z.ZodType<Prisma.RequestrunUncheckedUpdateManyWithoutRequestNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunUncheckedUpdateManyWithoutRequestNestedInput>;
export const RequestrunUncheckedUpdateManyWithoutRequestNestedInputObjectZodSchema = makeSchema();

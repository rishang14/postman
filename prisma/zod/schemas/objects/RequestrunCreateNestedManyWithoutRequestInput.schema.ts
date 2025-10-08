import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunCreateWithoutRequestInputObjectSchema as RequestrunCreateWithoutRequestInputObjectSchema } from './RequestrunCreateWithoutRequestInput.schema';
import { RequestrunUncheckedCreateWithoutRequestInputObjectSchema as RequestrunUncheckedCreateWithoutRequestInputObjectSchema } from './RequestrunUncheckedCreateWithoutRequestInput.schema';
import { RequestrunCreateOrConnectWithoutRequestInputObjectSchema as RequestrunCreateOrConnectWithoutRequestInputObjectSchema } from './RequestrunCreateOrConnectWithoutRequestInput.schema';
import { RequestrunCreateManyRequestInputEnvelopeObjectSchema as RequestrunCreateManyRequestInputEnvelopeObjectSchema } from './RequestrunCreateManyRequestInputEnvelope.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './RequestrunWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestrunCreateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunCreateWithoutRequestInputObjectSchema).array(), z.lazy(() => RequestrunUncheckedCreateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUncheckedCreateWithoutRequestInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestrunCreateOrConnectWithoutRequestInputObjectSchema), z.lazy(() => RequestrunCreateOrConnectWithoutRequestInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestrunCreateManyRequestInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RequestrunWhereUniqueInputObjectSchema), z.lazy(() => RequestrunWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RequestrunCreateNestedManyWithoutRequestInputObjectSchema: z.ZodType<Prisma.RequestrunCreateNestedManyWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateNestedManyWithoutRequestInput>;
export const RequestrunCreateNestedManyWithoutRequestInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsCreateWithoutCollectionInputObjectSchema as RequestsCreateWithoutCollectionInputObjectSchema } from './RequestsCreateWithoutCollectionInput.schema';
import { RequestsUncheckedCreateWithoutCollectionInputObjectSchema as RequestsUncheckedCreateWithoutCollectionInputObjectSchema } from './RequestsUncheckedCreateWithoutCollectionInput.schema';
import { RequestsCreateOrConnectWithoutCollectionInputObjectSchema as RequestsCreateOrConnectWithoutCollectionInputObjectSchema } from './RequestsCreateOrConnectWithoutCollectionInput.schema';
import { RequestsCreateManyCollectionInputEnvelopeObjectSchema as RequestsCreateManyCollectionInputEnvelopeObjectSchema } from './RequestsCreateManyCollectionInputEnvelope.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsCreateWithoutCollectionInputObjectSchema).array(), z.lazy(() => RequestsUncheckedCreateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutCollectionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RequestsCreateOrConnectWithoutCollectionInputObjectSchema), z.lazy(() => RequestsCreateOrConnectWithoutCollectionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RequestsCreateManyCollectionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RequestsWhereUniqueInputObjectSchema), z.lazy(() => RequestsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RequestsCreateNestedManyWithoutCollectionInputObjectSchema: z.ZodType<Prisma.RequestsCreateNestedManyWithoutCollectionInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateNestedManyWithoutCollectionInput>;
export const RequestsCreateNestedManyWithoutCollectionInputObjectZodSchema = makeSchema();

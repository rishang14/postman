import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsCreateWithoutCollectionInputObjectSchema as RequestsCreateWithoutCollectionInputObjectSchema } from './RequestsCreateWithoutCollectionInput.schema';
import { RequestsUncheckedCreateWithoutCollectionInputObjectSchema as RequestsUncheckedCreateWithoutCollectionInputObjectSchema } from './RequestsUncheckedCreateWithoutCollectionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RequestsCreateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutCollectionInputObjectSchema)])
}).strict();
export const RequestsCreateOrConnectWithoutCollectionInputObjectSchema: z.ZodType<Prisma.RequestsCreateOrConnectWithoutCollectionInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateOrConnectWithoutCollectionInput>;
export const RequestsCreateOrConnectWithoutCollectionInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutCollectionInputObjectSchema as RequestsUpdateWithoutCollectionInputObjectSchema } from './RequestsUpdateWithoutCollectionInput.schema';
import { RequestsUncheckedUpdateWithoutCollectionInputObjectSchema as RequestsUncheckedUpdateWithoutCollectionInputObjectSchema } from './RequestsUncheckedUpdateWithoutCollectionInput.schema';
import { RequestsCreateWithoutCollectionInputObjectSchema as RequestsCreateWithoutCollectionInputObjectSchema } from './RequestsCreateWithoutCollectionInput.schema';
import { RequestsUncheckedCreateWithoutCollectionInputObjectSchema as RequestsUncheckedCreateWithoutCollectionInputObjectSchema } from './RequestsUncheckedCreateWithoutCollectionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RequestsUpdateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutCollectionInputObjectSchema)]),
  create: z.union([z.lazy(() => RequestsCreateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutCollectionInputObjectSchema)])
}).strict();
export const RequestsUpsertWithWhereUniqueWithoutCollectionInputObjectSchema: z.ZodType<Prisma.RequestsUpsertWithWhereUniqueWithoutCollectionInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpsertWithWhereUniqueWithoutCollectionInput>;
export const RequestsUpsertWithWhereUniqueWithoutCollectionInputObjectZodSchema = makeSchema();

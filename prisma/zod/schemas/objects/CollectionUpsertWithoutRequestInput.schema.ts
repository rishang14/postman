import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionUpdateWithoutRequestInputObjectSchema as CollectionUpdateWithoutRequestInputObjectSchema } from './CollectionUpdateWithoutRequestInput.schema';
import { CollectionUncheckedUpdateWithoutRequestInputObjectSchema as CollectionUncheckedUpdateWithoutRequestInputObjectSchema } from './CollectionUncheckedUpdateWithoutRequestInput.schema';
import { CollectionCreateWithoutRequestInputObjectSchema as CollectionCreateWithoutRequestInputObjectSchema } from './CollectionCreateWithoutRequestInput.schema';
import { CollectionUncheckedCreateWithoutRequestInputObjectSchema as CollectionUncheckedCreateWithoutRequestInputObjectSchema } from './CollectionUncheckedCreateWithoutRequestInput.schema';
import { CollectionWhereInputObjectSchema as CollectionWhereInputObjectSchema } from './CollectionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CollectionUpdateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedUpdateWithoutRequestInputObjectSchema)]),
  create: z.union([z.lazy(() => CollectionCreateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutRequestInputObjectSchema)]),
  where: z.lazy(() => CollectionWhereInputObjectSchema).optional()
}).strict();
export const CollectionUpsertWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionUpsertWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpsertWithoutRequestInput>;
export const CollectionUpsertWithoutRequestInputObjectZodSchema = makeSchema();

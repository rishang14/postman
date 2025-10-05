import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema';
import { CollectionCreateWithoutRequestInputObjectSchema as CollectionCreateWithoutRequestInputObjectSchema } from './CollectionCreateWithoutRequestInput.schema';
import { CollectionUncheckedCreateWithoutRequestInputObjectSchema as CollectionUncheckedCreateWithoutRequestInputObjectSchema } from './CollectionUncheckedCreateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollectionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollectionCreateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutRequestInputObjectSchema)])
}).strict();
export const CollectionCreateOrConnectWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionCreateOrConnectWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateOrConnectWithoutRequestInput>;
export const CollectionCreateOrConnectWithoutRequestInputObjectZodSchema = makeSchema();

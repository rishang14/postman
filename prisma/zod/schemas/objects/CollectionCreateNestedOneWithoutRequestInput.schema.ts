import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionCreateWithoutRequestInputObjectSchema as CollectionCreateWithoutRequestInputObjectSchema } from './CollectionCreateWithoutRequestInput.schema';
import { CollectionUncheckedCreateWithoutRequestInputObjectSchema as CollectionUncheckedCreateWithoutRequestInputObjectSchema } from './CollectionUncheckedCreateWithoutRequestInput.schema';
import { CollectionCreateOrConnectWithoutRequestInputObjectSchema as CollectionCreateOrConnectWithoutRequestInputObjectSchema } from './CollectionCreateOrConnectWithoutRequestInput.schema';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollectionCreateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutRequestInputObjectSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CollectionCreateNestedOneWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionCreateNestedOneWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateNestedOneWithoutRequestInput>;
export const CollectionCreateNestedOneWithoutRequestInputObjectZodSchema = makeSchema();

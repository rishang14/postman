import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionCreateWithoutRequestInputObjectSchema as CollectionCreateWithoutRequestInputObjectSchema } from './CollectionCreateWithoutRequestInput.schema';
import { CollectionUncheckedCreateWithoutRequestInputObjectSchema as CollectionUncheckedCreateWithoutRequestInputObjectSchema } from './CollectionUncheckedCreateWithoutRequestInput.schema';
import { CollectionCreateOrConnectWithoutRequestInputObjectSchema as CollectionCreateOrConnectWithoutRequestInputObjectSchema } from './CollectionCreateOrConnectWithoutRequestInput.schema';
import { CollectionUpsertWithoutRequestInputObjectSchema as CollectionUpsertWithoutRequestInputObjectSchema } from './CollectionUpsertWithoutRequestInput.schema';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema';
import { CollectionUpdateToOneWithWhereWithoutRequestInputObjectSchema as CollectionUpdateToOneWithWhereWithoutRequestInputObjectSchema } from './CollectionUpdateToOneWithWhereWithoutRequestInput.schema';
import { CollectionUpdateWithoutRequestInputObjectSchema as CollectionUpdateWithoutRequestInputObjectSchema } from './CollectionUpdateWithoutRequestInput.schema';
import { CollectionUncheckedUpdateWithoutRequestInputObjectSchema as CollectionUncheckedUpdateWithoutRequestInputObjectSchema } from './CollectionUncheckedUpdateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollectionCreateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutRequestInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutRequestInputObjectSchema).optional(),
  upsert: z.lazy(() => CollectionUpsertWithoutRequestInputObjectSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CollectionUpdateToOneWithWhereWithoutRequestInputObjectSchema), z.lazy(() => CollectionUpdateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedUpdateWithoutRequestInputObjectSchema)]).optional()
}).strict();
export const CollectionUpdateOneRequiredWithoutRequestNestedInputObjectSchema: z.ZodType<Prisma.CollectionUpdateOneRequiredWithoutRequestNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpdateOneRequiredWithoutRequestNestedInput>;
export const CollectionUpdateOneRequiredWithoutRequestNestedInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionWhereInputObjectSchema as CollectionWhereInputObjectSchema } from './CollectionWhereInput.schema';
import { CollectionUpdateWithoutRequestInputObjectSchema as CollectionUpdateWithoutRequestInputObjectSchema } from './CollectionUpdateWithoutRequestInput.schema';
import { CollectionUncheckedUpdateWithoutRequestInputObjectSchema as CollectionUncheckedUpdateWithoutRequestInputObjectSchema } from './CollectionUncheckedUpdateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollectionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CollectionUpdateWithoutRequestInputObjectSchema), z.lazy(() => CollectionUncheckedUpdateWithoutRequestInputObjectSchema)])
}).strict();
export const CollectionUpdateToOneWithWhereWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionUpdateToOneWithWhereWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpdateToOneWithWhereWithoutRequestInput>;
export const CollectionUpdateToOneWithWhereWithoutRequestInputObjectZodSchema = makeSchema();

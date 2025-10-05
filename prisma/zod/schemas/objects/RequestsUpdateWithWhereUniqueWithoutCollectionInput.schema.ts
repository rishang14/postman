import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateWithoutCollectionInputObjectSchema as RequestsUpdateWithoutCollectionInputObjectSchema } from './RequestsUpdateWithoutCollectionInput.schema';
import { RequestsUncheckedUpdateWithoutCollectionInputObjectSchema as RequestsUncheckedUpdateWithoutCollectionInputObjectSchema } from './RequestsUncheckedUpdateWithoutCollectionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RequestsUpdateWithoutCollectionInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutCollectionInputObjectSchema)])
}).strict();
export const RequestsUpdateWithWhereUniqueWithoutCollectionInputObjectSchema: z.ZodType<Prisma.RequestsUpdateWithWhereUniqueWithoutCollectionInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateWithWhereUniqueWithoutCollectionInput>;
export const RequestsUpdateWithWhereUniqueWithoutCollectionInputObjectZodSchema = makeSchema();

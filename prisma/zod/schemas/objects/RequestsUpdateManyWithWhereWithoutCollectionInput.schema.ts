import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsScalarWhereInputObjectSchema as RequestsScalarWhereInputObjectSchema } from './RequestsScalarWhereInput.schema';
import { RequestsUpdateManyMutationInputObjectSchema as RequestsUpdateManyMutationInputObjectSchema } from './RequestsUpdateManyMutationInput.schema';
import { RequestsUncheckedUpdateManyWithoutCollectionInputObjectSchema as RequestsUncheckedUpdateManyWithoutCollectionInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutCollectionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RequestsUpdateManyMutationInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateManyWithoutCollectionInputObjectSchema)])
}).strict();
export const RequestsUpdateManyWithWhereWithoutCollectionInputObjectSchema: z.ZodType<Prisma.RequestsUpdateManyWithWhereWithoutCollectionInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateManyWithWhereWithoutCollectionInput>;
export const RequestsUpdateManyWithWhereWithoutCollectionInputObjectZodSchema = makeSchema();

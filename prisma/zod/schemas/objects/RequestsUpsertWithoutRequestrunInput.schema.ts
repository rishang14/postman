import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsUpdateWithoutRequestrunInputObjectSchema as RequestsUpdateWithoutRequestrunInputObjectSchema } from './RequestsUpdateWithoutRequestrunInput.schema';
import { RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema as RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedUpdateWithoutRequestrunInput.schema';
import { RequestsCreateWithoutRequestrunInputObjectSchema as RequestsCreateWithoutRequestrunInputObjectSchema } from './RequestsCreateWithoutRequestrunInput.schema';
import { RequestsUncheckedCreateWithoutRequestrunInputObjectSchema as RequestsUncheckedCreateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedCreateWithoutRequestrunInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RequestsUpdateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema)]),
  create: z.union([z.lazy(() => RequestsCreateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutRequestrunInputObjectSchema)]),
  where: z.lazy(() => RequestsWhereInputObjectSchema).optional()
}).strict();
export const RequestsUpsertWithoutRequestrunInputObjectSchema: z.ZodType<Prisma.RequestsUpsertWithoutRequestrunInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpsertWithoutRequestrunInput>;
export const RequestsUpsertWithoutRequestrunInputObjectZodSchema = makeSchema();

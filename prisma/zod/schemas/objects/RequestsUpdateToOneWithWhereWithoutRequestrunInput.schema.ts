import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema';
import { RequestsUpdateWithoutRequestrunInputObjectSchema as RequestsUpdateWithoutRequestrunInputObjectSchema } from './RequestsUpdateWithoutRequestrunInput.schema';
import { RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema as RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedUpdateWithoutRequestrunInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RequestsUpdateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema)])
}).strict();
export const RequestsUpdateToOneWithWhereWithoutRequestrunInputObjectSchema: z.ZodType<Prisma.RequestsUpdateToOneWithWhereWithoutRequestrunInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateToOneWithWhereWithoutRequestrunInput>;
export const RequestsUpdateToOneWithWhereWithoutRequestrunInputObjectZodSchema = makeSchema();

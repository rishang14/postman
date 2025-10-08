import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsCreateWithoutRequestrunInputObjectSchema as RequestsCreateWithoutRequestrunInputObjectSchema } from './RequestsCreateWithoutRequestrunInput.schema';
import { RequestsUncheckedCreateWithoutRequestrunInputObjectSchema as RequestsUncheckedCreateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedCreateWithoutRequestrunInput.schema';
import { RequestsCreateOrConnectWithoutRequestrunInputObjectSchema as RequestsCreateOrConnectWithoutRequestrunInputObjectSchema } from './RequestsCreateOrConnectWithoutRequestrunInput.schema';
import { RequestsUpsertWithoutRequestrunInputObjectSchema as RequestsUpsertWithoutRequestrunInputObjectSchema } from './RequestsUpsertWithoutRequestrunInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsUpdateToOneWithWhereWithoutRequestrunInputObjectSchema as RequestsUpdateToOneWithWhereWithoutRequestrunInputObjectSchema } from './RequestsUpdateToOneWithWhereWithoutRequestrunInput.schema';
import { RequestsUpdateWithoutRequestrunInputObjectSchema as RequestsUpdateWithoutRequestrunInputObjectSchema } from './RequestsUpdateWithoutRequestrunInput.schema';
import { RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema as RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedUpdateWithoutRequestrunInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutRequestrunInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RequestsCreateOrConnectWithoutRequestrunInputObjectSchema).optional(),
  upsert: z.lazy(() => RequestsUpsertWithoutRequestrunInputObjectSchema).optional(),
  connect: z.lazy(() => RequestsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RequestsUpdateToOneWithWhereWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUpdateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedUpdateWithoutRequestrunInputObjectSchema)]).optional()
}).strict();
export const RequestsUpdateOneRequiredWithoutRequestrunNestedInputObjectSchema: z.ZodType<Prisma.RequestsUpdateOneRequiredWithoutRequestrunNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUpdateOneRequiredWithoutRequestrunNestedInput>;
export const RequestsUpdateOneRequiredWithoutRequestrunNestedInputObjectZodSchema = makeSchema();

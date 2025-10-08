import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsCreateWithoutRequestrunInputObjectSchema as RequestsCreateWithoutRequestrunInputObjectSchema } from './RequestsCreateWithoutRequestrunInput.schema';
import { RequestsUncheckedCreateWithoutRequestrunInputObjectSchema as RequestsUncheckedCreateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedCreateWithoutRequestrunInput.schema';
import { RequestsCreateOrConnectWithoutRequestrunInputObjectSchema as RequestsCreateOrConnectWithoutRequestrunInputObjectSchema } from './RequestsCreateOrConnectWithoutRequestrunInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RequestsCreateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutRequestrunInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RequestsCreateOrConnectWithoutRequestrunInputObjectSchema).optional(),
  connect: z.lazy(() => RequestsWhereUniqueInputObjectSchema).optional()
}).strict();
export const RequestsCreateNestedOneWithoutRequestrunInputObjectSchema: z.ZodType<Prisma.RequestsCreateNestedOneWithoutRequestrunInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateNestedOneWithoutRequestrunInput>;
export const RequestsCreateNestedOneWithoutRequestrunInputObjectZodSchema = makeSchema();

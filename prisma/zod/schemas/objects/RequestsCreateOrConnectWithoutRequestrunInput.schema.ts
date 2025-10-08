import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './RequestsWhereUniqueInput.schema';
import { RequestsCreateWithoutRequestrunInputObjectSchema as RequestsCreateWithoutRequestrunInputObjectSchema } from './RequestsCreateWithoutRequestrunInput.schema';
import { RequestsUncheckedCreateWithoutRequestrunInputObjectSchema as RequestsUncheckedCreateWithoutRequestrunInputObjectSchema } from './RequestsUncheckedCreateWithoutRequestrunInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RequestsCreateWithoutRequestrunInputObjectSchema), z.lazy(() => RequestsUncheckedCreateWithoutRequestrunInputObjectSchema)])
}).strict();
export const RequestsCreateOrConnectWithoutRequestrunInputObjectSchema: z.ZodType<Prisma.RequestsCreateOrConnectWithoutRequestrunInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateOrConnectWithoutRequestrunInput>;
export const RequestsCreateOrConnectWithoutRequestrunInputObjectZodSchema = makeSchema();

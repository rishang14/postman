import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './RequestrunWhereUniqueInput.schema';
import { RequestrunCreateWithoutRequestInputObjectSchema as RequestrunCreateWithoutRequestInputObjectSchema } from './RequestrunCreateWithoutRequestInput.schema';
import { RequestrunUncheckedCreateWithoutRequestInputObjectSchema as RequestrunUncheckedCreateWithoutRequestInputObjectSchema } from './RequestrunUncheckedCreateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestrunWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RequestrunCreateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUncheckedCreateWithoutRequestInputObjectSchema)])
}).strict();
export const RequestrunCreateOrConnectWithoutRequestInputObjectSchema: z.ZodType<Prisma.RequestrunCreateOrConnectWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateOrConnectWithoutRequestInput>;
export const RequestrunCreateOrConnectWithoutRequestInputObjectZodSchema = makeSchema();

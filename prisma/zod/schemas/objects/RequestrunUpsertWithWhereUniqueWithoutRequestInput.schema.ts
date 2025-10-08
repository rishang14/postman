import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './RequestrunWhereUniqueInput.schema';
import { RequestrunUpdateWithoutRequestInputObjectSchema as RequestrunUpdateWithoutRequestInputObjectSchema } from './RequestrunUpdateWithoutRequestInput.schema';
import { RequestrunUncheckedUpdateWithoutRequestInputObjectSchema as RequestrunUncheckedUpdateWithoutRequestInputObjectSchema } from './RequestrunUncheckedUpdateWithoutRequestInput.schema';
import { RequestrunCreateWithoutRequestInputObjectSchema as RequestrunCreateWithoutRequestInputObjectSchema } from './RequestrunCreateWithoutRequestInput.schema';
import { RequestrunUncheckedCreateWithoutRequestInputObjectSchema as RequestrunUncheckedCreateWithoutRequestInputObjectSchema } from './RequestrunUncheckedCreateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestrunWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RequestrunUpdateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUncheckedUpdateWithoutRequestInputObjectSchema)]),
  create: z.union([z.lazy(() => RequestrunCreateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUncheckedCreateWithoutRequestInputObjectSchema)])
}).strict();
export const RequestrunUpsertWithWhereUniqueWithoutRequestInputObjectSchema: z.ZodType<Prisma.RequestrunUpsertWithWhereUniqueWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunUpsertWithWhereUniqueWithoutRequestInput>;
export const RequestrunUpsertWithWhereUniqueWithoutRequestInputObjectZodSchema = makeSchema();

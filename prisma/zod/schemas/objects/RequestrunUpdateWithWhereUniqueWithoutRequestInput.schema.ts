import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './RequestrunWhereUniqueInput.schema';
import { RequestrunUpdateWithoutRequestInputObjectSchema as RequestrunUpdateWithoutRequestInputObjectSchema } from './RequestrunUpdateWithoutRequestInput.schema';
import { RequestrunUncheckedUpdateWithoutRequestInputObjectSchema as RequestrunUncheckedUpdateWithoutRequestInputObjectSchema } from './RequestrunUncheckedUpdateWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestrunWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RequestrunUpdateWithoutRequestInputObjectSchema), z.lazy(() => RequestrunUncheckedUpdateWithoutRequestInputObjectSchema)])
}).strict();
export const RequestrunUpdateWithWhereUniqueWithoutRequestInputObjectSchema: z.ZodType<Prisma.RequestrunUpdateWithWhereUniqueWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunUpdateWithWhereUniqueWithoutRequestInput>;
export const RequestrunUpdateWithWhereUniqueWithoutRequestInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunScalarWhereInputObjectSchema as RequestrunScalarWhereInputObjectSchema } from './RequestrunScalarWhereInput.schema';
import { RequestrunUpdateManyMutationInputObjectSchema as RequestrunUpdateManyMutationInputObjectSchema } from './RequestrunUpdateManyMutationInput.schema';
import { RequestrunUncheckedUpdateManyWithoutRequestInputObjectSchema as RequestrunUncheckedUpdateManyWithoutRequestInputObjectSchema } from './RequestrunUncheckedUpdateManyWithoutRequestInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RequestrunScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RequestrunUpdateManyMutationInputObjectSchema), z.lazy(() => RequestrunUncheckedUpdateManyWithoutRequestInputObjectSchema)])
}).strict();
export const RequestrunUpdateManyWithWhereWithoutRequestInputObjectSchema: z.ZodType<Prisma.RequestrunUpdateManyWithWhereWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunUpdateManyWithWhereWithoutRequestInput>;
export const RequestrunUpdateManyWithWhereWithoutRequestInputObjectZodSchema = makeSchema();

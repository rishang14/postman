import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunCreateManyRequestInputObjectSchema as RequestrunCreateManyRequestInputObjectSchema } from './RequestrunCreateManyRequestInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RequestrunCreateManyRequestInputObjectSchema), z.lazy(() => RequestrunCreateManyRequestInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RequestrunCreateManyRequestInputEnvelopeObjectSchema: z.ZodType<Prisma.RequestrunCreateManyRequestInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateManyRequestInputEnvelope>;
export const RequestrunCreateManyRequestInputEnvelopeObjectZodSchema = makeSchema();

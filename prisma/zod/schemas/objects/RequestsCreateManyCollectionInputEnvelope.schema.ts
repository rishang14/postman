import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsCreateManyCollectionInputObjectSchema as RequestsCreateManyCollectionInputObjectSchema } from './RequestsCreateManyCollectionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RequestsCreateManyCollectionInputObjectSchema), z.lazy(() => RequestsCreateManyCollectionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RequestsCreateManyCollectionInputEnvelopeObjectSchema: z.ZodType<Prisma.RequestsCreateManyCollectionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateManyCollectionInputEnvelope>;
export const RequestsCreateManyCollectionInputEnvelopeObjectZodSchema = makeSchema();

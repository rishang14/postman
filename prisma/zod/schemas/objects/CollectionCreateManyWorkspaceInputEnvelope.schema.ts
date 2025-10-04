import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionCreateManyWorkspaceInputObjectSchema as CollectionCreateManyWorkspaceInputObjectSchema } from './CollectionCreateManyWorkspaceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CollectionCreateManyWorkspaceInputObjectSchema), z.lazy(() => CollectionCreateManyWorkspaceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CollectionCreateManyWorkspaceInputEnvelopeObjectSchema: z.ZodType<Prisma.CollectionCreateManyWorkspaceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateManyWorkspaceInputEnvelope>;
export const CollectionCreateManyWorkspaceInputEnvelopeObjectZodSchema = makeSchema();

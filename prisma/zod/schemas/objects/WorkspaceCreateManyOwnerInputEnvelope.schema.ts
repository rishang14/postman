import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateManyOwnerInputObjectSchema as WorkspaceCreateManyOwnerInputObjectSchema } from './WorkspaceCreateManyOwnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkspaceCreateManyOwnerInputObjectSchema), z.lazy(() => WorkspaceCreateManyOwnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkspaceCreateManyOwnerInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkspaceCreateManyOwnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateManyOwnerInputEnvelope>;
export const WorkspaceCreateManyOwnerInputEnvelopeObjectZodSchema = makeSchema();

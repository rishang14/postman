import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CollectionCreateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionCreateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateWithoutWorkspaceInput>;
export const CollectionCreateWithoutWorkspaceInputObjectZodSchema = makeSchema();

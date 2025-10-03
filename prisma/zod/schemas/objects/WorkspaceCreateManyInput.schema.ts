import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkspaceCreateManyInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateManyInput>;
export const WorkspaceCreateManyInputObjectZodSchema = makeSchema();

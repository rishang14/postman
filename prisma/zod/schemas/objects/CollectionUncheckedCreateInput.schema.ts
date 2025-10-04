import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const CollectionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CollectionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUncheckedCreateInput>;
export const CollectionUncheckedCreateInputObjectZodSchema = makeSchema();

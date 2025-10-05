import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CollectionUncheckedCreateWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionUncheckedCreateWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUncheckedCreateWithoutRequestInput>;
export const CollectionUncheckedCreateWithoutRequestInputObjectZodSchema = makeSchema();

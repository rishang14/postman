import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  request: z.boolean().optional()
}).strict();
export const CollectionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CollectionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCountOutputTypeSelect>;
export const CollectionCountOutputTypeSelectObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  method: z.literal(true).optional(),
  collectionId: z.literal(true).optional(),
  url: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const RequestsMaxAggregateInputObjectSchema: z.ZodType<Prisma.RequestsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestsMaxAggregateInputType>;
export const RequestsMaxAggregateInputObjectZodSchema = makeSchema();

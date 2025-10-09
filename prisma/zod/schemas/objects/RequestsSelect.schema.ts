import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionArgsObjectSchema as CollectionArgsObjectSchema } from './CollectionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  method: z.boolean().optional(),
  collectionId: z.boolean().optional(),
  collection: z.union([z.boolean(), z.lazy(() => CollectionArgsObjectSchema)]).optional(),
  url: z.boolean().optional(),
  parameters: z.boolean().optional(),
  headers: z.boolean().optional(),
  saved: z.boolean().optional(),
  requestrun: z.boolean().optional(),
  body: z.boolean().optional(),
  response: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const RequestsSelectObjectSchema: z.ZodType<Prisma.RequestsSelect> = makeSchema() as unknown as z.ZodType<Prisma.RequestsSelect>;
export const RequestsSelectObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const collectionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CollectionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollectionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollectionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollectionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CollectionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CollectionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CollectionScalarWhereWithAggregatesInput> = collectionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CollectionScalarWhereWithAggregatesInput>;
export const CollectionScalarWhereWithAggregatesInputObjectZodSchema = collectionscalarwherewithaggregatesinputSchema;

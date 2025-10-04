import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const collectionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CollectionScalarWhereInputObjectSchema), z.lazy(() => CollectionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollectionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollectionScalarWhereInputObjectSchema), z.lazy(() => CollectionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CollectionScalarWhereInputObjectSchema: z.ZodType<Prisma.CollectionScalarWhereInput> = collectionscalarwhereinputSchema as unknown as z.ZodType<Prisma.CollectionScalarWhereInput>;
export const CollectionScalarWhereInputObjectZodSchema = collectionscalarwhereinputSchema;

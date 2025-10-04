import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkspaceScalarRelationFilterObjectSchema as WorkspaceScalarRelationFilterObjectSchema } from './WorkspaceScalarRelationFilter.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const collectionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CollectionWhereInputObjectSchema), z.lazy(() => CollectionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CollectionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CollectionWhereInputObjectSchema), z.lazy(() => CollectionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workspace: z.union([z.lazy(() => WorkspaceScalarRelationFilterObjectSchema), z.lazy(() => WorkspaceWhereInputObjectSchema)]).optional()
}).strict();
export const CollectionWhereInputObjectSchema: z.ZodType<Prisma.CollectionWhereInput> = collectionwhereinputSchema as unknown as z.ZodType<Prisma.CollectionWhereInput>;
export const CollectionWhereInputObjectZodSchema = collectionwhereinputSchema;

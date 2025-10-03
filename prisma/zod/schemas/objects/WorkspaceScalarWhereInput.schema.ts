import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workspacescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceScalarWhereInputObjectSchema), z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceScalarWhereInputObjectSchema), z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkspaceScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkspaceScalarWhereInput> = workspacescalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkspaceScalarWhereInput>;
export const WorkspaceScalarWhereInputObjectZodSchema = workspacescalarwhereinputSchema;

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumMEMBER_ROLEWithAggregatesFilterObjectSchema as EnumMEMBER_ROLEWithAggregatesFilterObjectSchema } from './EnumMEMBER_ROLEWithAggregatesFilter.schema';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const workspacememberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumMEMBER_ROLEWithAggregatesFilterObjectSchema), MEMBER_ROLESchema]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberScalarWhereWithAggregatesInput> = workspacememberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkspaceMemberScalarWhereWithAggregatesInput>;
export const WorkspaceMemberScalarWhereWithAggregatesInputObjectZodSchema = workspacememberscalarwherewithaggregatesinputSchema;

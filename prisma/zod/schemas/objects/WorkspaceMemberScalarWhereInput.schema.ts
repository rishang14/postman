import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMEMBER_ROLEFilterObjectSchema as EnumMEMBER_ROLEFilterObjectSchema } from './EnumMEMBER_ROLEFilter.schema';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const workspacememberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumMEMBER_ROLEFilterObjectSchema), MEMBER_ROLESchema]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const WorkspaceMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberScalarWhereInput> = workspacememberscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkspaceMemberScalarWhereInput>;
export const WorkspaceMemberScalarWhereInputObjectZodSchema = workspacememberscalarwhereinputSchema;

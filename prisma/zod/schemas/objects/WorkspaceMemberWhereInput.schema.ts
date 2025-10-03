import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMEMBER_ROLEFilterObjectSchema as EnumMEMBER_ROLEFilterObjectSchema } from './EnumMEMBER_ROLEFilter.schema';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { WorkspaceScalarRelationFilterObjectSchema as WorkspaceScalarRelationFilterObjectSchema } from './WorkspaceScalarRelationFilter.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const workspacememberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceMemberWhereInputObjectSchema), z.lazy(() => WorkspaceMemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceMemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceMemberWhereInputObjectSchema), z.lazy(() => WorkspaceMemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumMEMBER_ROLEFilterObjectSchema), MEMBER_ROLESchema]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  workspace: z.union([z.lazy(() => WorkspaceScalarRelationFilterObjectSchema), z.lazy(() => WorkspaceWhereInputObjectSchema)]).optional()
}).strict();
export const WorkspaceMemberWhereInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberWhereInput> = workspacememberwhereinputSchema as unknown as z.ZodType<Prisma.WorkspaceMemberWhereInput>;
export const WorkspaceMemberWhereInputObjectZodSchema = workspacememberwhereinputSchema;

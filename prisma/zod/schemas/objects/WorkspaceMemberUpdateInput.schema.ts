import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema as EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema } from './EnumMEMBER_ROLEFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema as UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWorkspaceMemberNestedInput.schema';
import { WorkspaceUpdateOneRequiredWithoutMembersNestedInputObjectSchema as WorkspaceUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './WorkspaceUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([MEMBER_ROLESchema, z.lazy(() => EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema).optional(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberUpdateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateInput>;
export const WorkspaceMemberUpdateInputObjectZodSchema = makeSchema();

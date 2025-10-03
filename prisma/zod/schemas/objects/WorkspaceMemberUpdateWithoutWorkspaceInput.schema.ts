import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema as EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema } from './EnumMEMBER_ROLEFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema as UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWorkspaceMemberNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([MEMBER_ROLESchema, z.lazy(() => EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateWithoutWorkspaceInput>;
export const WorkspaceMemberUpdateWithoutWorkspaceInputObjectZodSchema = makeSchema();

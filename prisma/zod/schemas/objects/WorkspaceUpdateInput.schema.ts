import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutWorkapceNestedInputObjectSchema as UserUpdateOneRequiredWithoutWorkapceNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutWorkapceNestedInput.schema';
import { WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputObjectSchema as WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutWorkapceNestedInputObjectSchema).optional(),
  members: z.lazy(() => WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceUpdateInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateInput>;
export const WorkspaceUpdateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema as WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput.schema';
import { CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema as CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './CollectionUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
  colllection: z.lazy(() => CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutOwnerInput>;
export const WorkspaceUncheckedUpdateWithoutOwnerInputObjectZodSchema = makeSchema();

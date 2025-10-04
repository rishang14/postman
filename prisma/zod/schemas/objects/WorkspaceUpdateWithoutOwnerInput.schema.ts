import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputObjectSchema as WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput.schema';
import { CollectionUpdateManyWithoutWorkspaceNestedInputObjectSchema as CollectionUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './CollectionUpdateManyWithoutWorkspaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  members: z.lazy(() => WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional(),
  colllection: z.lazy(() => CollectionUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceUpdateWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateWithoutOwnerInput>;
export const WorkspaceUpdateWithoutOwnerInputObjectZodSchema = makeSchema();

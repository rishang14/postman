import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema as CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './CollectionUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  colllection: z.lazy(() => CollectionUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceUncheckedUpdateWithoutMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutMembersInput>;
export const WorkspaceUncheckedUpdateWithoutMembersInputObjectZodSchema = makeSchema();

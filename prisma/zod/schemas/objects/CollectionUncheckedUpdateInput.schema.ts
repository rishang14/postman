import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RequestsUncheckedUpdateManyWithoutCollectionNestedInputObjectSchema as RequestsUncheckedUpdateManyWithoutCollectionNestedInputObjectSchema } from './RequestsUncheckedUpdateManyWithoutCollectionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  workspaceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  request: z.lazy(() => RequestsUncheckedUpdateManyWithoutCollectionNestedInputObjectSchema).optional()
}).strict();
export const CollectionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CollectionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUncheckedUpdateInput>;
export const CollectionUncheckedUpdateInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RequestsUpdateManyWithoutCollectionNestedInputObjectSchema as RequestsUpdateManyWithoutCollectionNestedInputObjectSchema } from './RequestsUpdateManyWithoutCollectionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  request: z.lazy(() => RequestsUpdateManyWithoutCollectionNestedInputObjectSchema).optional()
}).strict();
export const CollectionUpdateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionUpdateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpdateWithoutWorkspaceInput>;
export const CollectionUpdateWithoutWorkspaceInputObjectZodSchema = makeSchema();

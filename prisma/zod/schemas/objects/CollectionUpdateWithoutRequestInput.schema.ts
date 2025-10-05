import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkspaceUpdateOneRequiredWithoutColllectionNestedInputObjectSchema as WorkspaceUpdateOneRequiredWithoutColllectionNestedInputObjectSchema } from './WorkspaceUpdateOneRequiredWithoutColllectionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutColllectionNestedInputObjectSchema).optional()
}).strict();
export const CollectionUpdateWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionUpdateWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpdateWithoutRequestInput>;
export const CollectionUpdateWithoutRequestInputObjectZodSchema = makeSchema();

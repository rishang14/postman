import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema';
import { EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema as EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema } from './EnumMEMBER_ROLEFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([MEMBER_ROLESchema, z.lazy(() => EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema)]).optional(),
  workspaceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateWithoutUserInput>;
export const WorkspaceMemberUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();

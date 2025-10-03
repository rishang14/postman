import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MEMBER_ROLESchema } from '../enums/MEMBER_ROLE.schema'

const makeSchema = () => z.object({
  set: MEMBER_ROLESchema.optional()
}).strict();
export const EnumMEMBER_ROLEFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumMEMBER_ROLEFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumMEMBER_ROLEFieldUpdateOperationsInput>;
export const EnumMEMBER_ROLEFieldUpdateOperationsInputObjectZodSchema = makeSchema();

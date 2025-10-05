import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema'

const makeSchema = () => z.object({
  set: REST_METHODSchema.optional()
}).strict();
export const EnumREST_METHODFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumREST_METHODFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumREST_METHODFieldUpdateOperationsInput>;
export const EnumREST_METHODFieldUpdateOperationsInputObjectZodSchema = makeSchema();

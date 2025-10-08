import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: z.number().int(),
  statusText: z.string().optional().nullable(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  body: z.string().optional().nullable(),
  durationMs: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RequestrunCreateWithoutRequestInputObjectSchema: z.ZodType<Prisma.RequestrunCreateWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateWithoutRequestInput>;
export const RequestrunCreateWithoutRequestInputObjectZodSchema = makeSchema();

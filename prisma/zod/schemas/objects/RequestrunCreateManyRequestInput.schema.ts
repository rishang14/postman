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
export const RequestrunCreateManyRequestInputObjectSchema: z.ZodType<Prisma.RequestrunCreateManyRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateManyRequestInput>;
export const RequestrunCreateManyRequestInputObjectZodSchema = makeSchema();

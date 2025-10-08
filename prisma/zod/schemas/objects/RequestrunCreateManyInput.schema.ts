import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  requestid: z.string(),
  status: z.number().int(),
  statusText: z.string().optional().nullable(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  body: z.string().optional().nullable(),
  durationMs: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RequestrunCreateManyInputObjectSchema: z.ZodType<Prisma.RequestrunCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateManyInput>;
export const RequestrunCreateManyInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { RequestsCreateNestedOneWithoutRequestrunInputObjectSchema as RequestsCreateNestedOneWithoutRequestrunInputObjectSchema } from './RequestsCreateNestedOneWithoutRequestrunInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: z.number().int(),
  statusText: z.string().optional().nullable(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  body: z.string().optional().nullable(),
  durationMs: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  request: z.lazy(() => RequestsCreateNestedOneWithoutRequestrunInputObjectSchema)
}).strict();
export const RequestrunCreateInputObjectSchema: z.ZodType<Prisma.RequestrunCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunCreateInput>;
export const RequestrunCreateInputObjectZodSchema = makeSchema();

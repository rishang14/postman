import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  method: REST_METHODSchema,
  collectionId: z.string(),
  url: z.string(),
  parameters: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  saved: z.boolean().optional(),
  requestrun: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  body: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  response: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const RequestsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RequestsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsUncheckedCreateInput>;
export const RequestsUncheckedCreateInputObjectZodSchema = makeSchema();

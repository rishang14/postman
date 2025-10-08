import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { RequestrunCreateNestedManyWithoutRequestInputObjectSchema as RequestrunCreateNestedManyWithoutRequestInputObjectSchema } from './RequestrunCreateNestedManyWithoutRequestInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  method: REST_METHODSchema,
  url: z.string(),
  parameters: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  saved: z.boolean().optional(),
  body: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  response: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  requestrun: z.lazy(() => RequestrunCreateNestedManyWithoutRequestInputObjectSchema).optional()
}).strict();
export const RequestsCreateWithoutCollectionInputObjectSchema: z.ZodType<Prisma.RequestsCreateWithoutCollectionInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateWithoutCollectionInput>;
export const RequestsCreateWithoutCollectionInputObjectZodSchema = makeSchema();

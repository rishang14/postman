import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { CollectionCreateNestedOneWithoutRequestInputObjectSchema as CollectionCreateNestedOneWithoutRequestInputObjectSchema } from './CollectionCreateNestedOneWithoutRequestInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  method: REST_METHODSchema,
  url: z.string(),
  parameters: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  body: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  response: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutRequestInputObjectSchema)
}).strict();
export const RequestsCreateInputObjectSchema: z.ZodType<Prisma.RequestsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCreateInput>;
export const RequestsCreateInputObjectZodSchema = makeSchema();

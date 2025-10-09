import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumREST_METHODWithAggregatesFilterObjectSchema as EnumREST_METHODWithAggregatesFilterObjectSchema } from './EnumREST_METHODWithAggregatesFilter.schema';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const requestsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RequestsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  method: z.union([z.lazy(() => EnumREST_METHODWithAggregatesFilterObjectSchema), REST_METHODSchema]).optional(),
  collectionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  parameters: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  headers: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  saved: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  requestrun: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  body: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  response: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RequestsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RequestsScalarWhereWithAggregatesInput> = requestsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RequestsScalarWhereWithAggregatesInput>;
export const RequestsScalarWhereWithAggregatesInputObjectZodSchema = requestsscalarwherewithaggregatesinputSchema;

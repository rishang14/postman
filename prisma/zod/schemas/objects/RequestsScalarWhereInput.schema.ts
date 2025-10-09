import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumREST_METHODFilterObjectSchema as EnumREST_METHODFilterObjectSchema } from './EnumREST_METHODFilter.schema';
import { REST_METHODSchema } from '../enums/REST_METHOD.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const requestsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RequestsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RequestsScalarWhereInputObjectSchema), z.lazy(() => RequestsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  method: z.union([z.lazy(() => EnumREST_METHODFilterObjectSchema), REST_METHODSchema]).optional(),
  collectionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  parameters: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  headers: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  saved: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  requestrun: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  body: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  response: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RequestsScalarWhereInputObjectSchema: z.ZodType<Prisma.RequestsScalarWhereInput> = requestsscalarwhereinputSchema as unknown as z.ZodType<Prisma.RequestsScalarWhereInput>;
export const RequestsScalarWhereInputObjectZodSchema = requestsscalarwhereinputSchema;

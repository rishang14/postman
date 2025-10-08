import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RequestsScalarRelationFilterObjectSchema as RequestsScalarRelationFilterObjectSchema } from './RequestsScalarRelationFilter.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './RequestsWhereInput.schema'

const requestrunwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RequestrunWhereInputObjectSchema), z.lazy(() => RequestrunWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RequestrunWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RequestrunWhereInputObjectSchema), z.lazy(() => RequestrunWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  requestid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  statusText: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  headers: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  body: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  durationMs: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  request: z.union([z.lazy(() => RequestsScalarRelationFilterObjectSchema), z.lazy(() => RequestsWhereInputObjectSchema)]).optional()
}).strict();
export const RequestrunWhereInputObjectSchema: z.ZodType<Prisma.RequestrunWhereInput> = requestrunwhereinputSchema as unknown as z.ZodType<Prisma.RequestrunWhereInput>;
export const RequestrunWhereInputObjectZodSchema = requestrunwhereinputSchema;

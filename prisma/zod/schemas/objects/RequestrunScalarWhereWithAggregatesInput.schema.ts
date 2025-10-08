import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const requestrunscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RequestrunScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RequestrunScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RequestrunScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RequestrunScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RequestrunScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  requestid: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  statusText: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  headers: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  body: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  durationMs: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RequestrunScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RequestrunScalarWhereWithAggregatesInput> = requestrunscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RequestrunScalarWhereWithAggregatesInput>;
export const RequestrunScalarWhereWithAggregatesInputObjectZodSchema = requestrunscalarwherewithaggregatesinputSchema;

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './RequestrunSelect.schema';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './RequestrunInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RequestrunSelectObjectSchema).optional(),
  include: z.lazy(() => RequestrunIncludeObjectSchema).optional()
}).strict();
export const RequestrunArgsObjectSchema = makeSchema();
export const RequestrunArgsObjectZodSchema = makeSchema();

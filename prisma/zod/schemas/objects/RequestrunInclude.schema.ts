import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsArgsObjectSchema as RequestsArgsObjectSchema } from './RequestsArgs.schema'

const makeSchema = () => z.object({
  request: z.union([z.boolean(), z.lazy(() => RequestsArgsObjectSchema)]).optional()
}).strict();
export const RequestrunIncludeObjectSchema: z.ZodType<Prisma.RequestrunInclude> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunInclude>;
export const RequestrunIncludeObjectZodSchema = makeSchema();

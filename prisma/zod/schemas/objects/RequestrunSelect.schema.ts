import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsArgsObjectSchema as RequestsArgsObjectSchema } from './RequestsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  requestid: z.boolean().optional(),
  request: z.union([z.boolean(), z.lazy(() => RequestsArgsObjectSchema)]).optional(),
  status: z.boolean().optional(),
  statusText: z.boolean().optional(),
  headers: z.boolean().optional(),
  body: z.boolean().optional(),
  durationMs: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const RequestrunSelectObjectSchema: z.ZodType<Prisma.RequestrunSelect> = makeSchema() as unknown as z.ZodType<Prisma.RequestrunSelect>;
export const RequestrunSelectObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();
export const VerificationCreateInputObjectSchema: z.ZodType<Prisma.VerificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationCreateInput>;
export const VerificationCreateInputObjectZodSchema = makeSchema();

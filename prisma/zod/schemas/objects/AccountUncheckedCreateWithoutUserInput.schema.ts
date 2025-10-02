import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  accessTokenExpiresAt: z.coerce.date().optional().nullable(),
  refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
  scope: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AccountUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput>;
export const AccountUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();

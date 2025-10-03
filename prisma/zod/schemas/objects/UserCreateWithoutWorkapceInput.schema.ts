import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema as WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema } from './WorkspaceMemberCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  WorkspaceMember: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWorkapceInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWorkapceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWorkapceInput>;
export const UserCreateWithoutWorkapceInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema as WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  WorkspaceMember: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWorkapceInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkapceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutWorkapceInput>;
export const UserUncheckedCreateWithoutWorkapceInputObjectZodSchema = makeSchema();

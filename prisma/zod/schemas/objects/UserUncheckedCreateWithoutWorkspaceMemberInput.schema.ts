import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema as WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateNestedManyWithoutOwnerInput.schema'

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
  workapce: z.lazy(() => WorkspaceUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspaceMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspaceMemberInput>;
export const UserUncheckedCreateWithoutWorkspaceMemberInputObjectZodSchema = makeSchema();

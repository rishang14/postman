import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema as WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema } from './WorkspaceCreateNestedManyWithoutOwnerInput.schema'

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
  workapce: z.lazy(() => WorkspaceCreateNestedManyWithoutOwnerInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWorkspaceMemberInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWorkspaceMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWorkspaceMemberInput>;
export const UserCreateWithoutWorkspaceMemberInputObjectZodSchema = makeSchema();

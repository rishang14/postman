import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutWorkspaceMemberInputObjectSchema as UserUpdateWithoutWorkspaceMemberInputObjectSchema } from './UserUpdateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceMemberInput.schema';
import { UserCreateWithoutWorkspaceMemberInputObjectSchema as UserCreateWithoutWorkspaceMemberInputObjectSchema } from './UserCreateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMemberInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWorkspaceMemberInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWorkspaceMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWorkspaceMemberInput>;
export const UserUpsertWithoutWorkspaceMemberInputObjectZodSchema = makeSchema();

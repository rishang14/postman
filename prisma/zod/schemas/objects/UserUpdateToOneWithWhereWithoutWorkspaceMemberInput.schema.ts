import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWorkspaceMemberInputObjectSchema as UserUpdateWithoutWorkspaceMemberInputObjectSchema } from './UserUpdateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWorkspaceMemberInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkspaceMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkspaceMemberInput>;
export const UserUpdateToOneWithWhereWithoutWorkspaceMemberInputObjectZodSchema = makeSchema();

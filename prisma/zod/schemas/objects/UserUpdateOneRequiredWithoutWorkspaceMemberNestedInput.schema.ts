import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWorkspaceMemberInputObjectSchema as UserCreateWithoutWorkspaceMemberInputObjectSchema } from './UserCreateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMemberInput.schema';
import { UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema as UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema } from './UserCreateOrConnectWithoutWorkspaceMemberInput.schema';
import { UserUpsertWithoutWorkspaceMemberInputObjectSchema as UserUpsertWithoutWorkspaceMemberInputObjectSchema } from './UserUpsertWithoutWorkspaceMemberInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWorkspaceMemberInputObjectSchema as UserUpdateToOneWithWhereWithoutWorkspaceMemberInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWorkspaceMemberInput.schema';
import { UserUpdateWithoutWorkspaceMemberInputObjectSchema as UserUpdateWithoutWorkspaceMemberInputObjectSchema } from './UserUpdateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceMemberInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWorkspaceMemberInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUpdateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMemberInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspaceMemberNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspaceMemberNestedInput>;
export const UserUpdateOneRequiredWithoutWorkspaceMemberNestedInputObjectZodSchema = makeSchema();

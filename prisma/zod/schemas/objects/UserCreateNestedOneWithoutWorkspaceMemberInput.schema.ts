import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWorkspaceMemberInputObjectSchema as UserCreateWithoutWorkspaceMemberInputObjectSchema } from './UserCreateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMemberInput.schema';
import { UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema as UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema } from './UserCreateOrConnectWithoutWorkspaceMemberInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWorkspaceMemberInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspaceMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspaceMemberInput>;
export const UserCreateNestedOneWithoutWorkspaceMemberInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWorkspaceMemberInputObjectSchema as UserCreateWithoutWorkspaceMemberInputObjectSchema } from './UserCreateWithoutWorkspaceMemberInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMemberInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMemberInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWorkspaceMemberInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkspaceMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWorkspaceMemberInput>;
export const UserCreateOrConnectWithoutWorkspaceMemberInputObjectZodSchema = makeSchema();

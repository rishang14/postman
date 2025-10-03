import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWorkapceInputObjectSchema as UserCreateWithoutWorkapceInputObjectSchema } from './UserCreateWithoutWorkapceInput.schema';
import { UserUncheckedCreateWithoutWorkapceInputObjectSchema as UserUncheckedCreateWithoutWorkapceInputObjectSchema } from './UserUncheckedCreateWithoutWorkapceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkapceInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWorkapceInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkapceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWorkapceInput>;
export const UserCreateOrConnectWithoutWorkapceInputObjectZodSchema = makeSchema();

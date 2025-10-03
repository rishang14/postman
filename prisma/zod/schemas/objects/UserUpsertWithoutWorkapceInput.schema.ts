import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutWorkapceInputObjectSchema as UserUpdateWithoutWorkapceInputObjectSchema } from './UserUpdateWithoutWorkapceInput.schema';
import { UserUncheckedUpdateWithoutWorkapceInputObjectSchema as UserUncheckedUpdateWithoutWorkapceInputObjectSchema } from './UserUncheckedUpdateWithoutWorkapceInput.schema';
import { UserCreateWithoutWorkapceInputObjectSchema as UserCreateWithoutWorkapceInputObjectSchema } from './UserCreateWithoutWorkapceInput.schema';
import { UserUncheckedCreateWithoutWorkapceInputObjectSchema as UserUncheckedCreateWithoutWorkapceInputObjectSchema } from './UserUncheckedCreateWithoutWorkapceInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkapceInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkapceInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWorkapceInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWorkapceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWorkapceInput>;
export const UserUpsertWithoutWorkapceInputObjectZodSchema = makeSchema();

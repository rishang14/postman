import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWorkapceInputObjectSchema as UserCreateWithoutWorkapceInputObjectSchema } from './UserCreateWithoutWorkapceInput.schema';
import { UserUncheckedCreateWithoutWorkapceInputObjectSchema as UserUncheckedCreateWithoutWorkapceInputObjectSchema } from './UserUncheckedCreateWithoutWorkapceInput.schema';
import { UserCreateOrConnectWithoutWorkapceInputObjectSchema as UserCreateOrConnectWithoutWorkapceInputObjectSchema } from './UserCreateOrConnectWithoutWorkapceInput.schema';
import { UserUpsertWithoutWorkapceInputObjectSchema as UserUpsertWithoutWorkapceInputObjectSchema } from './UserUpsertWithoutWorkapceInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWorkapceInputObjectSchema as UserUpdateToOneWithWhereWithoutWorkapceInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWorkapceInput.schema';
import { UserUpdateWithoutWorkapceInputObjectSchema as UserUpdateWithoutWorkapceInputObjectSchema } from './UserUpdateWithoutWorkapceInput.schema';
import { UserUncheckedUpdateWithoutWorkapceInputObjectSchema as UserUncheckedUpdateWithoutWorkapceInputObjectSchema } from './UserUncheckedUpdateWithoutWorkapceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkapceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkapceInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWorkapceInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWorkapceInputObjectSchema), z.lazy(() => UserUpdateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkapceInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWorkapceNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkapceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkapceNestedInput>;
export const UserUpdateOneRequiredWithoutWorkapceNestedInputObjectZodSchema = makeSchema();

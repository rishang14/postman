import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWorkapceInputObjectSchema as UserCreateWithoutWorkapceInputObjectSchema } from './UserCreateWithoutWorkapceInput.schema';
import { UserUncheckedCreateWithoutWorkapceInputObjectSchema as UserUncheckedCreateWithoutWorkapceInputObjectSchema } from './UserUncheckedCreateWithoutWorkapceInput.schema';
import { UserCreateOrConnectWithoutWorkapceInputObjectSchema as UserCreateOrConnectWithoutWorkapceInputObjectSchema } from './UserCreateOrConnectWithoutWorkapceInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkapceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkapceInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWorkapceInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkapceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWorkapceInput>;
export const UserCreateNestedOneWithoutWorkapceInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWorkapceInputObjectSchema as UserUpdateWithoutWorkapceInputObjectSchema } from './UserUpdateWithoutWorkapceInput.schema';
import { UserUncheckedUpdateWithoutWorkapceInputObjectSchema as UserUncheckedUpdateWithoutWorkapceInputObjectSchema } from './UserUncheckedUpdateWithoutWorkapceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWorkapceInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkapceInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWorkapceInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkapceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkapceInput>;
export const UserUpdateToOneWithWhereWithoutWorkapceInputObjectZodSchema = makeSchema();

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './objects/RequestrunWhereInput.schema';

export const RequestrunDeleteManySchema: z.ZodType<Prisma.RequestrunDeleteManyArgs> = z.object({ where: RequestrunWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunDeleteManyArgs>;

export const RequestrunDeleteManyZodSchema = z.object({ where: RequestrunWhereInputObjectSchema.optional() }).strict();
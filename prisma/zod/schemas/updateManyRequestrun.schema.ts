import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunUpdateManyMutationInputObjectSchema as RequestrunUpdateManyMutationInputObjectSchema } from './objects/RequestrunUpdateManyMutationInput.schema';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './objects/RequestrunWhereInput.schema';

export const RequestrunUpdateManySchema: z.ZodType<Prisma.RequestrunUpdateManyArgs> = z.object({ data: RequestrunUpdateManyMutationInputObjectSchema, where: RequestrunWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunUpdateManyArgs>;

export const RequestrunUpdateManyZodSchema = z.object({ data: RequestrunUpdateManyMutationInputObjectSchema, where: RequestrunWhereInputObjectSchema.optional() }).strict();
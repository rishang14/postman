import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './objects/RequestrunSelect.schema';
import { RequestrunUpdateManyMutationInputObjectSchema as RequestrunUpdateManyMutationInputObjectSchema } from './objects/RequestrunUpdateManyMutationInput.schema';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './objects/RequestrunWhereInput.schema';

export const RequestrunUpdateManyAndReturnSchema: z.ZodType<Prisma.RequestrunUpdateManyAndReturnArgs> = z.object({ select: RequestrunSelectObjectSchema.optional(), data: RequestrunUpdateManyMutationInputObjectSchema, where: RequestrunWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunUpdateManyAndReturnArgs>;

export const RequestrunUpdateManyAndReturnZodSchema = z.object({ select: RequestrunSelectObjectSchema.optional(), data: RequestrunUpdateManyMutationInputObjectSchema, where: RequestrunWhereInputObjectSchema.optional() }).strict();
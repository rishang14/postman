import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './objects/RequestrunSelect.schema';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './objects/RequestrunInclude.schema';
import { RequestrunUpdateInputObjectSchema as RequestrunUpdateInputObjectSchema } from './objects/RequestrunUpdateInput.schema';
import { RequestrunUncheckedUpdateInputObjectSchema as RequestrunUncheckedUpdateInputObjectSchema } from './objects/RequestrunUncheckedUpdateInput.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './objects/RequestrunWhereUniqueInput.schema';

export const RequestrunUpdateOneSchema: z.ZodType<Prisma.RequestrunUpdateArgs> = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), data: z.union([RequestrunUpdateInputObjectSchema, RequestrunUncheckedUpdateInputObjectSchema]), where: RequestrunWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RequestrunUpdateArgs>;

export const RequestrunUpdateOneZodSchema = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), data: z.union([RequestrunUpdateInputObjectSchema, RequestrunUncheckedUpdateInputObjectSchema]), where: RequestrunWhereUniqueInputObjectSchema }).strict();
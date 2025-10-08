import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './objects/RequestrunSelect.schema';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './objects/RequestrunInclude.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './objects/RequestrunWhereUniqueInput.schema';
import { RequestrunCreateInputObjectSchema as RequestrunCreateInputObjectSchema } from './objects/RequestrunCreateInput.schema';
import { RequestrunUncheckedCreateInputObjectSchema as RequestrunUncheckedCreateInputObjectSchema } from './objects/RequestrunUncheckedCreateInput.schema';
import { RequestrunUpdateInputObjectSchema as RequestrunUpdateInputObjectSchema } from './objects/RequestrunUpdateInput.schema';
import { RequestrunUncheckedUpdateInputObjectSchema as RequestrunUncheckedUpdateInputObjectSchema } from './objects/RequestrunUncheckedUpdateInput.schema';

export const RequestrunUpsertOneSchema: z.ZodType<Prisma.RequestrunUpsertArgs> = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), where: RequestrunWhereUniqueInputObjectSchema, create: z.union([ RequestrunCreateInputObjectSchema, RequestrunUncheckedCreateInputObjectSchema ]), update: z.union([ RequestrunUpdateInputObjectSchema, RequestrunUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RequestrunUpsertArgs>;

export const RequestrunUpsertOneZodSchema = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), where: RequestrunWhereUniqueInputObjectSchema, create: z.union([ RequestrunCreateInputObjectSchema, RequestrunUncheckedCreateInputObjectSchema ]), update: z.union([ RequestrunUpdateInputObjectSchema, RequestrunUncheckedUpdateInputObjectSchema ]) }).strict();
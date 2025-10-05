import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestsSelectObjectSchema as RequestsSelectObjectSchema } from './objects/RequestsSelect.schema';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';
import { RequestsCreateInputObjectSchema as RequestsCreateInputObjectSchema } from './objects/RequestsCreateInput.schema';
import { RequestsUncheckedCreateInputObjectSchema as RequestsUncheckedCreateInputObjectSchema } from './objects/RequestsUncheckedCreateInput.schema';
import { RequestsUpdateInputObjectSchema as RequestsUpdateInputObjectSchema } from './objects/RequestsUpdateInput.schema';
import { RequestsUncheckedUpdateInputObjectSchema as RequestsUncheckedUpdateInputObjectSchema } from './objects/RequestsUncheckedUpdateInput.schema';

export const RequestsUpsertOneSchema: z.ZodType<Prisma.RequestsUpsertArgs> = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), where: RequestsWhereUniqueInputObjectSchema, create: z.union([ RequestsCreateInputObjectSchema, RequestsUncheckedCreateInputObjectSchema ]), update: z.union([ RequestsUpdateInputObjectSchema, RequestsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RequestsUpsertArgs>;

export const RequestsUpsertOneZodSchema = z.object({ select: RequestsSelectObjectSchema.optional(), include: RequestsIncludeObjectSchema.optional(), where: RequestsWhereUniqueInputObjectSchema, create: z.union([ RequestsCreateInputObjectSchema, RequestsUncheckedCreateInputObjectSchema ]), update: z.union([ RequestsUpdateInputObjectSchema, RequestsUncheckedUpdateInputObjectSchema ]) }).strict();
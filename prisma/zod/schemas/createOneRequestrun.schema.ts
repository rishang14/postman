import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './objects/RequestrunSelect.schema';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './objects/RequestrunInclude.schema';
import { RequestrunCreateInputObjectSchema as RequestrunCreateInputObjectSchema } from './objects/RequestrunCreateInput.schema';
import { RequestrunUncheckedCreateInputObjectSchema as RequestrunUncheckedCreateInputObjectSchema } from './objects/RequestrunUncheckedCreateInput.schema';

export const RequestrunCreateOneSchema: z.ZodType<Prisma.RequestrunCreateArgs> = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), data: z.union([RequestrunCreateInputObjectSchema, RequestrunUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RequestrunCreateArgs>;

export const RequestrunCreateOneZodSchema = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), data: z.union([RequestrunCreateInputObjectSchema, RequestrunUncheckedCreateInputObjectSchema]) }).strict();
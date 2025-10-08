import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './objects/RequestrunSelect.schema';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './objects/RequestrunInclude.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './objects/RequestrunWhereUniqueInput.schema';

export const RequestrunFindUniqueOrThrowSchema: z.ZodType<Prisma.RequestrunFindUniqueOrThrowArgs> = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), where: RequestrunWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RequestrunFindUniqueOrThrowArgs>;

export const RequestrunFindUniqueOrThrowZodSchema = z.object({ select: RequestrunSelectObjectSchema.optional(), include: RequestrunIncludeObjectSchema.optional(), where: RequestrunWhereUniqueInputObjectSchema }).strict();
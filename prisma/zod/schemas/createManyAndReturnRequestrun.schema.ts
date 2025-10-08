import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunSelectObjectSchema as RequestrunSelectObjectSchema } from './objects/RequestrunSelect.schema';
import { RequestrunCreateManyInputObjectSchema as RequestrunCreateManyInputObjectSchema } from './objects/RequestrunCreateManyInput.schema';

export const RequestrunCreateManyAndReturnSchema: z.ZodType<Prisma.RequestrunCreateManyAndReturnArgs> = z.object({ select: RequestrunSelectObjectSchema.optional(), data: z.union([ RequestrunCreateManyInputObjectSchema, z.array(RequestrunCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunCreateManyAndReturnArgs>;

export const RequestrunCreateManyAndReturnZodSchema = z.object({ select: RequestrunSelectObjectSchema.optional(), data: z.union([ RequestrunCreateManyInputObjectSchema, z.array(RequestrunCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
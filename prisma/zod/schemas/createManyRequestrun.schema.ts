import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunCreateManyInputObjectSchema as RequestrunCreateManyInputObjectSchema } from './objects/RequestrunCreateManyInput.schema';

export const RequestrunCreateManySchema: z.ZodType<Prisma.RequestrunCreateManyArgs> = z.object({ data: z.union([ RequestrunCreateManyInputObjectSchema, z.array(RequestrunCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunCreateManyArgs>;

export const RequestrunCreateManyZodSchema = z.object({ data: z.union([ RequestrunCreateManyInputObjectSchema, z.array(RequestrunCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();
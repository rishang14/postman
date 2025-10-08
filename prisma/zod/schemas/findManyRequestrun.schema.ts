import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './objects/RequestrunInclude.schema';
import { RequestrunOrderByWithRelationInputObjectSchema as RequestrunOrderByWithRelationInputObjectSchema } from './objects/RequestrunOrderByWithRelationInput.schema';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './objects/RequestrunWhereInput.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './objects/RequestrunWhereUniqueInput.schema';
import { RequestrunScalarFieldEnumSchema } from './enums/RequestrunScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestrunFindManySelectSchema: z.ZodType<Prisma.RequestrunSelect> = z.object({
    id: z.boolean().optional(),
    requestid: z.boolean().optional(),
    request: z.boolean().optional(),
    status: z.boolean().optional(),
    statusText: z.boolean().optional(),
    headers: z.boolean().optional(),
    body: z.boolean().optional(),
    durationMs: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RequestrunSelect>;

export const RequestrunFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    requestid: z.boolean().optional(),
    request: z.boolean().optional(),
    status: z.boolean().optional(),
    statusText: z.boolean().optional(),
    headers: z.boolean().optional(),
    body: z.boolean().optional(),
    durationMs: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const RequestrunFindManySchema: z.ZodType<Prisma.RequestrunFindManyArgs> = z.object({ select: RequestrunFindManySelectSchema.optional(), include: z.lazy(() => RequestrunIncludeObjectSchema.optional()), orderBy: z.union([RequestrunOrderByWithRelationInputObjectSchema, RequestrunOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestrunWhereInputObjectSchema.optional(), cursor: RequestrunWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestrunScalarFieldEnumSchema, RequestrunScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunFindManyArgs>;

export const RequestrunFindManyZodSchema = z.object({ select: RequestrunFindManySelectSchema.optional(), include: z.lazy(() => RequestrunIncludeObjectSchema.optional()), orderBy: z.union([RequestrunOrderByWithRelationInputObjectSchema, RequestrunOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestrunWhereInputObjectSchema.optional(), cursor: RequestrunWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestrunScalarFieldEnumSchema, RequestrunScalarFieldEnumSchema.array()]).optional() }).strict();
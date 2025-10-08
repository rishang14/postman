import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunIncludeObjectSchema as RequestrunIncludeObjectSchema } from './objects/RequestrunInclude.schema';
import { RequestrunOrderByWithRelationInputObjectSchema as RequestrunOrderByWithRelationInputObjectSchema } from './objects/RequestrunOrderByWithRelationInput.schema';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './objects/RequestrunWhereInput.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './objects/RequestrunWhereUniqueInput.schema';
import { RequestrunScalarFieldEnumSchema } from './enums/RequestrunScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestrunFindFirstOrThrowSelectSchema: z.ZodType<Prisma.RequestrunSelect> = z.object({
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

export const RequestrunFindFirstOrThrowSelectZodSchema = z.object({
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

export const RequestrunFindFirstOrThrowSchema: z.ZodType<Prisma.RequestrunFindFirstOrThrowArgs> = z.object({ select: RequestrunFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RequestrunIncludeObjectSchema.optional()), orderBy: z.union([RequestrunOrderByWithRelationInputObjectSchema, RequestrunOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestrunWhereInputObjectSchema.optional(), cursor: RequestrunWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestrunScalarFieldEnumSchema, RequestrunScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunFindFirstOrThrowArgs>;

export const RequestrunFindFirstOrThrowZodSchema = z.object({ select: RequestrunFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => RequestrunIncludeObjectSchema.optional()), orderBy: z.union([RequestrunOrderByWithRelationInputObjectSchema, RequestrunOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestrunWhereInputObjectSchema.optional(), cursor: RequestrunWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestrunScalarFieldEnumSchema, RequestrunScalarFieldEnumSchema.array()]).optional() }).strict();
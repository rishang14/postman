import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestsIncludeObjectSchema as RequestsIncludeObjectSchema } from './objects/RequestsInclude.schema';
import { RequestsOrderByWithRelationInputObjectSchema as RequestsOrderByWithRelationInputObjectSchema } from './objects/RequestsOrderByWithRelationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';
import { RequestsScalarFieldEnumSchema } from './enums/RequestsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RequestsFindManySelectSchema: z.ZodType<Prisma.RequestsSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    method: z.boolean().optional(),
    collectionId: z.boolean().optional(),
    collection: z.boolean().optional(),
    url: z.boolean().optional(),
    parameters: z.boolean().optional(),
    headers: z.boolean().optional(),
    saved: z.boolean().optional(),
    body: z.boolean().optional(),
    response: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RequestsSelect>;

export const RequestsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    method: z.boolean().optional(),
    collectionId: z.boolean().optional(),
    collection: z.boolean().optional(),
    url: z.boolean().optional(),
    parameters: z.boolean().optional(),
    headers: z.boolean().optional(),
    saved: z.boolean().optional(),
    body: z.boolean().optional(),
    response: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const RequestsFindManySchema: z.ZodType<Prisma.RequestsFindManyArgs> = z.object({ select: RequestsFindManySelectSchema.optional(), include: z.lazy(() => RequestsIncludeObjectSchema.optional()), orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RequestsFindManyArgs>;

export const RequestsFindManyZodSchema = z.object({ select: RequestsFindManySelectSchema.optional(), include: z.lazy(() => RequestsIncludeObjectSchema.optional()), orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RequestsScalarFieldEnumSchema, RequestsScalarFieldEnumSchema.array()]).optional() }).strict();
import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestrunOrderByWithRelationInputObjectSchema as RequestrunOrderByWithRelationInputObjectSchema } from './objects/RequestrunOrderByWithRelationInput.schema';
import { RequestrunWhereInputObjectSchema as RequestrunWhereInputObjectSchema } from './objects/RequestrunWhereInput.schema';
import { RequestrunWhereUniqueInputObjectSchema as RequestrunWhereUniqueInputObjectSchema } from './objects/RequestrunWhereUniqueInput.schema';
import { RequestrunCountAggregateInputObjectSchema as RequestrunCountAggregateInputObjectSchema } from './objects/RequestrunCountAggregateInput.schema';

export const RequestrunCountSchema: z.ZodType<Prisma.RequestrunCountArgs> = z.object({ orderBy: z.union([RequestrunOrderByWithRelationInputObjectSchema, RequestrunOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestrunWhereInputObjectSchema.optional(), cursor: RequestrunWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RequestrunCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RequestrunCountArgs>;

export const RequestrunCountZodSchema = z.object({ orderBy: z.union([RequestrunOrderByWithRelationInputObjectSchema, RequestrunOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestrunWhereInputObjectSchema.optional(), cursor: RequestrunWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RequestrunCountAggregateInputObjectSchema ]).optional() }).strict();
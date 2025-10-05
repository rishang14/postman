import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestsOrderByWithRelationInputObjectSchema as RequestsOrderByWithRelationInputObjectSchema } from './objects/RequestsOrderByWithRelationInput.schema';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
import { RequestsWhereUniqueInputObjectSchema as RequestsWhereUniqueInputObjectSchema } from './objects/RequestsWhereUniqueInput.schema';
import { RequestsCountAggregateInputObjectSchema as RequestsCountAggregateInputObjectSchema } from './objects/RequestsCountAggregateInput.schema';
import { RequestsMinAggregateInputObjectSchema as RequestsMinAggregateInputObjectSchema } from './objects/RequestsMinAggregateInput.schema';
import { RequestsMaxAggregateInputObjectSchema as RequestsMaxAggregateInputObjectSchema } from './objects/RequestsMaxAggregateInput.schema';

export const RequestsAggregateSchema: z.ZodType<Prisma.RequestsAggregateArgs> = z.object({ orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional(), _min: RequestsMinAggregateInputObjectSchema.optional(), _max: RequestsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestsAggregateArgs>;

export const RequestsAggregateZodSchema = z.object({ orderBy: z.union([RequestsOrderByWithRelationInputObjectSchema, RequestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RequestsWhereInputObjectSchema.optional(), cursor: RequestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional(), _min: RequestsMinAggregateInputObjectSchema.optional(), _max: RequestsMaxAggregateInputObjectSchema.optional() }).strict();
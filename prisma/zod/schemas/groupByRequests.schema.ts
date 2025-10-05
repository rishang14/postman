import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RequestsWhereInputObjectSchema as RequestsWhereInputObjectSchema } from './objects/RequestsWhereInput.schema';
import { RequestsOrderByWithAggregationInputObjectSchema as RequestsOrderByWithAggregationInputObjectSchema } from './objects/RequestsOrderByWithAggregationInput.schema';
import { RequestsScalarWhereWithAggregatesInputObjectSchema as RequestsScalarWhereWithAggregatesInputObjectSchema } from './objects/RequestsScalarWhereWithAggregatesInput.schema';
import { RequestsScalarFieldEnumSchema } from './enums/RequestsScalarFieldEnum.schema';
import { RequestsCountAggregateInputObjectSchema as RequestsCountAggregateInputObjectSchema } from './objects/RequestsCountAggregateInput.schema';
import { RequestsMinAggregateInputObjectSchema as RequestsMinAggregateInputObjectSchema } from './objects/RequestsMinAggregateInput.schema';
import { RequestsMaxAggregateInputObjectSchema as RequestsMaxAggregateInputObjectSchema } from './objects/RequestsMaxAggregateInput.schema';

export const RequestsGroupBySchema: z.ZodType<Prisma.RequestsGroupByArgs> = z.object({ where: RequestsWhereInputObjectSchema.optional(), orderBy: z.union([RequestsOrderByWithAggregationInputObjectSchema, RequestsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RequestsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RequestsScalarFieldEnumSchema), _count: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional(), _min: RequestsMinAggregateInputObjectSchema.optional(), _max: RequestsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RequestsGroupByArgs>;

export const RequestsGroupByZodSchema = z.object({ where: RequestsWhereInputObjectSchema.optional(), orderBy: z.union([RequestsOrderByWithAggregationInputObjectSchema, RequestsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RequestsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RequestsScalarFieldEnumSchema), _count: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional(), _min: RequestsMinAggregateInputObjectSchema.optional(), _max: RequestsMaxAggregateInputObjectSchema.optional() }).strict();
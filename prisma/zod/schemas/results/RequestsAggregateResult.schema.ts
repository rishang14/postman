import * as z from 'zod';
export const RequestsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    method: z.number(),
    collectionId: z.number(),
    collection: z.number(),
    url: z.number(),
    parameters: z.number(),
    headers: z.number(),
    body: z.number(),
    response: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    collectionId: z.string().nullable(),
    url: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    collectionId: z.string().nullable(),
    url: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});
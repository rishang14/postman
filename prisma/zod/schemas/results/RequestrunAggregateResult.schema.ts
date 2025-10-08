import * as z from 'zod';
export const RequestrunAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    requestid: z.number(),
    request: z.number(),
    status: z.number(),
    statusText: z.number(),
    headers: z.number(),
    body: z.number(),
    durationMs: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    status: z.number().nullable(),
    durationMs: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    status: z.number().nullable(),
    durationMs: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    requestid: z.string().nullable(),
    status: z.number().int().nullable(),
    statusText: z.string().nullable(),
    body: z.string().nullable(),
    durationMs: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    requestid: z.string().nullable(),
    status: z.number().int().nullable(),
    statusText: z.string().nullable(),
    body: z.string().nullable(),
    durationMs: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});
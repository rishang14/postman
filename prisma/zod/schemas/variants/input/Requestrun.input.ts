import * as z from 'zod';

// prettier-ignore
export const RequestrunInputSchema = z.object({
    id: z.string(),
    requestid: z.string(),
    request: z.unknown(),
    status: z.number().int(),
    statusText: z.string().optional().nullable(),
    headers: z.unknown().optional().nullable(),
    body: z.string().optional().nullable(),
    durationMs: z.number().int().optional().nullable(),
    createdAt: z.date()
}).strict();

export type RequestrunInputType = z.infer<typeof RequestrunInputSchema>;

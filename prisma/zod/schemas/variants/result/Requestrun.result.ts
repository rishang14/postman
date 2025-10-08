import * as z from 'zod';

// prettier-ignore
export const RequestrunResultSchema = z.object({
    id: z.string(),
    requestid: z.string(),
    request: z.unknown(),
    status: z.number().int(),
    statusText: z.string().nullable(),
    headers: z.unknown().nullable(),
    body: z.string().nullable(),
    durationMs: z.number().int().nullable(),
    createdAt: z.date()
}).strict();

export type RequestrunResultType = z.infer<typeof RequestrunResultSchema>;

import * as z from 'zod';

import { REST_METHODSchema } from '../../enums/REST_METHOD.schema';
// prettier-ignore
export const RequestsInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    method: REST_METHODSchema,
    collectionId: z.string(),
    collection: z.unknown(),
    url: z.string(),
    parameters: z.unknown().optional().nullable(),
    headers: z.unknown().optional().nullable(),
    saved: z.boolean(),
    body: z.unknown().optional().nullable(),
    response: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type RequestsInputType = z.infer<typeof RequestsInputSchema>;

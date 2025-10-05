import * as z from 'zod';

import { REST_METHODSchema } from '../../enums/REST_METHOD.schema';
// prettier-ignore
export const RequestsModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    method: REST_METHODSchema,
    collectionId: z.string(),
    collection: z.unknown(),
    url: z.string(),
    parameters: z.unknown().nullable(),
    headers: z.unknown().nullable(),
    saved: z.boolean(),
    body: z.unknown().nullable(),
    response: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type RequestsModelType = z.infer<typeof RequestsModelSchema>;

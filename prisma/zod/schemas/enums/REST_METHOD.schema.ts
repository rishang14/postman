import * as z from 'zod';

export const REST_METHODSchema = z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])

export type REST_METHOD = z.infer<typeof REST_METHODSchema>;
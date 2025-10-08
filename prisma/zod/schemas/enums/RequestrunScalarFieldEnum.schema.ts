import * as z from 'zod';

export const RequestrunScalarFieldEnumSchema = z.enum(['id', 'requestid', 'status', 'statusText', 'headers', 'body', 'durationMs', 'createdAt'])

export type RequestrunScalarFieldEnum = z.infer<typeof RequestrunScalarFieldEnumSchema>;
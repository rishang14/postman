import * as z from 'zod';

export const RequestsScalarFieldEnumSchema = z.enum(['id', 'name', 'method', 'collectionId', 'url', 'parameters', 'headers', 'body', 'response', 'createdAt', 'updatedAt'])

export type RequestsScalarFieldEnum = z.infer<typeof RequestsScalarFieldEnumSchema>;
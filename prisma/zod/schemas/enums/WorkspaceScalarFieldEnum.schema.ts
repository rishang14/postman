import * as z from 'zod';

export const WorkspaceScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'ownerId', 'createdAt', 'updatedAt'])

export type WorkspaceScalarFieldEnum = z.infer<typeof WorkspaceScalarFieldEnumSchema>;
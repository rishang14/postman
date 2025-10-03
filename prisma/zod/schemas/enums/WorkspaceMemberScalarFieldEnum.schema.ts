import * as z from 'zod';

export const WorkspaceMemberScalarFieldEnumSchema = z.enum(['id', 'role', 'userId', 'workspaceId'])

export type WorkspaceMemberScalarFieldEnum = z.infer<typeof WorkspaceMemberScalarFieldEnumSchema>;
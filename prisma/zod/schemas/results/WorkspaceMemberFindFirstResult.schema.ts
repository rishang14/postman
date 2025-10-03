import * as z from 'zod';
export const WorkspaceMemberFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  role: z.unknown(),
  userId: z.string(),
  workspaceId: z.string(),
  user: z.unknown(),
  workspace: z.unknown()
}));
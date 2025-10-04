import * as z from 'zod';
export const CollectionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  workspaceId: z.string(),
  workspace: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));
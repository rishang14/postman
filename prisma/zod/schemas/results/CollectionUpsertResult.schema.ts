import * as z from 'zod';
export const CollectionUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  workspaceId: z.string(),
  workspace: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});
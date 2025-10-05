import * as z from 'zod';
export const CollectionUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  workspaceId: z.string(),
  workspace: z.unknown(),
  request: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));
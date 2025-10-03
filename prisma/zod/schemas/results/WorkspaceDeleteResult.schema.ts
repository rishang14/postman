import * as z from 'zod';
export const WorkspaceDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  ownerId: z.string(),
  owner: z.unknown(),
  members: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));
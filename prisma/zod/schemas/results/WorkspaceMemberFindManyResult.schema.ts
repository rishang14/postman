import * as z from 'zod';
export const WorkspaceMemberFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  role: z.unknown(),
  userId: z.string(),
  workspaceId: z.string(),
  user: z.unknown(),
  workspace: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});
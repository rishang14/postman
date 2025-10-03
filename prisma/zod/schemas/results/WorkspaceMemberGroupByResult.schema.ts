import * as z from 'zod';
export const WorkspaceMemberGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  workspaceId: z.string(),
  _count: z.object({
    id: z.number(),
    role: z.number(),
    userId: z.number(),
    workspaceId: z.number(),
    user: z.number(),
    workspace: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    workspaceId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    workspaceId: z.string().nullable()
  }).nullable().optional()
}));
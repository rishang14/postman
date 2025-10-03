import * as z from 'zod';

// prettier-ignore
export const WorkspaceInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    ownerId: z.string(),
    owner: z.unknown(),
    members: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkspaceInputType = z.infer<typeof WorkspaceInputSchema>;

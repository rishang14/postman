import * as z from 'zod';

// prettier-ignore
export const WorkspaceResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    ownerId: z.string(),
    owner: z.unknown(),
    members: z.array(z.unknown()),
    colllection: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkspaceResultType = z.infer<typeof WorkspaceResultSchema>;

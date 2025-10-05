import * as z from 'zod';

// prettier-ignore
export const CollectionResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    workspaceId: z.string(),
    workspace: z.unknown(),
    request: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CollectionResultType = z.infer<typeof CollectionResultSchema>;

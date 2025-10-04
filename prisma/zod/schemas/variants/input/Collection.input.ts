import * as z from 'zod';

// prettier-ignore
export const CollectionInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    workspaceId: z.string(),
    workspace: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CollectionInputType = z.infer<typeof CollectionInputSchema>;

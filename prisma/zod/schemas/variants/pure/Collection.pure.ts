import * as z from 'zod';

// prettier-ignore
export const CollectionModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    workspaceId: z.string(),
    workspace: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CollectionModelType = z.infer<typeof CollectionModelSchema>;

import * as z from 'zod';

import { MEMBER_ROLESchema } from '../../enums/MEMBER_ROLE.schema';
// prettier-ignore
export const WorkspaceMemberResultSchema = z.object({
    id: z.string(),
    role: MEMBER_ROLESchema,
    userId: z.string(),
    workspaceId: z.string(),
    user: z.unknown(),
    workspace: z.unknown()
}).strict();

export type WorkspaceMemberResultType = z.infer<typeof WorkspaceMemberResultSchema>;

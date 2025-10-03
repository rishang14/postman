import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  workspaceId: z.string(),
  userId: z.string()
}).strict();
export const WorkspaceMemberWorkspaceIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberWorkspaceIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberWorkspaceIdUserIdCompoundUniqueInput>;
export const WorkspaceMemberWorkspaceIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  role: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  workspaceId: z.literal(true).optional()
}).strict();
export const WorkspaceMemberMaxAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberMaxAggregateInputType>;
export const WorkspaceMemberMaxAggregateInputObjectZodSchema = makeSchema();

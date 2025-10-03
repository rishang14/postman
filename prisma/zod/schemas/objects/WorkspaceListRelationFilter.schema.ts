import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkspaceWhereInputObjectSchema).optional()
}).strict();
export const WorkspaceListRelationFilterObjectSchema: z.ZodType<Prisma.WorkspaceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceListRelationFilter>;
export const WorkspaceListRelationFilterObjectZodSchema = makeSchema();

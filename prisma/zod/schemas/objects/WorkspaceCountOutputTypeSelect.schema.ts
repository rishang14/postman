import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  members: z.boolean().optional(),
  colllection: z.boolean().optional()
}).strict();
export const WorkspaceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WorkspaceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCountOutputTypeSelect>;
export const WorkspaceCountOutputTypeSelectObjectZodSchema = makeSchema();

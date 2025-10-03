import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ownerId: z.string(),
  name: z.string()
}).strict();
export const WorkspaceOwnerIdNameCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WorkspaceOwnerIdNameCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceOwnerIdNameCompoundUniqueInput>;
export const WorkspaceOwnerIdNameCompoundUniqueInputObjectZodSchema = makeSchema();

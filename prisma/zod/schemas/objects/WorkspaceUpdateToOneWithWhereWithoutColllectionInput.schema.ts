import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema';
import { WorkspaceUpdateWithoutColllectionInputObjectSchema as WorkspaceUpdateWithoutColllectionInputObjectSchema } from './WorkspaceUpdateWithoutColllectionInput.schema';
import { WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema as WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutColllectionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkspaceUpdateWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema)])
}).strict();
export const WorkspaceUpdateToOneWithWhereWithoutColllectionInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutColllectionInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutColllectionInput>;
export const WorkspaceUpdateToOneWithWhereWithoutColllectionInputObjectZodSchema = makeSchema();

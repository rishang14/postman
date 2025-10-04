import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceUpdateWithoutColllectionInputObjectSchema as WorkspaceUpdateWithoutColllectionInputObjectSchema } from './WorkspaceUpdateWithoutColllectionInput.schema';
import { WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema as WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutColllectionInput.schema';
import { WorkspaceCreateWithoutColllectionInputObjectSchema as WorkspaceCreateWithoutColllectionInputObjectSchema } from './WorkspaceCreateWithoutColllectionInput.schema';
import { WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema as WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema } from './WorkspaceUncheckedCreateWithoutColllectionInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkspaceUpdateWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema)]),
  where: z.lazy(() => WorkspaceWhereInputObjectSchema).optional()
}).strict();
export const WorkspaceUpsertWithoutColllectionInputObjectSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutColllectionInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpsertWithoutColllectionInput>;
export const WorkspaceUpsertWithoutColllectionInputObjectZodSchema = makeSchema();

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceCreateWithoutColllectionInputObjectSchema as WorkspaceCreateWithoutColllectionInputObjectSchema } from './WorkspaceCreateWithoutColllectionInput.schema';
import { WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema as WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema } from './WorkspaceUncheckedCreateWithoutColllectionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema)])
}).strict();
export const WorkspaceCreateOrConnectWithoutColllectionInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutColllectionInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutColllectionInput>;
export const WorkspaceCreateOrConnectWithoutColllectionInputObjectZodSchema = makeSchema();

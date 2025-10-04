import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateWithoutColllectionInputObjectSchema as WorkspaceCreateWithoutColllectionInputObjectSchema } from './WorkspaceCreateWithoutColllectionInput.schema';
import { WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema as WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema } from './WorkspaceUncheckedCreateWithoutColllectionInput.schema';
import { WorkspaceCreateOrConnectWithoutColllectionInputObjectSchema as WorkspaceCreateOrConnectWithoutColllectionInputObjectSchema } from './WorkspaceCreateOrConnectWithoutColllectionInput.schema';
import { WorkspaceUpsertWithoutColllectionInputObjectSchema as WorkspaceUpsertWithoutColllectionInputObjectSchema } from './WorkspaceUpsertWithoutColllectionInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceUpdateToOneWithWhereWithoutColllectionInputObjectSchema as WorkspaceUpdateToOneWithWhereWithoutColllectionInputObjectSchema } from './WorkspaceUpdateToOneWithWhereWithoutColllectionInput.schema';
import { WorkspaceUpdateWithoutColllectionInputObjectSchema as WorkspaceUpdateWithoutColllectionInputObjectSchema } from './WorkspaceUpdateWithoutColllectionInput.schema';
import { WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema as WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutColllectionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutColllectionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutColllectionInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutColllectionInputObjectSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUpdateWithoutColllectionInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutColllectionInputObjectSchema)]).optional()
}).strict();
export const WorkspaceUpdateOneRequiredWithoutColllectionNestedInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutColllectionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutColllectionNestedInput>;
export const WorkspaceUpdateOneRequiredWithoutColllectionNestedInputObjectZodSchema = makeSchema();

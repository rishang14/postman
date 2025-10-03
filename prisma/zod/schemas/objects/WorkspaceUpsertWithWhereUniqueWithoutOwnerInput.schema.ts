import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceUpdateWithoutOwnerInputObjectSchema as WorkspaceUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUpdateWithoutOwnerInput.schema';
import { WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema as WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutOwnerInput.schema';
import { WorkspaceCreateWithoutOwnerInputObjectSchema as WorkspaceCreateWithoutOwnerInputObjectSchema } from './WorkspaceCreateWithoutOwnerInput.schema';
import { WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema as WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedCreateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkspaceUpdateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputObjectSchema)])
}).strict();
export const WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceUpsertWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpsertWithWhereUniqueWithoutOwnerInput>;
export const WorkspaceUpsertWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

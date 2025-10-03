import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceUpdateWithoutOwnerInputObjectSchema as WorkspaceUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUpdateWithoutOwnerInput.schema';
import { WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema as WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkspaceUpdateWithoutOwnerInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutOwnerInputObjectSchema)])
}).strict();
export const WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateWithWhereUniqueWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateWithWhereUniqueWithoutOwnerInput>;
export const WorkspaceUpdateWithWhereUniqueWithoutOwnerInputObjectZodSchema = makeSchema();

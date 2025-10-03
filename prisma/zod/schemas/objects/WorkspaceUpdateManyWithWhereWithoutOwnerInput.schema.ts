import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceScalarWhereInputObjectSchema as WorkspaceScalarWhereInputObjectSchema } from './WorkspaceScalarWhereInput.schema';
import { WorkspaceUpdateManyMutationInputObjectSchema as WorkspaceUpdateManyMutationInputObjectSchema } from './WorkspaceUpdateManyMutationInput.schema';
import { WorkspaceUncheckedUpdateManyWithoutOwnerInputObjectSchema as WorkspaceUncheckedUpdateManyWithoutOwnerInputObjectSchema } from './WorkspaceUncheckedUpdateManyWithoutOwnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkspaceUpdateManyMutationInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateManyWithoutOwnerInputObjectSchema)])
}).strict();
export const WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateManyWithWhereWithoutOwnerInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateManyWithWhereWithoutOwnerInput>;
export const WorkspaceUpdateManyWithWhereWithoutOwnerInputObjectZodSchema = makeSchema();

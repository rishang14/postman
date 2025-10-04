import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionScalarWhereInputObjectSchema as CollectionScalarWhereInputObjectSchema } from './CollectionScalarWhereInput.schema';
import { CollectionUpdateManyMutationInputObjectSchema as CollectionUpdateManyMutationInputObjectSchema } from './CollectionUpdateManyMutationInput.schema';
import { CollectionUncheckedUpdateManyWithoutWorkspaceInputObjectSchema as CollectionUncheckedUpdateManyWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedUpdateManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollectionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CollectionUpdateManyMutationInputObjectSchema), z.lazy(() => CollectionUncheckedUpdateManyWithoutWorkspaceInputObjectSchema)])
}).strict();
export const CollectionUpdateManyWithWhereWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionUpdateManyWithWhereWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpdateManyWithWhereWithoutWorkspaceInput>;
export const CollectionUpdateManyWithWhereWithoutWorkspaceInputObjectZodSchema = makeSchema();

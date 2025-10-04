import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema';
import { CollectionUpdateWithoutWorkspaceInputObjectSchema as CollectionUpdateWithoutWorkspaceInputObjectSchema } from './CollectionUpdateWithoutWorkspaceInput.schema';
import { CollectionUncheckedUpdateWithoutWorkspaceInputObjectSchema as CollectionUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedUpdateWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollectionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CollectionUpdateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUncheckedUpdateWithoutWorkspaceInputObjectSchema)])
}).strict();
export const CollectionUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionUpdateWithWhereUniqueWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpdateWithWhereUniqueWithoutWorkspaceInput>;
export const CollectionUpdateWithWhereUniqueWithoutWorkspaceInputObjectZodSchema = makeSchema();

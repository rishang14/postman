import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema';
import { CollectionUpdateWithoutWorkspaceInputObjectSchema as CollectionUpdateWithoutWorkspaceInputObjectSchema } from './CollectionUpdateWithoutWorkspaceInput.schema';
import { CollectionUncheckedUpdateWithoutWorkspaceInputObjectSchema as CollectionUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedUpdateWithoutWorkspaceInput.schema';
import { CollectionCreateWithoutWorkspaceInputObjectSchema as CollectionCreateWithoutWorkspaceInputObjectSchema } from './CollectionCreateWithoutWorkspaceInput.schema';
import { CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema as CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedCreateWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollectionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CollectionUpdateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUncheckedUpdateWithoutWorkspaceInputObjectSchema)]),
  create: z.union([z.lazy(() => CollectionCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema)])
}).strict();
export const CollectionUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionUpsertWithWhereUniqueWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUpsertWithWhereUniqueWithoutWorkspaceInput>;
export const CollectionUpsertWithWhereUniqueWithoutWorkspaceInputObjectZodSchema = makeSchema();

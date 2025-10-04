import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema';
import { CollectionCreateWithoutWorkspaceInputObjectSchema as CollectionCreateWithoutWorkspaceInputObjectSchema } from './CollectionCreateWithoutWorkspaceInput.schema';
import { CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema as CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedCreateWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollectionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CollectionCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema)])
}).strict();
export const CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionCreateOrConnectWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateOrConnectWithoutWorkspaceInput>;
export const CollectionCreateOrConnectWithoutWorkspaceInputObjectZodSchema = makeSchema();

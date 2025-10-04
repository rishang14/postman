import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionCreateWithoutWorkspaceInputObjectSchema as CollectionCreateWithoutWorkspaceInputObjectSchema } from './CollectionCreateWithoutWorkspaceInput.schema';
import { CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema as CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema } from './CollectionUncheckedCreateWithoutWorkspaceInput.schema';
import { CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema as CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema } from './CollectionCreateOrConnectWithoutWorkspaceInput.schema';
import { CollectionCreateManyWorkspaceInputEnvelopeObjectSchema as CollectionCreateManyWorkspaceInputEnvelopeObjectSchema } from './CollectionCreateManyWorkspaceInputEnvelope.schema';
import { CollectionWhereUniqueInputObjectSchema as CollectionWhereUniqueInputObjectSchema } from './CollectionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CollectionCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionCreateWithoutWorkspaceInputObjectSchema).array(), z.lazy(() => CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema), z.lazy(() => CollectionCreateOrConnectWithoutWorkspaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CollectionCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CollectionWhereUniqueInputObjectSchema), z.lazy(() => CollectionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CollectionCreateNestedManyWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionCreateNestedManyWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateNestedManyWithoutWorkspaceInput>;
export const CollectionCreateNestedManyWithoutWorkspaceInputObjectZodSchema = makeSchema();

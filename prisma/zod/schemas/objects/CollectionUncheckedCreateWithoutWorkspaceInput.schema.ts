import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsUncheckedCreateNestedManyWithoutCollectionInputObjectSchema as RequestsUncheckedCreateNestedManyWithoutCollectionInputObjectSchema } from './RequestsUncheckedCreateNestedManyWithoutCollectionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  request: z.lazy(() => RequestsUncheckedCreateNestedManyWithoutCollectionInputObjectSchema).optional()
}).strict();
export const CollectionUncheckedCreateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.CollectionUncheckedCreateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionUncheckedCreateWithoutWorkspaceInput>;
export const CollectionUncheckedCreateWithoutWorkspaceInputObjectZodSchema = makeSchema();

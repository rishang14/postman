import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateNestedOneWithoutColllectionInputObjectSchema as WorkspaceCreateNestedOneWithoutColllectionInputObjectSchema } from './WorkspaceCreateNestedOneWithoutColllectionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutColllectionInputObjectSchema)
}).strict();
export const CollectionCreateWithoutRequestInputObjectSchema: z.ZodType<Prisma.CollectionCreateWithoutRequestInput> = makeSchema() as unknown as z.ZodType<Prisma.CollectionCreateWithoutRequestInput>;
export const CollectionCreateWithoutRequestInputObjectZodSchema = makeSchema();

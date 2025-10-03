import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  workapce: z.array(z.unknown()),
  WorkspaceMember: z.array(z.unknown())
}));
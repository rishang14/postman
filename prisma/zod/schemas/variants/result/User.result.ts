import * as z from 'zod';

// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    workapce: z.array(z.unknown()),
    WorkspaceMember: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;

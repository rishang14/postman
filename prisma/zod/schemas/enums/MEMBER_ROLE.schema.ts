import * as z from 'zod';

export const MEMBER_ROLESchema = z.enum(['ADMIN', 'EDITOR', 'VIEWER'])

export type MEMBER_ROLE = z.infer<typeof MEMBER_ROLESchema>;
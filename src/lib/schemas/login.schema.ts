import z from 'zod';

export const loginSchema = z.object({
	username: z.string(),
	password: z.string().min(8)
});

export type LoginSchema = typeof loginSchema;

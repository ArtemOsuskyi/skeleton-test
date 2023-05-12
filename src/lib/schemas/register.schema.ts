import z from 'zod';

export const registerSchema = z.object({
	username: z.string().min(6),
	password: z.string().min(8),
	email: z.string().email()
});

export type RegisterSchema = typeof registerSchema;

export type User = z.infer<typeof registerSchema>;

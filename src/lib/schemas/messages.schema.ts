import z from 'zod';

export const messagesSchema = z
	.object({
		text: z.string().min(1).max(200),
		user: z.string().min(1)
	})
	.strict();

export type MessageItem = z.infer<typeof messagesSchema>;

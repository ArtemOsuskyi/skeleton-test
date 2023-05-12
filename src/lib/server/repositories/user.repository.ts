import { prismaClient } from '$lib/server/prisma';
import type { User } from '$lib/schemas/register.schema';
import { hashSync } from 'bcrypt';

const createUser = async ({
	username,
	password,
	email
}: User): Promise<User> => {
	return prismaClient.user.create({
		data: {
			username,
			password: hashSync(password, 12),
			email
		}
	});
};

const getUser = async (username: string): Promise<User | null> => {
	return prismaClient.user.findUnique({
		where: {
			username
		}
	});
};

export { createUser, getUser };

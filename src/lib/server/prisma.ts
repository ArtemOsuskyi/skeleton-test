import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';

const prismaClient = global.prismaClient || new PrismaClient();

if (env.NODE_ENV === 'development') {
	global.prismaClient = prismaClient;
}

export { prismaClient };

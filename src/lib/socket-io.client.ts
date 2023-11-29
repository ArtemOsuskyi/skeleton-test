import ioClient from 'socket.io-client';

const accessToken = localStorage.getItem('accessToken');

const socket = ioClient({
	host: process.env.BACKEND_SOCKET_URL,
	auth: {
		token: accessToken
	}
});

export const io = socket;

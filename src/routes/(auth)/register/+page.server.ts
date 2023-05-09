import { type Actions, fail, redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import {
	message,
	superValidate
} from 'sveltekit-superforms/server';
import { registerSchema } from '$lib/schemas/register.schema';
import { auth }                from '$lib/server/lucia';

export const load = (async ({locals}) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(302, '/')
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(
			request,
			registerSchema
		);
		if (!form.valid) return fail(400, { form });

		const { username, password, email } = form.data;

		await auth.createUser({
			primaryKey: {
				providerId: 'username',
				providerUserId: username,
				password
			},
			attributes: {
				username,
				email
			}
		})

		return message(form, 'Register successful!');
	}
} satisfies Actions;


import { type Actions, fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { registerSchema } from '$lib/schemas/register.schema';
import { createUser, getUser } from '$lib/server/repositories/user.repository';
import { isNil } from 'lodash';

export const load = (async (event) => {
	const form = await superValidate(event, registerSchema);
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000))

		const form = await superValidate(request, registerSchema);
		if (!form.valid) return fail(400, { form });
		const { username, email } = form.data;

		const existingUser = await getUser(username);
		if (!isNil(existingUser)) {
			if (existingUser.username === username) {
				setError(form, 'username', 'Username is already taken');
			}
			if (existingUser.email === email) {
				setError(form, 'email', 'Email is already taken');
			}

			return fail(400, { form });
		}

		await createUser(form.data);

		return { form };
	}
} satisfies Actions;

import { type Actions, fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import {
	message,
	superValidate
} from 'sveltekit-superforms/server';
import { registerSchema } from '$lib/schemas';

export const load = (async (event) => {
	const form = await superValidate(event, registerSchema);
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(
			request,
			registerSchema
		);
		console.log(form);
		if (!form.valid) return fail(400, { form });
		return message(form, 'Register successful!');
	}
} satisfies Actions;

import { type Actions, fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { registerSchema } from '$lib/schemas/register.schema';

export const load = (async (event) => {
	const form = await superValidate(event, registerSchema);
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, registerSchema);
		if (!form.valid) return fail(400, { form });

		return { form };
	}
} satisfies Actions;

import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/schemas/login.schema';
import { type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const form = await superValidate(event, loginSchema);
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, loginSchema);
		if (!form.valid) return fail(400, { loginForm: form });
		return { loginForm: form };
	}
} satisfies Actions;

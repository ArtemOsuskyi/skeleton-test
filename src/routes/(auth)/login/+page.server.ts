import { superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/schemas';
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
		console.log(form);
		if (!form.valid) return fail(400, { loginForm: form });
		return { loginForm: form };
	}
} satisfies Actions;

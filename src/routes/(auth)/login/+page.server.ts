import { message, superValidate } from 'sveltekit-superforms/server';
import { loginSchema } from '$lib/schemas';
import { fail, type Actions } from '@sveltejs/kit';

export const load = async (event) => {
	const form = await superValidate(event, loginSchema);
	return {
		form
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, loginSchema);
		console.log(form);
		if (!form.valid) return fail(400, { loginForm: form });
		return { loginForm: form };
	}
} satisfies Actions

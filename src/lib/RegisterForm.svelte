<script lang="ts">
	import {
		Toast,
		type ToastSettings,
		toastStore
	} from '@skeletonlabs/skeleton';

	import { superForm } from 'sveltekit-superforms/client';
	import {
		registerSchema,
		type RegisterSchema
	} from '$lib/schemas/register.schema';
	import type { Validation } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';

	export let data: Validation<RegisterSchema>;

	const successToast: ToastSettings = {
		message: 'You have successfully registered',
		background: 'variant-filled-success'
	};

	const failureToast: ToastSettings = {
		message: 'Please fix the errors',
		background: 'variant-filled-error'
	};

	const { form, errors, enhance, valid } = superForm(data, {
		validationMethod: 'onblur',
		validators: registerSchema,
		onUpdated: handleRegister
	});

	async function handleRegister() {
		if ($valid) {
			toastStore.trigger(successToast);
			setTimeout(() => {
				goto('/');
			}, 1000);
		} else toastStore.trigger(failureToast);
	}
</script>

<Toast />

<form
	method="POST"
	class="container h-50 mx-auto justify-center items-center max-w-fit flex flex-col gap-y-2"
	use:enhance
>
	<input
		class="input input-bordered"
		type="text"
		name="username"
		id="username"
		placeholder="Username"
		bind:value={$form.username}
	/>
	{#if $errors.username}
		<small class="text-red-500">{$errors.username}</small>
	{/if}
	<input
		class="input input-bordered"
		type="password"
		name="password"
		placeholder="Password"
		bind:value={$form.password}
	/>
	{#if $errors.password}
		<small class="text-red-500">{$errors.password}</small>
	{/if}
	<input
		class="input input-bordered"
		type="email"
		name="email"
		placeholder="Email"
		bind:value={$form.email}
	/>
	{#if $errors.email}
		<small class="text-error-500-400-token transition"
			>{$errors.email}</small
		>
	{/if}

	<button
		type="submit"
		class="btn variant-filled-primary max-w-fit self-center"
		>Register</button
	>
</form>

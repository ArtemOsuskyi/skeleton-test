<script lang="ts">
	import {
		ProgressRadial,
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
	import { enhance } from '$app/forms';

	export let data: Validation<RegisterSchema>;

	let isRegistering = false;

	const { form, errors, valid, message } = superForm(data, {
		taintedMessage: false,
		validationMethod: 'onblur',
		validators: registerSchema,
		onUpdated: handleRegister
	});

	const successToast: ToastSettings = {
		message: 'Successfully registered!',
		background: 'variant-filled-success'
	};

	const failureToast: ToastSettings = {
		message: 'Registration failed!',
		background: 'variant-filled-error'
	};

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
	use:enhance={() => {
		isRegistering = true;

		return async ({ update }) => {
			await update();
			isRegistering = false;
		};
	}}
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
		<small class="text-error-500-400-token transition">{$errors.email}</small>
	{/if}
	{#if isRegistering === true}
		<ProgressRadial width="w-10" stroke={60} meter="stroke-primary-500" />
	{:else}
		<button
			id="button"
			type="submit"
			class="btn variant-filled-primary max-w-fit self-center"
		>
			Register
		</button>
	{/if}
</form>

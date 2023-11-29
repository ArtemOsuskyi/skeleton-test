<script lang="ts">
	import {
		getToastStore,
		ProgressRadial,
		Toast,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	import {
		registerSchema,
		type RegisterSchema
	} from '$lib/schemas/register.schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { superForm } from 'sveltekit-superforms/client';
	import { writable } from 'svelte/store';

	export let data: SuperValidated<RegisterSchema>;

	const isRegistering = writable<boolean>(false)

	const toastStore = getToastStore();

	const { form, errors } = superForm(data, {
		taintedMessage: null,
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
		if (!$errors) {
			toastStore.trigger(successToast);
			setTimeout(() => {
				goto('/chat');
			}, 1000);
		} else toastStore.trigger(failureToast);
	}
</script>

<Toast />

<form
	method="POST"
	class="container h-50 mx-auto justify-center items-center max-w-fit flex flex-col gap-y-2"
	use:enhance={() => {
		isRegistering.set(false);

		return async ({ update }) => {
			await update();
			isRegistering.set(false);
		};
	}}
>
	<input
		class="input-bordered input"
		type="text"
		name="username"
		id="username"
		placeholder="Username"
		bind:value={$form.username}
	/>
	{#if $errors.username}
		<small class="text-error-500">{$errors.username}</small>
	{/if}
	<input
		class="input-bordered input"
		type="password"
		name="password"
		placeholder="Password"
		bind:value={$form.password}
	/>
	{#if $errors.password}
		<small class="text-error-500">{$errors.password}</small>
	{/if}
	<input
		class="input-bordered input"
		type="email"
		name="email"
		placeholder="Email"
		bind:value={$form.email}
	/>
	{#if $errors.email}
		<small class="text-error-500">{$errors.email}</small>
	{/if}
	{#if isRegistering}
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

<script lang="ts">
	import { Toast, type ToastSettings, toastStore } from '@skeletonlabs/skeleton';

	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import type { RegisterSchema } from '$lib/schemas';
	import type { Validation } from 'sveltekit-superforms';
	import { registerSchema } from '$lib/schemas';

	export let data: Validation<RegisterSchema>;

	const { form, errors, enhance, validate, tainted, valid } = superForm(data, {
		validationMethod: 'onblur',
		validators: registerSchema,
		onResult({ result }) {
			console.log(result);
		}
	});

	const successToast: ToastSettings = {
		message: 'You have successfully registered',
		background: 'variant-filled-success'
	};

	const handleRegister = async () => {
		// const errors = [
		// 	await validate('username', { update: false }),
		// 	await validate('password', { update: false }),
		// 	await validate('email', { update: false })
		// ];
		console.log($form);
		console.log($valid);
		if ($valid) {
			toastStore.trigger(successToast);
		} else
			toastStore.trigger({ message: 'Please fix the errors', background: 'variant-filled-error' });
	};
</script>

<Toast />
<SuperDebug data={{ $form, $errors, $tainted }} />
<form
	method="POST"
	class="container h-50 mx-auto justify-center items-center max-w-fit flex flex-col gap-y-2"
	on:submit={handleRegister}
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
		<small class="text-red-500">{$errors.email}</small>
	{/if}

	<button type="submit" class="btn variant-filled-primary max-w-fit self-center">Register </button>
</form>

<script lang="ts">
	import type { Validation } from 'sveltekit-superforms';
	import type { LoginSchema } from '$lib/schemas';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: Validation<LoginSchema>;
	const { form, enhance } = superForm(data);
</script>

<form
	bind:this={$form}
	method="POST"
	class="container h-50 mx-auto justify-center items-center max-w-fit flex flex-col gap-y-2"
	use:enhance
>
	<input
		class="input input-bordered"
		type="text"
		placeholder="Username"
		bind:value={$form.username}
	/>

	<input
		class="input input-bordered"
		type="password"
		placeholder="Password"
		bind:value={$form.password}
	/>

	<button class="btn variant-filled-primary max-w-fit self-center">Login</button>
</form>

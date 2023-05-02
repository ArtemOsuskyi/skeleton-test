<script lang="ts">
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const registerSuccess: ToastSettings = {
		message: 'You have successfully registered!',
		background: 'variant-filled-success'
	};

	const handleRegister = () => {
		toastStore.trigger(registerSuccess);
	};
</script>

<Toast />

<div class="container h-50 max-w-fit flex flex-col gap-y-2">
	<label class="label">
		<input class="input input-bordered" type="text" placeholder="Username" />
	</label>
	<label class="label">
		<input class="input input-bordered" type="password" placeholder="Password" />
	</label>
	<label class="label">
		<input class="input input-bordered" type="email" placeholder="Email" />
	</label>

	<button class="btn variant-filled-primary max-w-fit self-center" on:click={handleRegister}
		>Register</button
	>
</div>

<script lang="ts">
	import { goto } from '$app/navigation';

	const goToLogin = () => {
		return goto('/login');
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 justify-self-center flex flex-col">
		<h1>Welcome to Gachigram!</h1>
		<div class="self-center">
			<button class="btn variant-filled-primary" on:click={goToLogin}>Go to Login</button>
		</div>
	</div>
</div>

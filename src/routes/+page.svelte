<script lang="ts">
	import { goto } from '$app/navigation';

	const goToLogin = () => goto('/login');
	const goToRegister = () => goto('/register');
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 justify-self-center flex flex-col">
		<h1>Wel♂CUM♂ to Gachigram!</h1>
		<div class="self-center">
			<button class="btn variant-filled-primary" on:click={goToLogin}
				>Go to Login</button
			>
			<button class="btn variant-filled-primary" on:click={goToRegister}
				>Go to Register</button
			>
		</div>
	</div>
</div>

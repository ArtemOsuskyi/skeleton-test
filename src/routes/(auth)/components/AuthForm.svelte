<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import LoginForm from './LoginForm.svelte';
	import RegisterForm from './RegisterForm.svelte';
	import { goto } from '$app/navigation';
	let tabsBasic = 0;

	const goToLogin = () => goto('/login');
	const goToRegister = () => goto('/register');
</script>

<div class="container h-50 max-w-fit flex flex-col gap-y-2">
	<TabGroup justify="justify-center">
		<Tab bind:group={tabsBasic} name="login" value={0} on:click={goToLogin}>Login</Tab>
		<Tab bind:group={tabsBasic} name="register" value={1} on:click={goToRegister}>Register</Tab>
		<svelte:fragment slot="panel">
			{#if tabsBasic === 0}
				<LoginForm />
			{:else if tabsBasic === 1}
				<RegisterForm />
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>

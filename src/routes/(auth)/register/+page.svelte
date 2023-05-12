<script lang="ts">
	import RegisterForm from '$lib/components/RegisterForm.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div
	class="container h-full mx-auto flex flex-col justify-center items-center gap-y-5"
>
	<h1>Register</h1>
	<RegisterForm data={data.form} />
</div>

<script lang="ts">
	import LoginForm from '$lib/LoginForm.svelte';

	export let data;
</script>

<LoginForm data={data.form} />

<script>
	import ChatList from '$lib/components/ChatList.svelte';
</script>

<div
	class="container h-full mx-auto flex bg-black rounded-md"
>
	<ChatList />
	<slot />
</div>

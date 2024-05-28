<script>
  import ChatList from '$lib/components/ChatList.svelte';
</script>

<div class="container mx-auto flex h-full rounded-md bg-black">
  <ChatList />
  <slot />
</div>

<script lang="ts">
  import ChatRoom from './ChatRoom.svelte';
  import SearchBar from './SearchBar.svelte';
  import { goto } from '$app/navigation';

  const chatIds = [1, 2, 3, 4];

  const goToChat = (chatId: number) => {
    return goto(`/chat/${chatId}`);
  };
</script>

<div class="container mx-auto flex h-full max-w-fit flex-col gap-y-2.5 pl-5 pr-5">
  <SearchBar />
  {#each chatIds as chatId}
    <ChatRoom {chatId} on:click={() => goToChat(chatId)} />
  {/each}
</div>

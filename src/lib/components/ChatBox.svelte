<script>
	import MessageList from '$lib/components/MessageList.svelte';
</script>

<div class="container flex h-full min-w-fit flex-col gap-y-1">
	<div
		class="container flex h-auto w-full items-center justify-center text-[28px]"
	>
		Gym
	</div>
	<div class="container relative h-full max-w-[98%] rounded-md bg-chat-grey">
		<MessageList />
	</div>
	<input
		class="input-bordered input flex h-auto w-full pb-1.5 pt-1.5 indent-2.5"
		placeholder="Write a message..."
	/>
</div>

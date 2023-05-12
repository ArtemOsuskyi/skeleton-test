<script>
	import MessageList from '$lib/components/MessageList.svelte';
</script>

<div class="container h-full min-w-fit flex flex-col gap-y-1">
	<div
		class="container h-auto w-full flex justify-center items-center text-[32px]"
	>
		Gym
	</div>
	<div class="container max-w-[98%] h-full bg-chat-grey rounded-md relative">
		<MessageList />
	</div>
	<input
		class="input input-bordered h-auto w-full flex indent-2.5 pt-1.5 pb-1.5"
		placeholder="Write a message..."
	/>
</div>

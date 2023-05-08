<script>
	import Message from '$lib/Message.svelte';
	import {Avatar} from "@skeletonlabs/skeleton";

	export let messages = [
		{
			user: 'user',
			text: 'yes'
		},
		{
			user: 'other',
			text: 'yes'
		},
		{
			user: 'other',
			text: 'yes'
		},
		{
			user: 'user',
			text: 'yes'
		},
		{
			user: 'user',
			text: 'yes'
		},
		{
			user: 'other',
			text: 'yes'
		},
		{
			user: 'other',
			text: 'yes'
		},
		{
			user: 'user',
			text: 'yes'
		}
	];
	export let currentUser = 'user';
</script>

<div
	class="container h-full min-w-fit flex flex-col gap-y-1"
>
	<div
		class="container h-auto w-full flex justify-center items-center text-[32px]"
	>
		Chat
	</div>
	<div
		class="container max-w-[98%] h-full bg-chat-grey rounded-md border border-amber-50 relative"
	>
		<div class="messages min-h-full border-amber-50 border">
			{#each messages as message}
				<div class="message {message.user === currentUser ? 'user' : 'other'}">
					{#if currentUser === 'user'}
							<Avatar src="https://i.redd.it/0gk8b1l3maa31.png" />
							<div class="text">{message.text}</div>
						{:else }
							<div class="text">{message.text}</div>
							<Avatar src="https://i.redd.it/0gk8b1l3maa31.png" />
						{/if}
				</div>
			{/each}
		</div>
	</div>
	<input
		class="input input-bordered h-auto w-full flex indent-2.5 pt-1.5 pb-1.5"
		placeholder="Write a message..."
	/>
</div>

<style>
	.messages {
		height: 400px;
		overflow-y: scroll;
		display: flex;
		flex-direction: column-reverse;
	}

	.message {
		margin-bottom: 8px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.message.user {
		align-items: flex-end;
	}

	.message.user .text {
		background-color: #ecf0f1;
		color: #34495e;
		border-radius: 16px 16px 0 16px;
		padding: 8px 12px;
		max-width: 300px;
		text-align: right;
	}

	.message.other .text {
		background-color: #bdc3c7;
		color: #2c3e50;
		border-radius: 16px 16px 16px 0;
		padding: 8px 12px;
		max-width: 300px;
		text-align: left;
	}
</style>

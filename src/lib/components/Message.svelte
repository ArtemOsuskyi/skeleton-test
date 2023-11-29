<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { MessageItem } from '$lib/schemas/messages.schema';

	export let currentUser: string;
	export let message: MessageItem;
</script>

<div
	class="container flex flex-row items-center gap-x-2 break-words {message.user ===
	currentUser
		? 'flex min-w-fit flex-row-reverse justify-start'
		: 'flex max-w-fit justify-end'}"
>
	<div class="self-end pb-1.5 pl-4 pr-4">
		<Avatar src="https://i.redd.it/0gk8b1l3maa31.png" />
	</div>
	<div
		class="container w-auto max-w-xs {message.user === currentUser
			? 'p-2 text-right'
			: 'p-2 text-left'} w-[320px] rounded-md bg-primary-500"
	>
		{message.text}
	</div>
</div>

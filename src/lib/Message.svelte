<script lang="ts">
	import { Avatar }           from '@skeletonlabs/skeleton';
	import type { MessageItem } from '$lib/schemas/messages.schema.ts';

	export let currentUser;
	export let message: MessageItem;
</script>

<div
	class="container gap-x-2 flex flex-row break-words items-center {message.user ===
	currentUser
		? 'user flex justify-start flex-row-reverse min-w-fit'
		: 'other flex justify-end max-w-fit'}"
>
	<div class="self-end pl-4 pr-4 pb-1.5">
		<Avatar src="https://i.redd.it/0gk8b1l3maa31.png" />
	</div>
	<div
		class="container w-auto max-w-xs {message.user ===
		currentUser
			? 'text-right p-2'
			: 'text-left p-2'} rounded-md w-[320px] bg-primary-500"
	>
		{message.text}
	</div>
</div>

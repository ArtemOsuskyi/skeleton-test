<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let chatId: number;
</script>

<button
	class="hover:variant-ghost-primary hover:transition-ease-in-out flex h-[86px] w-[385px] items-center justify-start gap-x-[20px] rounded-xl bg-chat-grey pl-[18px] duration-300"
	on:click
>
	<Avatar src="https://i.redd.it/0gk8b1l3maa31.png" />
	<div class="text-[20px]">Gym {chatId}</div>
</button>

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let chatId: number;
</script>

<button
	class="h-[86px] w-[385px] bg-chat-grey rounded-xl hover:variant-ghost-primary hover:transition-ease-in-out duration-300 justify-start items-center flex gap-x-[20px] pl-[18px]"
	on:click
>
	<Avatar src="https://i.redd.it/0gk8b1l3maa31.png" />
	<div class="text-[20px]">Gym {chatId}</div>
</button>

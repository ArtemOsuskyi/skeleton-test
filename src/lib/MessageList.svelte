<script lang="ts">
	import Message from '$lib/Message.svelte';
	import type { MessageSchema } from '$lib/schemas/messages.schema';

	export let messages: MessageSchema[] = [
		{
			user: 'user',
			text: 'yes'
		},
		{
			user: 'user',
			text: 'yes'
		},
		{
			user: 'user',
			text: 'kekkekkesdfsfsdfsddfgsdfgfssvfgsgffgssfgffgfgfgssfsffdfsfdfgsfgskekkekkesdfsfsdfsddfgsdfgfssvfgsgffgssfgffgfgfgssfsffdfsfdfgsfgskekkekkesdfsfsdfsddfgsdfgfssvfgsgffgssfgffgfgfgssfsffdfsfdfgsfgs'
		},
		{
			user: 'other',
			text: 'kekkesdfsfsdfsddfgsdfgfssvfgsgffgssfgffgfgfgssfsffdfsfdfgsfgs'
		},
		{
			user: 'other',
			text: 'yes'
		},
		{
			user: 'user',
			text: 'no'
		},
		{
			user: 'user',
			text: 'suck'
		},
		{
			user: 'other',
			text: 'cock'
		}
	];
</script>

<div
	class="overflow-y-scroll h-[400px] flex flex-col-reverse min-h-full gap-y-4"
>
	{#each messages.reverse() as message}
		<Message currentUser="user" {message} />
	{/each}
</div>

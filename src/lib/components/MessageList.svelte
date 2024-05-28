<script lang="ts">
  import Message from '$lib/components/Message.svelte';
  import type { MessageItem } from '$lib/schemas/messages.schema';

  export let messages: MessageItem[] = [
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

<div class="flex h-[400px] min-h-full flex-col-reverse gap-y-4 overflow-y-scroll">
  {#each messages.reverse() as message}
    <Message currentUser="user" {message} />
  {/each}
</div>

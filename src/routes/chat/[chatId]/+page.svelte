<script lang="ts">
	import ChatBox from '../../../components/ChatBox.svelte';
	import { goto } from '$app/navigation';

	const goBackToMain = ({ key }: KeyboardEvent) => {
		if (key === 'Escape') {
			return goto('/chat');
		}
	};
</script>

<svelte:window on:keyup={goBackToMain} />
<ChatBox />

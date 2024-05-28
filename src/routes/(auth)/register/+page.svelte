<script lang="ts">
  import RegisterForm from '$lib/components/RegisterForm.svelte';
  import type { PageServerData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: PageServerData;

  const { form, capture, restore } = superForm(data.form, {
    id: 'register-form'
  });
  export const snapshot = { capture, restore };
</script>

<div class="container mx-auto flex h-full flex-col items-center justify-center gap-y-5">
  <h1>Register</h1>
  <RegisterForm data={data.form} />
</div>

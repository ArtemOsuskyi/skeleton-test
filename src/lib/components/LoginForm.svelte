<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms';
  import type { LoginSchema } from '$lib/schemas/login.schema';
  import { superForm } from 'sveltekit-superforms/client';

  export let data: SuperValidated<LoginSchema>;
  const { form, enhance } = superForm(data);
</script>

<form
  method="POST"
  class="h-50 container mx-auto flex max-w-fit flex-col items-center justify-center gap-y-2"
  use:enhance
>
  <input
    class="input-bordered input"
    type="text"
    placeholder="Username"
    bind:value={$form.username}
  />

  <input
    class="input-bordered input"
    type="password"
    placeholder="Password"
    bind:value={$form.password}
  />

  <button class="btn variant-filled-primary max-w-fit self-center">Login</button>
</form>

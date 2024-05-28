<script lang="ts">
  import { goto } from '$app/navigation';

  const goToLogin = () => goto('/login');
  const goToRegister = () => goto('/register');
</script>

<div class="container mx-auto flex h-full items-center justify-center">
  <div class="flex flex-col space-y-5 text-2xl justify-self-center">
    <h1>Wel♂CUM♂ to Gachigram!</h1>
    <div class="self-center">
      <button class="btn variant-filled-primary" on:click={goToLogin}>Go to Login</button>
      <button class="btn variant-filled-primary" on:click={goToRegister}>Go to Register</button>
    </div>
  </div>
</div>

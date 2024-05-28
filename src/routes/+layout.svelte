<script lang="ts">
  // Most of your app wide CSS should be put in this file
  import '../app.postcss';
  import { AppBar, AppShell, initializeStores } from '@skeletonlabs/skeleton';

  initializeStores();
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <a href="/">
          <strong class="text-xl">App</strong>
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="footer" />
</AppShell>

<template>
  <div>
    <AppHeader />

    <main>
      <slot />
    </main>

    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import { useUserAuthentication } from '~/store/auth/useUserAuthentication';

const { fetchCurrentUser } = useUserAuthentication();

onMounted(fetchCurrentUser);
</script>

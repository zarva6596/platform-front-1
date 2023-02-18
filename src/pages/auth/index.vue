<template>
  <div class="max-w-[300px] mx-auto mt-[50vh] -translate-y-1/2">
    <h1>Login</h1>

    <Login />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'auth',
});
</script>

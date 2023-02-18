<template>
  <form>
    <div>
      <input v-model="formData.login" type="text">
    </div>

    <div>
      <input v-model="formData.password" type="password">
    </div>

    <div>
      <button>Login</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { LoginData } from '~/types/auth';

const formData = ref<LoginData>({
  login: '',
  password: '',
});
</script>

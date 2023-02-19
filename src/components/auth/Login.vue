<template>
  <form>
    <div>
      <input v-model="formData.login" type="text">
    </div>

    <div>
      <input v-model="formData.password" type="password">
    </div>

    <div>
      <button @click.prevent="login">
        Login
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { LoginData } from '~/types/auth';
import { useUserAuthentication } from '~/store/auth/useUserAuthentication';

const { loginUser } = useUserAuthentication();

const formData = ref<LoginData>({
  login: '',
  password: '',
});

const login = () => loginUser(formData.value.login, formData.value.password);
</script>

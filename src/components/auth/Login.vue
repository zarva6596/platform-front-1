<template>
  <client-only>
    <ua-form
      :schema="loginSchema"
      @submit="onLogin"
    />
  </client-only>
</template>

<script setup lang="ts">
import { UaForm } from 'ua-elements-vue';
import { useUserAuthentication } from '~/store/auth/useUserAuthentication';
import { loginSchema } from '~/schemas/auth';

const { loginUser } = useUserAuthentication();

const onLogin = (val: Record<'login' | 'password', string>) => {
  const { login, password } = val;

  loginUser(login, password);
};
</script>

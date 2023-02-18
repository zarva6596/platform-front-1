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
const formData = ref({
  login: '',
  password: '',
});
</script>

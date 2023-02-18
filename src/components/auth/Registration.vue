<template>
  <form>
    <div>
      <input v-model="formData.login" type="text">
    </div>

    <div>
      <input v-model="formData.password" type="password">
    </div>

    <div>
      <input v-model="formData.confirmPassword" type="password">
    </div>

    <div>
      <button>Send</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const formData = ref({
  login: '',
  password: '',
  confirmPassword: '',
});
</script>

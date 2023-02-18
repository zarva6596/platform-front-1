<template>
  <form>
    <div>
      <select v-model="formData.role">
        <option :value="UserRoles.STUDENT">
          Student
        </option>
        <option :value="UserRoles.TEACHER">
          Teacher
        </option>
      </select>
    </div>

    <div>
      <input v-model="formData.name" type="text">
    </div>

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
import { RegistrationData } from '~/types/auth';
import { UserRoles } from '~/enums/auth';

const formData = ref<RegistrationData>({
  login: '',
  password: '',
  confirmPassword: '',
  name: '',
  role: UserRoles.STUDENT,
});
</script>

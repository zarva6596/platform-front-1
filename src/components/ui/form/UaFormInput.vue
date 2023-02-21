<template>
  <div>
    <label
      :for="name"
    >
      {{ label }}
    </label>

    <input
      :id="name"
      v-model="inputValue"
      :type="type"
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  modelValue: string
  type?: string
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  type: 'text',
});

const emit = defineEmits<{(e: 'update:modelValue', data: string): void,
  (e: 'change', data: string): void}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (val: string) => {
    emit('update:modelValue', val);
    emit('change', val);
  },
});
</script>

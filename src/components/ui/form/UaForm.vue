<template>
  <form @submit.prevent="onSubmit">
    <template v-if="schema">
      <div v-for="(item, i) in formData" :key="i">
        <ua-form-item
          v-if="item.element === FormElements.element"
          :form-index="formIndex"
          :item="item"
          @change="onChange"
        />

        <component
          :is="FormElements[item.element]"
          v-else
          v-model="item.value"
          :name="i + formIndex"
          :class="item.class"
          v-bind="item.attr"
        />
      </div>
    </template>

    <template v-else>
      <slot />
    </template>

    <button v-if="showSubmit" type="submit">
      {{ submitText }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { FormElements } from '~/enums/ui/form';
import { FormSchemaItem } from '~/types/ui/form';
import UaFormItem from '~/components/ui/form/UaFormItem.vue';

interface FormProps {
  schema?: FormSchemaItem[]
  submitText?: string
  showSubmit?: boolean
}

const resultData = ref<Record<string, string | undefined>>({});

const props = withDefaults(defineProps<FormProps>(), {
  schema: undefined,
  submitText: 'Submit',
  showSubmit: true,
});

const emit = defineEmits<{(e: 'submit', data: typeof resultData.value): void}>();

const formData = ref<FormSchemaItem[]>([]);

const formIndex = ref<string>('');

const setResultData = (data: FormSchemaItem[]) => {
  data.forEach((item) => {
    item.element === FormElements.element
      ? (item.children && setResultData(item.children))
      : item.name && (resultData.value[item.name] = item.value);
  });
};

const onSubmit = () => {
  resultData.value = {};

  formData.value && setResultData(formData.value);

  emit('submit', resultData.value);
};

const setValue = (data: FormSchemaItem[], key: string, value: string) => {
  data.forEach((item) => {
    item.element === FormElements.element
      ? item.children && setValue(item.children, key, value)
      : item.name === key && (item.value = value);
  });
};

const onChange = ({ key, value }: { key: string, value: string }) => {
  formData.value && setValue(formData.value, key, value);
};

const formDataInit = (data: FormSchemaItem[]): FormSchemaItem[] => data
  .map(item => item.element === FormElements.element
    ? { ...item, children: item.children && formDataInit(item.children) }
    : { ...item, value: '' });

onBeforeMount(() => {
  props.schema && (formData.value = formDataInit(props.schema));

  formIndex.value = random();
});
</script>

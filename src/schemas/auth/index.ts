import { FormSchemaItem } from 'ua-elements-vue';

export const loginSchema: FormSchemaItem[] = [
  {
    element: 'input',
    name: 'login',
    attr: {
      label: 'Login',
    },
  },
  {
    element: 'input',
    name: 'password',
    attr: {
      type: 'password',
      label: 'Password',
    },
  },
];

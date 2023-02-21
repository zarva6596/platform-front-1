import { FormSchemaItem } from '~/types/ui/form';

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

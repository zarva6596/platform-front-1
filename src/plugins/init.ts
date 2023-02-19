import { defineNuxtPlugin } from '#app';
import { Authentication } from '~/modules/Authentication';

export default defineNuxtPlugin(() => {
  Authentication.init();
});

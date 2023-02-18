import { defineStore } from 'pinia';
import { LocationQueryValue } from 'vue-router';
import { Authentication } from '~/modules/Authentication';

export const useUserAuthentication = defineStore(
  'User Authentication',
  () => {
    const router = useRouter();
    const loginSiteId = ref<LocationQueryValue | string | null>(null);

    const loginUser = async(email: string, password: string, siteId: string) => {
      loginSiteId.value = siteId;

      return await Authentication.login(email, password, siteId);
    };

    const logoutUser = async() => {
      Authentication.logout();
      await router.push('auth');
    };

    return {
      loginSiteId,
      loginUser,
      logoutUser,
    };
  },
);

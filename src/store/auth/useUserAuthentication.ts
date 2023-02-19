import { defineStore } from 'pinia';
import { Authentication } from '~/modules/Authentication';
import AuthenticationService from '~/services/authentication';

export const useUserAuthentication = defineStore(
  'User Authentication',
  () => {
    const router = useRouter();

    const loginUser = async(login: string, password: string) => {
      await Authentication.login(login, password);
      navigateTo('/');
    };

    const logoutUser = async() => {
      Authentication.logout();
      await router.push('auth');
    };

    const fetchCurrentUser = async() => {
      const accessToken = Authentication.getAccessToken();

      accessToken && await AuthenticationService.getCurrentUser();
    };

    const updateToken = async() => {
      await Authentication.updateToken();
      await fetchCurrentUser();
    };

    return {
      loginUser,
      logoutUser,
      fetchCurrentUser,
      updateToken,
    };
  },
);

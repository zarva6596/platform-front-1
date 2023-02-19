import { defineNuxtRouteMiddleware, navigateTo } from '#app';
import {
  AUTH_ROUTER_PATH,
  AUTH_REGISTER_ROUTER_PATH,
} from '~/enums/auth';
import { Authentication } from '~/modules/Authentication';
export default defineNuxtRouteMiddleware((to, from) => {
  const accessToken = Authentication.getAccessToken();
  const refreshToken = Authentication.getRefreshToken();

  const availableRoutes = [AUTH_ROUTER_PATH, AUTH_REGISTER_ROUTER_PATH];

  if ((!accessToken || !refreshToken) && !availableRoutes.includes(to.path) && !availableRoutes.includes(from.path)) {
    return navigateTo({
      path: AUTH_ROUTER_PATH,
    });
  }
});

import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Authentication } from '~/modules/Authentication';
import { useUserAuthentication } from '~/store/auth/useUserAuthentication';

export const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  paramsSerializer: {
    indexes: null,
  },
});

export const axiosBaseInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
});

const requestInterceptorHandler = (config: AxiosRequestConfig) => {
  const token = Authentication.getAccessToken();

  if (token) {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const responseErrorHandler = (error: AxiosError<any>) => {
  if (
    error.response?.status === 400
        || error.response?.status === 403
  ) {
    const details = error.response.data.details;
    const detailsMessages = details
      ? Object.entries(details).map(([key, value]) => `${key}: ${value}`)
      : null;

    // eslint-disable-next-line no-console
    console.log(detailsMessages);
  }
};

axiosBaseInstance.interceptors.response.use(
  response => response,
  responseErrorHandler,
);

axiosApiInstance.interceptors.response.use(
  response => response,
  async(error) => {
    if (error.response?.status === 401) {
      const { updateToken, logoutUser } = useUserAuthentication();

      try {
        await updateToken();
      } catch (e) {
        await logoutUser();
      }
    }

    responseErrorHandler(error);

    return await Promise.reject(error);
  },
);

// @ts-ignore
axiosApiInstance.interceptors.request.use(requestInterceptorHandler);

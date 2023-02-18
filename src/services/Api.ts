import { RawAxiosRequestConfig } from 'axios';
import { axiosApiInstance } from '~/api';

export default abstract class Api {
  private readonly baseUrl: string;

  protected constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  protected post<T>(url: string, data?: unknown, config?: RawAxiosRequestConfig<unknown>) {
    return axiosApiInstance.post<T>(this.getUrl(url), data, config);
  }

  protected put<T>(url: string, data?: unknown, config?: RawAxiosRequestConfig<unknown>) {
    return axiosApiInstance.put<T>(this.getUrl(url), data, config);
  }

  protected patch<T>(url: string, data?: unknown, config?: RawAxiosRequestConfig<unknown>) {
    return axiosApiInstance.patch<T>(this.getUrl(url), data, config);
  }

  protected get<T>(url: string, config?: RawAxiosRequestConfig<unknown>) {
    return axiosApiInstance.get<T>(this.getUrl(url), config);
  }

  protected delete<T>(url: string, config?: RawAxiosRequestConfig<unknown>) {
    return axiosApiInstance.delete<T>(this.getUrl(url), config);
  }
}

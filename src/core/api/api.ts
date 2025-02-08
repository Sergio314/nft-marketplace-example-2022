import { AxiosRequestConfig } from 'axios';
import axiosInstance from './instance';

export interface Options {
  [key: string]: string;
}

export const api = {
  get: <B = any, R = any>(url: string, config?: AxiosRequestConfig) => axiosInstance.get<B, R>(url, config),

  post: <B = any, R = any, D = any>(url: string, body?: Options, config?: AxiosRequestConfig<D>) => axiosInstance.post<B, R>(url, body, config),

  put: <B = any, R = any, D = any>(url: string, body?: Options, config?: AxiosRequestConfig<D>) => axiosInstance.put<B, R>(url, body, config),

  patch: <B = any, R = any, D = any>(url: string, body?: Options, config?: AxiosRequestConfig<D>) => axiosInstance.patch<B, R>(url, body, config),

  delete: <B = any, R = any>(url: string, config?: AxiosRequestConfig) => axiosInstance.delete<B, R>(url, config),
};

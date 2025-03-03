import axios from 'axios';
import { paths } from '@/data/paths';
import { deleteCookie, getCookie } from '@/core/api/cookie';
import { authApi } from '@/api';

export const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    'x-api-key': 'asdasdasdasd',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (
      error.response.status >= 400 &&
      originalRequest.url.includes('auth/refresh')
    ) {
      deleteCookie('refresh');
      window.location.href = paths.login;
      console.error(error);      
      return Promise.reject(error);
    }

    if (error.response.status !== 401) {
      console.error(error);      
      return Promise.reject(error);
    }
    if (error.response.status === 404) {
      console.error(error);      
      return Promise.reject('Backend is not functional');
    }

    try {
      const refreshToken = getCookie('refresh');
      const result = await authApi.loginByRefreshToken(refreshToken)
      if (result.status === 200) {
        return axiosInstance(originalRequest);
      } else {
      console.error(error);      
        return Promise.reject(error);
      }
    } catch (e) {
      console.error(error);      
      return Promise.reject(e);
    }
  },
);

export default axiosInstance;

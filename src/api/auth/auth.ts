import { api } from '@/core/api';
import { authPaths } from '@/core/api/api.config';

export const authApi = {
  nativeLogin: (body: any) => api.post(authPaths.login, body),

  nativeSignup: (body: any) => api.post(authPaths.signup, body),

  verifyEmail: (token: string) => api.patch(authPaths.verifyEmail, { token }),

  loginByRefreshToken: (refreshToken) => api.post(authPaths.refreshToken, { refreshToken }),

  nativeLogout: () => api.post(authPaths.logout, {}),

  sendForgotPasswordToken: (email: { email: string }) => api.post(authPaths.requestForgotPass, { ...email }),

  actionResetPassword: (data: any) => api.post(authPaths.sendForgotToken, data),

  getProfile: () => api.get(authPaths.getProfile),
};

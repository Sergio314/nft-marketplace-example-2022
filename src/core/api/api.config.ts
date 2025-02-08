export const AUTH_API = `/api`;
export const AVATAR_API = `/api`;

export const authPaths = {
  login: `${AUTH_API}/v1/auth/sign-in`,
  signup: `${AUTH_API}/v1/auth/sign-up`,
  google: `${AUTH_API}/v1/auth/google`,
  logout: `${AUTH_API}/v1/auth/logout`,
  requestForgotPass: `${AUTH_API}/v1/auth/forgot-password`,
  sendForgotToken: `${AUTH_API}/v1/auth/forgot-password/approve`,
  refreshToken: `${AUTH_API}/v1/auth/refresh`,
  verifyEmail: `${AUTH_API}/v1/auth/verify/email`,
  getProfile: `${AUTH_API}/v1/user/profile`,
};

export const avatarPaths = {
  createAvatar: `${AVATAR_API}/v1/avatar`,
};


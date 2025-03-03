import { authApi } from '@/api';
import { getCookie } from '@/core/api/cookie';
import { TypedDispatch } from '@/core/models';
import { notify } from '@/shared/components/Notify/Notify';
import { ActionTypes } from '../reducers';

export const actionCheckSession = () => async (dispatch: TypedDispatch) => {
  try {
    if (getCookie('token') || getCookie('refresh')) {
      dispatch({ type: ActionTypes.START_LOADING });
      const profile = await authApi.getProfile();
      dispatch({ type: ActionTypes.PROFILE, payload: profile.data });
    } else {
      dispatch({ type: ActionTypes.LOGOUT });
    }
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: ActionTypes.FINISH_LOADING });
  }
};

export const actionNativeLogin = async (body: any) => {
  try {
    const response = await authApi.nativeLogin(body);
    if (response.status === 200) {
      notify.success('You successfully logged in');
    }
  } catch (e) {
    notify.error('Backend '+e.response.statusText);
    throw e;
  }
};

export const actionVerifyEmail = async (token: string, callback: any) => {
  try {
    const res = await authApi.verifyEmail(token);
    await callback(res.data.success);
    return res.data.success;
  } catch (e: any) {
    notify.error('Backend '+e.response.statusText);
    throw e;
  }
};

export const actionNativeSignup = async (body: any) => {
  try {
    const response = await authApi.nativeSignup(body);
    if (response.status === 201) {
      notify.success(response.message);
    }
  } catch (e) {
    notify.error('Backend '+e.response.statusText);
    throw e;
  }
};

export const actionNativeLogout = () => async (dispatch: TypedDispatch) => {
  try {
    const res = await authApi.nativeLogout();
    if (res.data.success) {
      dispatch({ type: ActionTypes.LOGOUT });
      notify.success('You successfully logged out');
    }
  } catch (e) {
    dispatch({ type: ActionTypes.LOGOUT });
  }
};

export const actionSendForgotPassword = async (email: { email: string }) => {
  try {
    const response = await authApi.sendForgotPasswordToken({ ...email });
    if (response.data.success) {
      notify.success('Check your Email for reset password letter');
    }
    return response;
  } catch (e) {
    notify.error('Backend '+e.response.statusText);
    throw e;
  }
};

export const actionSendResetPassword = async (data: any) => {
  try {
    const response = await authApi.actionResetPassword(data);
    if (response.data.success) {
      notify.success('You successfully updated password');
    }
    return response;
  } catch (e) {
    notify.error('Backend '+e.response.statusText);
    throw e;
  }
};

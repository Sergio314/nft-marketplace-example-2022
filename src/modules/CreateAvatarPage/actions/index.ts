import { avatarApi } from '@/api';
import { notify } from '@/shared/components/Notify/Notify';
import { ActionTypes } from '../reducers';

export const actionSendAvatar = async (data: any) => {
  try {
    const response = await avatarApi.createAvatar(data);
    if (response.data.success) {
      notify.success('Avatar uploaded successfully');
      return response.data;
    } else {
      throw response.data.message;
    }
  } catch (e) {
    const error = e.response?.data?.message || e.message;
    notify.error(error);
    throw new Error(error);
  }
};

export const actionSaveAvatarDraft = (values: any) => ({ type: ActionTypes.SAVE_DRAFT, payload: { ...values } });
export const clearDraft = () => ({ type: ActionTypes.CLEAR_DRAFT });

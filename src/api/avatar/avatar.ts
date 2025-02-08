import { api } from '@/core/api';
import { avatarPaths } from '@/core/api/api.config';

export const avatarApi = {
  createAvatar: (body: any) => api.post(avatarPaths.createAvatar, body),
};

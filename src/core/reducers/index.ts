import { authReducer } from '@/modules/Auth/reducers';
import { avatarReducer } from '@/modules/CreateAvatarPage/reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  authReducer,
  avatarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

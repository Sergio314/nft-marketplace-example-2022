export enum ActionTypes {
  START_LOADING = '@join/START_LOADING',
  FINISH_LOADING = '@join/FINISH_LOADING',
  REMOVE = '@join/REMOVE',
  PROFILE = '@join/PROFILE',
  LOGOUT = '@join/LOGOUT',
}

export interface Session {
  isLoading: boolean;
  isExist: boolean;
  user: any;
}

export type Action =
  | {
      type: ActionTypes.START_LOADING;
    }
  | {
      type: ActionTypes.FINISH_LOADING;
    }
  | {
      type: ActionTypes.PROFILE;
      payload: {
        data: any;
      };
    }
  | {
      type: ActionTypes.REMOVE;
    }
  | {
      type: ActionTypes.LOGOUT;
      payload: string;
    };

const initialState = {
  isLoading: false,
  isExist: false,
  user: null,
};

export const authReducer = (state: Session = initialState, action: Action): Session => {
  switch (action.type) {
    case ActionTypes.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionTypes.FINISH_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ActionTypes.PROFILE: {
      return {
        ...state,
        user: action.payload.data,
        isLoading: false,
        isExist: true,
      };
    }

    case ActionTypes.REMOVE:
    case ActionTypes.LOGOUT: {
      return { ...initialState };
    }

    default:
      return state;
  }
};

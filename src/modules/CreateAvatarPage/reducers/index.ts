export enum ActionTypes {
  SAVE_DRAFT = '@avatar/SAVE_DRAFT',
  CLEAR_DRAFT = '@avatar/CLEAR_DRAFT',
}

export interface Avatar {
  draft: any;
}

export type Action =
  | {
      type: ActionTypes.SAVE_DRAFT;
      payload: any;
    }
  | {
      type: ActionTypes.CLEAR_DRAFT;
    };

const initialState = {
  draft: null,
};

export const avatarReducer = (state: Avatar = initialState, action: Action): Avatar => {
  switch (action.type) {
    case ActionTypes.SAVE_DRAFT: {
      return {
        ...state,
        draft: action.payload,
      };
    }
    case ActionTypes.CLEAR_DRAFT: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};

import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentText: string;
    token: string;
  }
  
  const initialState = {
    commentText: 'Привет, Redux!',
    token: '',
  }

  const UPDATE_COMMENT = 'UPDATE_COMMENT'
  
  export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
  })
  
  const UPDATE_TOKEN = 'UPDATE_TOKEN'
  
  export const updateToken: ActionCreator<AnyAction> = (token) => ({
    type: UPDATE_TOKEN,
    token,
  })

  export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_COMMENT':
        return {
          ...state, 
          commentText: action.text
        }

      case 'UPDATE_TOKEN':
        return {
          ...state, 
          token: action.token
        }
      default:
        return state;
    }
  }
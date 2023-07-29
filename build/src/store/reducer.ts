import { ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";
import { useEffect } from "react";
import { ThunkAction } from "redux-thunk";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
  }
  
  const initialState = {
    commentText: 'Привет, Redux!',
    token: '',
    me: {
      loading: false,
      error: '',
      data: {}
    }
  }

  const UPDATE_COMMENT = 'UPDATE_COMMENT'
  export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text:string;}

  
  export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
  })
  
  const UPDATE_TOKEN = 'UPDATE_TOKEN'
  export type UpdateTokenAction = {
    type: typeof UPDATE_TOKEN;
    token: string;
  }
  
  export const updateToken: ActionCreator<AnyAction> = (token) => ({
    type: UPDATE_TOKEN,
    token,
  })

  export type RootAction = 
  UpdateCommentAction | 
  UpdateTokenAction | 
  MeRequestAction |
  MeRequestSuccessAction |
  MeRequestErrorAction;

  export const rootReducer: Reducer<RootState, RootAction> = (state = initialState, action) => {
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

      case ME_REQUEST:
      case ME_REQUEST_SUCCESS:
      case ME_REQUEST_ERROR:
          return  { ...state,
            me: meReducer(state.me, action)
          }
      default:
        return state;
    }
  }

  // по домашке 11 модуля - выносит сохранение токена в redux с помошью мидлвэра Thunk
  export const saveToken = (): ThunkAction<void, RootState, unknown, RootAction> => (dispatch) => {
    
    useEffect(() => {
      let token = localStorage.getItem('token') || window.__token__;
      if (token && token !== 'undefined') {
        dispatch(updateToken(token));
        localStorage.setItem('token',  token);
      }
    }, [])
  }
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateToken } from "../store";
import { AnyAction, Store } from "redux";

export function useToken(store:Store<RootState, AnyAction>) {

  useEffect(() => {
    let token = localStorage.getItem('token') || window.__token__;
    store.dispatch(updateToken(token));
      if (token.length > 20) {
          localStorage.setItem('token',  token)
      }  
    })
  
}
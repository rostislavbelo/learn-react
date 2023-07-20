import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateToken } from "../store/reducer";
import { AnyAction, Store } from "redux";
import { timeout } from "../App";

export function useToken(store:Store<RootState, AnyAction>) {

  useEffect(() => {
    let token = localStorage.getItem('token') || window.__token__;
    console.log(token)
    store.dispatch(updateToken(token));
    //@ts-ignore
    store.dispatch(timeout())
    if (token && token !== "undefined") {        
        localStorage.setItem('token',  token)
    }  
    })
  
}
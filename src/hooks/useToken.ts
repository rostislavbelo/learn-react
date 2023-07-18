import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateToken } from "../store";

export function useToken() {

  const token = useSelector<RootState, string>(state => state.token)
  const dispatch = useDispatch();

  useEffect(    
    () => {
      if (window.__token__) {
        dispatch(updateToken(window.__token__))
      }
    }, []
  )
  return token
}
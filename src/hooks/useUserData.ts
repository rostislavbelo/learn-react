import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tocenContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer";
//import { useToken } from "./useToken";


interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {

  const [data, setData] = useState<IUserData>({});
  const token = useSelector<RootState>(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {return};
    
      dispatch({type: "ME_REQUEST"});
      axios.get("https://oauth.reddit.com/api/v1/me.json", {

        headers: { Authorization: `bearer ${token}` },
      })
        .then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.icon_img });
          dispatch({type: "ME_REQUEST_SUCCESS"});
        })
        .catch((error) => {
          console.log(error);
          dispatch({type: "ME_REQUEST_ERROR"});
        });


  }, [token]);


  return [data];
}
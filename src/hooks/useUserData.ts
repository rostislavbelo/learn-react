import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tocenContext";
//import { useToken } from "./useToken";


interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {

  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    const token = localStorage.getItem('token') || "";
    if (token) {
      axios.get("https://oauth.reddit.com/api/v1/me.json", {

        headers: { Authorization: `bearer ${token}` },
      })
        .then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.icon_img });
          console.log(resp.data);
        })
        .catch(console.log);
    }

  }, []);


  return [data];
}
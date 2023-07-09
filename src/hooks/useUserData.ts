import { useEffect, useState } from "react";
import axios from "axios";


interface IUserData {
    name?: string;
    iconImg?: string;
  }

export function UseUserData(token: string) {

    const [data, setData] = useState<IUserData>({});

    useEffect(() => {
      axios.get("https://oauth.reddit.com/api/v1/me", {
  
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.icon_img });
          console.log(resp.data);
        })
        .catch(console.log);
    }, [token]);


    return [data];
}
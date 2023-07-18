import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tocenContext";
import { useToken } from "./useToken";


export function usePostsData() {

  const [data, setData] = useState([]);
  //const token = useContext(tokenContext);
  const token = useToken();

  useEffect(() => {
    axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {

      headers: { Authorization: `bearer ${token}` },
    })
      .then((resp) => {
        const postsData = resp.data;
        setData(postsData.data.children);
      })
      .catch(console.log);
  }, [token]);

  console.log(data);
  return [data];
}
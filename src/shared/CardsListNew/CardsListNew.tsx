import React, { useContext, useEffect, useState } from "react";
import styles from "./cardslistnew.css";
import { postsContext } from "../context/postsContext";
import { generateRandomString } from "../utils/generateRandomString";
import { Card } from "../CardsList/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import axios from "axios";
import { error } from "console";

interface ICardListProps {
  author?: string;
  title?: string;
  imgPath?: string;
  dataUrl?: string;
  data?: any;
}

export function CardsListNew() {

  const [data, setData] = useState<any[]>([]);
  const token = useSelector<RootState>(state => state.token);

  const [loading, setLoading] = useState(true)
  const [errorLoading, setErrorLoading] = useState('')


  // тут через асинк запрос, для примера
  useEffect(() => {

    async function load() {
      setErrorLoading('')
      try {
        const response = await axios.get("https://oauth.reddit.com/rising/", {
        headers: { Authorization: `bearer ${token}` },
        params: {
          //количество постов в списке(по дефолту их 25)
          limit: 50,
        }
      });
        const postsData = response.data;
        setData(postsData.data.children);      

      } catch (error) {
        console.error(error);
        setErrorLoading(String(error));
      }
      setLoading(false);
    }
    load()
  }, [token]);


  const dataResponce = data;

  return (
    <>
    <h2 className={styles.title}>Список-репликация постов с Reddit.com как "бесконечный список" с подгрузкой</h2>
    <ul className={styles.cardsList}>
      {dataResponce.length !== 0 && !loading && !errorLoading && (
        <li>
          <span style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>Постов пока нет!</span>
        </li>
      )}

      {
        dataResponce.map((item: ICardListProps) => (
          <li key={generateRandomString()}>
            <Card dataAuthor={item.data.author} dataTitle={item.data.title} imgPath={item.data.thumbnail} dataUrl={item.data.permalink}/>
          </li>
        ))
      }
      {loading && (
        <li>
          <span style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>Идёт загрузка постов...</span>
        </li>
      )}
      {errorLoading && (
        <li>
          <span role='alert' style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>{errorLoading}</span>
        </li>
      )}      
    </ul>  
    </>  
  );
}

import React, { useContext, useEffect, useRef, useState } from "react";
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
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [nextAfter, setNextAfter] = useState('');


  useEffect(() => {
    // тут через асинк запрос, для примера
    async function load() {
      setErrorLoading('')
      try {
        const {data: {data: {after, children}}} = await axios.get("https://oauth.reddit.com/rising/", {
        headers: { Authorization: `bearer ${token}` },
        params: {
          //количество постов в списке(по дефолту их 25)
          limit: 10,
          // чтобы была подгрузка нового, а не дубль старой порции постов
          after: nextAfter
        },
      });

        setNextAfter(after);
        //ВАЖНО! Передача колбека внутри сеттера. С обращением к предыдущему состоянию, чтобы не затирать его, а добавлять к нему.
        setData(prevChildren => prevChildren.concat(...children));
        console.log(after)
        console.log(children)      
        

      } catch (error) {
        console.error(error);
        setErrorLoading(String(error));
      }
      setLoading(false);
    }

    //Обсёрвер наблюдает за скроллом.
    const observer = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting) {
        load();
      }
    }, {rootMargin: '10px'});

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }

  }, [bottomOfList.current, nextAfter, token]);



  return (
    <>
      <h2 className={styles.title}>Список-репликация постов с Reddit.com как "бесконечный список" с подгрузкой</h2>
      <ul className={styles.cardsList}>

        {
          data.map((item: ICardListProps) => (
            <li key={generateRandomString()}>
              <Card dataAuthor={item.data.author} dataTitle={item.data.title} imgPath={item.data.thumbnail} dataUrl={item.data.permalink}/>
            </li>
          ))
        } 

        <div ref={bottomOfList}></div>

        {/* {data.length !== 0 && !loading && !errorLoading && (
          <li>
            <span style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>Постов пока нет!</span>
          </li>
        )} */}

        
        {loading && (
          <li>
            <span style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>Идёт загрузка постов...</span>
          </li>
        )}

        {errorLoading && !loading && (
          <li>
            <span role='alert' style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>{errorLoading}</span>
          </li>
        )}           

      </ul>  
    </>  
  );
}

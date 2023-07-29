import React, {useEffect, useRef, useState } from "react";
import styles from "./cardslistnew.css";
import { generateRandomString } from "../utils/generateRandomString";
import { Card } from "../CardsList/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import axios from "axios";
import { ModalMain } from "../ModalMain";
import { Link, Route, Routes } from "react-router-dom";

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
  const [count, setCount] = useState(0);


  useEffect(() => {
    // тут через асинк запрос, для примера
    async function load() {
      setErrorLoading('')
      
      try {     

        const {data: {data: {after, children}}} = await axios.get("https://oauth.reddit.com/rising.json", {
        headers: { Authorization: `bearer ${token}` },
        params: {
          //количество постов в списке(по дефолту их 25)
          limit: 10,
          // чтобы была подгрузка нового, а не дубль старой порции постов
          after: nextAfter
        },
      });
        setCount(count + 1); 
        console.log(count) 
        setNextAfter(after);
        //ВАЖНО! Передача колбека внутри сеттера. С обращением к предыдущему состоянию, чтобы не затирать его, а добавлять к нему.
        setData(prevChildren => prevChildren.concat(...children));       

      } catch (error) {
        console.error(error);
        setErrorLoading(String(error));
      }
      setLoading(false);
 
  }

    //Обсёрвер наблюдает за скроллом.
    const observer = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting && count < 2) {
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

  }, [bottomOfList.current, nextAfter, token, count]);


  return (
    <>

      <h2 className={styles.title}>Пример модалки через React-router</h2>
      <Link to="/list/modal/" className={styles.btnModal}>Открыть</Link>

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

        {count === 2 &&  (<button style={{display:"block", width:"max-content", margin:"10px auto", padding: "5px 10px", fontSize:"20px", color:"red", border:"2px solid blue", borderRadius:"5px"}} onClick={()=>{setCount(0)}}>Загрузить ещё</button>)}

        
        {/* {data.length !== 0 && !loading && !errorLoading && (
          <li>
            <span style={{display:"block", width:"max-content", margin:"10px auto", fontSize:"20px", color:"red"}}>Постов пока нет!</span>
          </li>
        )} */}
        
        {(count < 2 || loading) && (
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

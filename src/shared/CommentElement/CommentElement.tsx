import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import styles from './commentelement.css';
//import { commentContext } from '../context/commentContext';
import { RootState } from '../../App';
import { useDispatch, useSelector, useStore } from 'react-redux';





// const [commentControled, setCommentControled] = useState("");

// function handleSubmitControlled(event: FormEvent) {
//   event.preventDefault();
//   setCommentControled(value);
// }

export function CommentElement() {

  // const store = useStore<RootState>();
  // const value = store.getState().commentText;
  // заменяет две строчки выше
  const value = useSelector<RootState, string>(state => state.commentText)

  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch({type: 'UPDATE_COMMENT', text: event.target.value});
  }


  return (
    <div className={styles.container}>
      <h3>Управляемое поле ввода с сохранением введенного в Redux</h3>
      <form className={styles.form} onSubmit={()=>{}}>
        <textarea
          className={styles.input}
          value={value}
          onChange={handleChange}
        ></textarea>
        <button className={styles.btn} type="submit">
          Комментировать
        </button>
      </form>
      <div className={styles.comment}></div>
    </div>

  );
}

import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentelement.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';



export function CommentElement() {

  // const store = useStore<RootState>();
  // const value = store.getState().commentText;
  // заменяет две строчки выше
  const value = useSelector<RootState, string>(state => state.commentText)

  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  //- для комментария
  const [comment, setComment] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setComment(value);
  }


  return (
    <div className={styles.container}>
      <h3>Управляемое поле ввода с сохранением введенного в Redux</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.input}
          value={value}
          onChange={handleChange}
        ></textarea>
        <button className={styles.btn} type="submit">
          Комментировать
        </button>
      </form>
      <div className={styles.comment}>{comment}</div>
    </div>

  );
}

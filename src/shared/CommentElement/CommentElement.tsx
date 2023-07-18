import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentelement.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';

type CommentElementProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>)=>void;
  onSubmit: (event: FormEvent)=>void;
  comment: string;
}

export function CommentElement({value, onChange, onSubmit, comment}:CommentElementProps) {

  // Логика вынесена в умный компонент-контейнер - CommentElementContainer

  // const store = useStore<RootState>();
  // const value = store.getState().commentText;
  // заменяет две строчки выше
  // const value = useSelector<RootState, string>(state => state.commentText)

  // const dispatch = useDispatch();

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   dispatch(updateComment(event.target.value));
  // }

  // //- для комментария
  // const [comment, setComment] = useState("");

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   setComment(value);
  // }


  return (
    <div className={styles.container}>
      <h3>Управляемое поле ввода с сохранением введенного с помощью Redux</h3>
      <form className={styles.form} onSubmit={onSubmit}>
        <textarea
          className={styles.input}
          value={value}
          onChange={onChange}
        ></textarea>
        <button className={styles.btn} type="submit">
          Комментировать
        </button>
      </form>
      <div className={styles.comment}>{comment}</div>
    </div>

  );
}

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';
import { CommentElement } from '../CommentElement';



export function CommentElementContainer() {

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
    <CommentElement 
    value={value}
    onChange={handleChange}
    onSubmit={handleSubmit}
    comment={comment}
    />
  );
}

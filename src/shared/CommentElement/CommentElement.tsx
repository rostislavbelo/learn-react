import React from 'react';
import styles from './commentelement.css';
//import { commentContext } from '../context/commentContext';

import { RootState } from '../../App';
import { useStore } from 'react-redux';





// const {onChange} = useContext(commentContext)

// function handleChange1(event: ChangeEvent<HTMLTextAreaElement>) {
//   onChange(event.target.value);
// }

// const [commentControled1, setCommentControled1] = useState("");

// function handleSubmitControlled1(event: FormEvent) {
//   event.preventDefault();
//   setCommentControled1(value);
// }

export function CommentElement() {

  const store = useStore<RootState>();
  const value = store.getState().commentText;
  return (
    <div className={styles.container}>
      <h3>{value}</h3>
      {/* <form className={styles.form} onSubmit={handleSubmitControlled1}>
        <textarea
          className={styles.input}
          value={value}
          onChange={handleChange1}
        ></textarea>
        <button className={styles.btn} type="submit">
          Комментировать
        </button>
      </form>
      <div className={styles.comment}>{commentControled1}</div> */}
    </div>

  );
}

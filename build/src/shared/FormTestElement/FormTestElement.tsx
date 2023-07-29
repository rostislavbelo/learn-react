import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './formtestelement.css';




export function FormTestElement() {

  const [comment, setComment] = useState('');

  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [validateError, setValidateError] = useState(false);

  
function handleSubmit(event: FormEvent) {
  event.preventDefault();
  
  setTouched(true);
  if (value.length <= 3) {
    setValidateError(true);
    
  } else {setComment(value)}
}

function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  setValue(event.target.value);
  if (validateError && value.length >= 3) {
    setValidateError(false);
  }
}


function validateValue() {
  if (value.length <= 3) {
    return 'Введите больше 3х символов!'
  }
  return '';
}



  return (
    <div className={styles.container}>
      <h3>Управляемое поле ввода с валидацией средствами React</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.input}
          value={value}
          onChange={handleChange}
          aria-invalid={validateError}
          ></textarea>
        {touched && validateValue() && (<div className={styles.validate}>{validateValue()}</div>)}
        <button className={styles.btn} type="submit" disabled={validateError}>
          Комментировать
        </button>
      </form>
      <div className={styles.comment}>{comment}</div>
    </div>

  );
}

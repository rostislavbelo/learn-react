import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./modaladd.css";
import ReactDOM from "react-dom";
import { useCloseModal } from "../../hooks/useCloseModal";
import { commentContext } from "../context/commentContext";
import { CommentElementContainer } from "../CommentElementContainer";
import { FormTestElement } from "../FormTestElement";
import { useNavigate } from "react-router-dom";

interface IPostProps {
  onClose?: () => void;
}

export function ModalAdd(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  const history = useNavigate();

  useCloseModal(() => {history('/list/')}, ref);

  const node = document.querySelector("#modal_root");
  if (!node) {
    return null;
  }

  // для неуправляемого инпута
  let commentDefault = null;

  const refInputUncontroled = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    refInputUncontroled.current?.focus();
  }, []);

  const [comment, setComment] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(refInputUncontroled.current?.value);
    setComment(`${refInputUncontroled.current?.value}`);
  }
  //---------------------------------------------------------------------

  const {valueControled, onChange} = useContext(commentContext)

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  const [commentControled, setCommentControled] = useState("");

  function handleSubmitControlled(event: FormEvent) {
    event.preventDefault();
    setCommentControled(valueControled);
  }

  return ReactDOM.createPortal(
    <div className={styles.modalMain} ref={ref}>
      <h2 className={styles.title}>Пример модалки через React-router<br/><span>Окно открывается/закрывается по роуту</span></h2>
      

      <div className={styles.container}>
        <h3>Неуправляемое поле ввода с focus через ref</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
            className={styles.input}
            ref={refInputUncontroled}
          ></textarea>
          <button className={styles.btn} type="submit">
            Комментировать
          </button>
        </form>
        <div className={styles.comment}>{comment}</div>
      </div>

      <div className={styles.container}>
        <h3>Управляемое поле ввода с сохранением введенного  с помощью context</h3>
        <form className={styles.form} onSubmit={handleSubmitControlled}>
          <textarea
            className={styles.input}
            value={valueControled}
            onChange={handleChange}
          ></textarea>
          <button className={styles.btn} type="submit">
            Комментировать
          </button>
        </form>
        <div className={styles.comment}>{commentControled}</div>
      </div>
      <CommentElementContainer />
      <FormTestElement />
    </div>,
    node
  );
}

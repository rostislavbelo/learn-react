import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./modalmain.css";
import ReactDOM from "react-dom";
import { useCloseModal } from "../../hooks/useCloseModal";
import { commentContext } from "../context/commentContext";
import { CommentElement } from "../CommentElement";
import { CommentElementContainer } from "../CommentElementContainer";
import { FormTestElement } from "../FormTestElement";

interface IPostProps {
  onClose?: () => void;
}

export function ModalMain(props: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(()=>{
  //   function handleClick(event:MouseEvent) {
  //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {
  //       props.onClose?.();
  //     }
  //   }
  //   document.addEventListener('click', handleClick)

  //   return () => {
  //     document.removeEventListener('click', handleClick)
  //   }
  // },[]);

  // Заменяет код выше внешним хуком
  useCloseModal(() => {props.onClose?.()}, ref);

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

  // Для управляемого инпута
  
  
  // const [valueControled, setValueControled] = useState(""); //- вынесли наверх в App в контекст onChange заменяет setValueControled

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
      <h2 className={styles.title}>Пример модалки через Portal</h2>

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

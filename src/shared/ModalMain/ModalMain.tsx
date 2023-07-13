import React, { useEffect, useRef } from 'react';
import styles from './modalmain.css';
import ReactDOM from 'react-dom';
import { useCloseModal } from '../../hooks/useCloseModal';

interface IPostProps {
  onClose?: () => void;
}

export function ModalMain(props:IPostProps) {
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

  useCloseModal(()=>{props.onClose?.()}, ref)

  const node = document.querySelector('#modal_root');
  if (!node) {
    return null;
  }

 
  return ReactDOM.createPortal(
    (<div className={styles.modalMain} ref={ref}>
      <h2 className={styles.title}>Пример модалки через Portal</h2>
    </div>),
    node
  );
}

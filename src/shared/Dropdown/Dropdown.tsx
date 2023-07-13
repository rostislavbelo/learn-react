import React, { useEffect, useRef } from "react";
import styles from "./dropdown.css";
import { useCloseModal } from "../../hooks/useCloseModal";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  onOpen?: ()=>void;
  onClose?: ()=>void;
}

const NOOP = ()=>{};


export function Dropdown({ button, children, onOpen=NOOP, onClose=NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])


  const ref = useRef<HTMLDivElement>(null);

  // useEffect(()=>{
  //   function handleClick(event:MouseEvent) {
  //     if (event.target instanceof Node && !ref.current?.contains(event.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   }
  //   document.addEventListener('click', handleClick)

  //   return () => {
  //     document.removeEventListener('click', handleClick)
  //   }
  // },[]);

  useCloseModal(()=>setIsDropdownOpen(false), ref)

  
  return (
    <div className={styles.container} ref={ref}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>{children}</div>
        </div>
      )}
    </div>
  );
}

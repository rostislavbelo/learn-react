import React from "react";
import styles from "./dropdown.css";

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
  
  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>{children}</div>
        </div>
      )}
    </div>
  );
}

import { useEffect } from "react";

export function useCloseModal(cb:()=>void, ref:React.RefObject<HTMLElement>) {


    useEffect(()=>{
    function handleClick(event:MouseEvent) {
        if (event.target instanceof Node && !ref.current?.contains(event.target)) {
            cb();
        }
    }
    document.addEventListener('click', handleClick)

    return () => {
        document.removeEventListener('click', handleClick)
    }
    },[]);
    
}
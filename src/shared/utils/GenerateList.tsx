import * as React from "react";
import { IconComponent, TNames, TSizes } from "../IconComponent";
import { ModalMain } from "../ModalMain";


interface IItem {
    text: string;
    id: string;
    onClick: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    dataMobile: string;
    icon?: TNames;
    size?: TSizes;    
}

interface IGenerateListProps {
    list: IItem[];
}


export function GenerateList({ list }: IGenerateListProps) {

    return (
        <>
            {list.map(({As = 'div', text, onClick, className, id, href, dataMobile, icon, size}) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}  
                    key={id}
                    href={href}  
                    data-mobile={dataMobile}
                >    
                    <button onClick={()=>{console.log('click')}}>
                        { icon && <IconComponent name={icon} size={size}/> }        
                        <span>{text}</span>
                    </button>       
                </As>
            ))}      
        </>



    );
}

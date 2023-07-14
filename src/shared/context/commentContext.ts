import React from "react";


type CommentContextType = {
    valueControled: string;
    onChange: (value:string)=>void;
}


export const commentContext = React.createContext<CommentContextType>({
    valueControled: '',
    onChange: ()=>{}
});
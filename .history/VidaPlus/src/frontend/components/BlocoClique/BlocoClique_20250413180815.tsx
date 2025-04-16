import React from "react";
import { InputStyle } from "./stiloBlocoClique";

interface BlocoProps{
    src: string;
    texto: string;
}

const Input: React.FC<BlocoProps> = ({src, texto}) =>{
    return(
        <>
            <img src={src}/>
            <p>{texto}</p>
        </>
    )
}

export default Input;
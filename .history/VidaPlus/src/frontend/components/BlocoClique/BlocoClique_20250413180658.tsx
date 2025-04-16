import React from "react";
import { InputStyle } from "./stiloBlocoClique";

interface BlocoProps{
    src: string;
    value: string;
}

const Input: React.FC<BlocoProps> = ({src, value}) =>{
    return(
        <>
            <img src={src}/>
        </>
    )
}

export default Input;
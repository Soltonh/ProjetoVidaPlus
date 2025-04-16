import React from "react";
import { InputStyle } from "./stiloBlocoClique";

interface InputProps{
    type: "email" | "password";
    placeholder: string;
}

const Input: React.FC<InputProps> = ({type, placeholder}) =>{
    return(
        <>
            <InputStyle type={type} placeholder={placeholder}/>
        </>
    )
}

export default Input;
import React from "react";
import { InputStyle } from "./stilo";

interface InputProps{
    type: "text" | "email" | "password";
    placeholder: string;
    value: string;
    quandoMudar: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({type, placeholder, value, quandoMudar}) =>{
    return(
        <>
            <InputStyle type={type} placeholder={placeholder} value={value} onChange={quandoMudar} />
        </>
    )
}

export default Input;
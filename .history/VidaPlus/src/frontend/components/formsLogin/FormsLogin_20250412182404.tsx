import React from "react";
import { InputStyle, ButtonLogin } from "./stiloForm";

interface InputProps{
    type: "email" | "password";
    placeholder: string;
    value: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, value}) =>{
    return(
        <>
            <InputStyle type={type} placeholder={placeholder}/>
            <ButtonLogin value={value}/>
        </>
    )
}

export default Input;
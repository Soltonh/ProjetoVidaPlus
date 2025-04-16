import React from "react";
import { InputStyle } from "./stiloForm";

interface InputProps{
    type: "email" | "password";
    placeholder: string;
    value: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, value}) =>{
    return(
        <>
            <InputStyle type={type} placeholder={placeholder} value={value}/>
        </>
    )
}

export default Input;
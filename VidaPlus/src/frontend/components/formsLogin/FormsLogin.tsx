import React from "react";
import styled from "styled-components";

export const InputStyle = styled.input`
    padding:10px;
    width:300px;
    border: 1px solid black;
    border-radius: 10px;
`;
export const ButtonLogin = styled.button`
    padding:10px;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    background-color: black;
`;

interface InputProps{
    type: "email" | "password";
    placeholder: string;
    value: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, value}) =>{



    return(
        <>
            <InputStyle type={type} placeholder={placeholder}/>
            <ButtonLogin/>
        </>
    )
}

export default Input;
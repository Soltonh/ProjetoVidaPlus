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
    type: "email" | "password" | "date";
    placeholder?: string;
    value?: string;
    id: string;
}

const Input: React.FC<InputProps> = ({type, placeholder, id}) =>{



    return(
        <>
            <InputStyle id={id} type={type} placeholder={placeholder}/>
            <ButtonLogin/>
        </>
    )
}

export default Input;
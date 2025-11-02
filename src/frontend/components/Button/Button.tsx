import React from "react";
import styled from "styled-components";

export const InputStyle = styled.input`
    padding:10px;
    width:300px;
    border: 1px solid black;
    border-radius: 10px;
`;

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
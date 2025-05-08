import React from "react";
import styled from "styled-components";

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
`

export const Label = styled.label`
    color: black;
    font-size: 20px;
    font-weight: bold;
`

export const Selectt = styled.select`
    background-color: white;
    border:rgb(197, 197, 197) 1px solid;
    border-radius: 5px;
    color:black;
    &:focus {
    outline: none;
    border: 3px solid #219D9C; /* muda a borda ao focar */
  }
`

interface SelectProps{
    texto?: string;
    opcoes: string[];
    id?:string;
}

const Select: React.FC<SelectProps> = ({texto, opcoes, id}) => {




    return(
        <>
            <Div>
            <Label>{texto}</Label>
                <Selectt id={id}>
                {opcoes.map((opcao, index) => (
                <option key={index} value={opcao}>
                    {opcao}
                </option>
                ))}
            </Selectt>
            </Div>
        </>
    )
}

export default Select;
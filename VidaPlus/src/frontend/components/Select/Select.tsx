import React from "react";
import "./stiloSelect"
import { Div, Label, Selectt } from "./stiloSelect";

interface SelectProps{
    texto: string;
    opcoes: string[];
}

const Select: React.FC<SelectProps> = ({texto, opcoes}) => {

    return(
        <>
            <Div>
            <Label>{texto}</Label>
                <Selectt>
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
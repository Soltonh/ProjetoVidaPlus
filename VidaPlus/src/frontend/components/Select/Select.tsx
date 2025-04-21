import React from "react";
import "./stiloSelect"
import { Div, Label, Selectt } from "./stiloSelect";

interface SelectProps{
    texto: string;
}

const Select: React.FC<SelectProps> = ({texto}) => {

    return(
        <>
            <Div>
            <Label>{texto}</Label>
            <Selectt>
                <option>Dr. Manoel Gomes Filho</option>
            </Selectt>
            </Div>
        </>
    )
}

export default Select;
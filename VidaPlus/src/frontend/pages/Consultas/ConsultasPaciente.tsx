import React from "react";
import "./stiloConsPaciente"
import NavBar from "../../components/NavBar/NavBar";
import Select from "../../components/Select/Select";
import { Div, H1, Wrapper } from "./stiloConsPaciente";

const TelaConsultaPaciente : React.FC = () => {

    return(
        <>
        <div>
            <NavBar/>
        </div>
        <Wrapper>
            <Div>   
                <H1>Marcar Consulta</H1>
                <Select texto="Paciente"></Select>
                <Select texto="Especialidade"></Select>
                <Select texto="Profissional"></Select>
                <Select texto="Local"></Select>
                <Select texto="Data"></Select>
            </Div>
         </Wrapper>
        </>
    )
}

export default TelaConsultaPaciente
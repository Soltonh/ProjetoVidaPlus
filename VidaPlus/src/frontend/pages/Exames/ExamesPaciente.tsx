import React, { useState } from "react";
import Select from "../../components/Select/Select";
import { Div, DivMeio, H1 } from "./stiloExaPaciente";
import { ButtonLogin } from "../../components/formsLogin/FormsLogin";
import Layout from "../../components/Layout/layout";
import { Input } from "../../components/input/input";


const TelaExamesPaciente : React.FC = () => {
    const [ativo, setAtivo] = useState(false);

    const paciente = [
        "Hailton Mario Ferreira",
        "Jorge Benjor",
        "Jorge Mário"
    ];

    const Exames = [
        "Hemograma", 
        "Exames de urina", 
        "Colesterol", 
        "Ureia", 
        "Creatinina", 
        "Radiografias", 
        "Eletrocardiograma",
        "Papanicolau"
    ];

    const Unidade = [
        "Lavoisier",
        "Cartão de todos",
        "Dr.Consulta"
    ];

    const Dia = [
        "20/05/2025",
        "01/06/2025",
        "25/06/2025",
    ];
    const hora = [
        "14:00",
        "10:00",
        "07:00"
    ];
    return(
        <>
        <Layout>
            <Div>   
                <H1>Agendar Exames</H1>
                <Select texto="Paciente" opcoes={paciente}/>
                <Select texto="Exames" opcoes={Exames}/>
                <Select texto="Unidade" opcoes={Unidade}/>
                <DivMeio>
                    <Select id="SelectDataExames" opcoes={Dia}></Select>
                    <Select id="SelectHoraExames" opcoes={hora}></Select>
                </DivMeio>
                <h3>Anexe o pedido de exame abaixo:</h3>
                <Input type="file" id="ArquivoConsulta"></Input>
                    <ButtonLogin 
                    onMouseDown={() => setAtivo(true)}  // Quando aperta o botão
                    onMouseUp={() => setAtivo(false)}   // Quando solta o botão
                    style={{ width: "100%",  backgroundColor: ativo ? "#197c7c" : "#219D9C",}}
                    >
                    Salvar
                    </ButtonLogin>
            </Div>
         </Layout>
        </>
    )
}

export default TelaExamesPaciente
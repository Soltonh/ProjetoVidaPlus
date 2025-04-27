import React, { useState } from "react";
import Select from "../../components/Select/Select";
import { Div, DivMeio, DivRadio, H1, H3, InputMotivo, InputRadio, LabelCons } from "./stiloConsPaciente";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";
import Layout from "../../components/Layout/layout";


const TelaConsultaPaciente : React.FC = () => {
    const [ativo, setAtivo] = useState(false);

    const paciente = [
        "Hailton Mario Ferreira",
        "Jorge Benjor",
        "Jorge Mário"
    ];

    const especialidade = [
        "Psicoterapia",
        "Clinico Geral",
        "Ortopedia"
    ];

    const profissional = [
        "Dr. Manoel Gomes Filho",
        "Dra. Ana Beatriz Souza",
        "Dr. Carlos Henrique Lima"
    ];

    const dia = [
        "10/12/2025",
        "20/05/2025",
        "15/01/2025"
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
                <H1>Marcar Consulta</H1>
                <Select texto="Paciente" opcoes={paciente}/>
                <Select texto="Especialidade" opcoes={especialidade}/>
                <Select texto="Profissional" opcoes={profissional}/>
                <DivMeio>
                    <Select texto="Dia" opcoes={dia}/>
                    <Select texto="Hora" opcoes={hora}/>
                    <DivRadio>
                        <H3>Tipo de consulta:</H3>
                        <InputRadio 
                            type="radio" 
                            id="telemedicina"
                            name="TipoCons"
                        />
                        <LabelCons htmlFor="telemedicina">Telemedicina</LabelCons>
                        <InputRadio 
                            type="radio" 
                            id="Presencial"
                            name="TipoCons"
                        />
                        <LabelCons htmlFor="Presencial">Presencial</LabelCons>
                    </DivRadio>
                </DivMeio>
                    <LabelCons htmlFor="MotivoCons">Motivo da Consulta:</LabelCons>
                    <InputMotivo id="MotivoCons"></InputMotivo>
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

export default TelaConsultaPaciente
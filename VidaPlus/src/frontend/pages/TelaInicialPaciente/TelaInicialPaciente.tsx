import React from "react";
import "./stiloTelaInicial"

import NavBar from "../../components/NavBar/NavBar";

import prontuario from "../../assets/prontuario.svg"
import Tele from "../../assets/Tele.svg"
import Exames from "../../assets/Exames.svg"
import consulta from "../../assets/consulta.svg"
import pesso from "../../assets/pesso.svg"
import MedicoInicial from "../../assets/MedicoInicial.jpg"

import { Buttoninicial, Div, DivDir, DivEsq, H1, H3, Img, DivBlocos } from "./stiloTelaInicial";
import BlocoClique from "../../components/BlocoClique/BlocoClique";

const TelaIncialPaciente: React.FC = () => {
    
    return (
            <>
            <div>
                <NavBar/>
            </div>
            <Div>
                <DivEsq>
                    <H1>Cadastro e Atendimento de Pacientes</H1>
                    <H3>Gerencie Consultas, Exames, Prontuários e Telemedicina</H3>
                    <Buttoninicial>Saiba Mais...</Buttoninicial>
                    <DivBlocos>
                        <BlocoClique src={consulta} texto="Consulta"  to="/consultas"></BlocoClique>
                        <BlocoClique src={Exames} texto="Exames"  to="/exames"></BlocoClique>
                        <BlocoClique src={prontuario} texto="Prontuários"  to="/prontuarios"></BlocoClique>
                        <BlocoClique src={Tele} texto="Telemedicina"  to="/telemedicina"></BlocoClique>
                        <BlocoClique src={pesso} texto="Gerenciar Dados"  to="/GerenciarCadastroPaciente"></BlocoClique>
                    </DivBlocos>
                </DivEsq>
                <DivDir>
                    <Img src={MedicoInicial}></Img>
                </DivDir>
            </Div>
            </>
    )
}

export default TelaIncialPaciente;
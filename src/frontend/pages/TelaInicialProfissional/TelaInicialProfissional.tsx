import React from "react";
import "./stiloTelaInicialProfissional"

import prontuario from "../../assets/prontuario.svg"
import historico from "../../assets/historico.svg"
import Exames from "../../assets/Exames.svg"
import agenda from "../../assets/agenda.svg"
import pesso from "../../assets/pesso.svg"
import MedicoInicial from "../../assets/MedicoInicial.jpg"

import { Buttoninicial, Div, DivDir, DivEsq, H1, H3, Img, DivBlocos } from "./stiloTelaInicialProfissional";
import BlocoClique from "../../components/BlocoClique/BlocoClique";
import Layout from "../../components/Layout/layout";

const TelaIncialProfissional: React.FC = () => {
    
    return (
            <>
            <Layout>
                <Div>
                    <DivEsq>
                        <H1>Gestão dos Profisionais</H1>
                        <H3>Gerencie Agendas, Prontuários, Receitas digitais e Histórico.</H3>
                        <Buttoninicial>Saiba Mais...</Buttoninicial>
                        <DivBlocos>
                            <BlocoClique src={agenda} texto="Agenda"  to="/agendas"></BlocoClique>
                            <BlocoClique src={Exames} texto="Receitas Digitais"  to="/receitas digitais"></BlocoClique>
                            <BlocoClique src={prontuario} texto="Prontuários"  to="/prontuarios"></BlocoClique>
                            <BlocoClique src={historico} texto="Histórico"  to="/histórico"></BlocoClique>
                            <BlocoClique src={pesso} texto="Gerenciar Dados"  to="/GerenciarCadastroProfissional"></BlocoClique>
                        </DivBlocos>
                    </DivEsq>
                    <DivDir>
                        <Img src={MedicoInicial}></Img>
                    </DivDir>
                </Div>
            </Layout>
            </>
    )
}

export default TelaIncialProfissional;
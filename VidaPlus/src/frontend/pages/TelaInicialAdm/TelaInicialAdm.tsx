import React from "react";
import "./stiloTelaInicialAdm"

import Exames from "../../assets/Exames.svg"
import consulta from "../../assets/consulta.svg"
import pesso from "../../assets/pesso.svg"
import MedicoInicial from "../../assets/MedicoInicial.jpg"

import { Buttoninicial, Div, DivDir, DivEsq, H1, H3, Img, DivBlocos } from "./stiloTelaInicialAdm";
import BlocoClique from "../../components/BlocoClique/BlocoClique";
import Layout from "../../components/Layout/layout";

const TelaIncialAdm: React.FC = () => {
    
    return (
            <>
            <Layout>
                <Div>
                    <DivEsq>
                        <H1>Gestão de Administradores</H1>
                        <H3>Gerencie Cadastros, Fluxo de internações e Relatórios</H3>
                        <Buttoninicial>Saiba Mais...</Buttoninicial>
                        <DivBlocos>
                            <BlocoClique src={pesso} texto="Gerenciar Cadastros"  to="/GerenciarCadastroAdm"></BlocoClique>
                            <BlocoClique src={consulta} texto="Fluxo de Internações"  to="/internacoes"></BlocoClique>
                            <BlocoClique src={Exames} texto="Relatórios"  to="/relatorios"></BlocoClique>
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

export default TelaIncialAdm;
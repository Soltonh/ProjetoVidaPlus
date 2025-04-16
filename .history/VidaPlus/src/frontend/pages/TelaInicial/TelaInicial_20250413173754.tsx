import React from "react";
import "./stiloTelaInicial"
import NavBar from "../../components/NavBar/NavBar";

import MedicoInicial from "../../assets/MedicoInicial.jpg"
import { Buttoninicial, Div, DivDir, DivEsq, H1, H3, Img } from "./stiloTelaInicial";

const TelaIncial: React.FC = () => {
    

    return (
            <>
            <div>
                <NavBar/>
            </div>
            <Div>
                <DivEsq>
                    <H1>Cadastro e Atendimento de Pacientes</H1>
                    <H3>Gerencie consultas, exames, prontuários e telemedicina</H3>
                    <Buttoninicial>Saiba Mais...</Buttoninicial>
                </DivEsq>
                <DivDir>
                    <Img src={MedicoInicial}></Img>
                </DivDir>
            </Div>
            </>
    )
}

export default TelaIncial;
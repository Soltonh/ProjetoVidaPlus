import React from "react";
import "./stiloTelaInicial"
import NavBar from "../../components/NavBar/NavBar";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";
import MedicoInicial from "../../assets/MedicoInicial.jpg"
import { Div, DivDir, DivEsq, Img } from "./stiloTelaInicial";

const TelaIncial: React.FC = () => {
    

    return (
            <>
            <div>
                <NavBar/>
            </div>
            <Div>
                <DivEsq>
                    <h1>Cadastro e Atendimento de Pacientes</h1>
                    <h3>Gerencie consultas, exames, prontuários e telemedicina</h3>
                    <ButtonLogin>Saiba Mais...</ButtonLogin>
                </DivEsq>
                <DivDir>
                    <Img src={MedicoInicial}></Img>
                </DivDir>
            </Div>
            </>
    )
}

export default TelaIncial;
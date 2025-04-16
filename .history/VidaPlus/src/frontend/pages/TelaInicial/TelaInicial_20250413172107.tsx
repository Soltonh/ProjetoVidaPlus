import React from "react";
import "./stiloTelaInicial"
import NavBar from "../../components/NavBar/NavBar";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";
import MedicoInicial from "../../assets/MedicoInicial.jpg"
import { Div, Img } from "./stiloTelaInicial";

const TelaIncial: React.FC = () => {
    

    return (
            <>
            <div>
                <NavBar/>
            </div>
            <Div>
                <div>
                    <h1>Cadastro e Atendimento de Pacientes</h1>
                    <h3>Gerencie consultas, exames, prontuários e telemedicina</h3>
                    <ButtonLogin>Saiba Mais...</ButtonLogin>
                </div>
                <div>
                    <Img src={MedicoInicial}></Img>
                </div>
            </Div>
            </>
    )
}

export default TelaIncial;
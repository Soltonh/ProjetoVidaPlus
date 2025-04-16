import React from "react";
import "./stiloTelaInicial"
import NavBar from "../../components/NavBar/NavBar";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";
import MedicoInicial from "../../assets/MedicoInicial.jpg"

const TelaIncial: React.FC = () => {
    

    return (
            <>
            <div>
                <NavBar/>
            </div>
            <div>
                <div>
                    <h1>Cadastro e Atendimento de Pacientes</h1>
                    <h3>Gerencie consultas, exames, prontuários e telemedicina</h3>
                    <ButtonLogin>Saiba Mais...</ButtonLogin>
                </div>
                <div>
                    <img src={MedicoInicial}></img>
                </div>
            </div>
            </>
    )
}

export default TelaIncial;
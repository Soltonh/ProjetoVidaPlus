import React from "react";
import "./stiloTelaInicial"
import NavBar from "../../components/NavBar/NavBar";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";

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
                    <ButtonLogin></ButtonLogin>
                </div>
                <div>
                
            </div>
            </div>
            </>
    )
}

export default TelaIncial;
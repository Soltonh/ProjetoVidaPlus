import React from "react";
import "./stiloTelaInicial"
import NavBar from "../../components/NavBar/NavBar";

const TelaIncial: React.FC = () => {
    

    return (
            <>
            <div>
                <NavBar/>
            </div>
            <div>
                <h1>Cadastro e Atendimento de Pacientes</h1>
                <h3>Gerencie consultas, exames, prontuários e telemedicina</h3>
            </div>
            </>
    )
}

export default TelaIncial;
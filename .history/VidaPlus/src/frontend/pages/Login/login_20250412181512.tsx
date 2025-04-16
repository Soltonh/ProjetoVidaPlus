import React from "react";
import { Titulo, SecaoFundo, DivForm, InputDiferente, InputDiferente2 } from "./stiloLogin";


const CadastroUser: React.FC = () => {
    
    return (
            <SecaoFundo>
                <DivForm>
                    <Titulo>Faça Login</Titulo>
                    <InputDiferente type="email" placeholder="Digite seu Email:"/>
                    <InputDiferente2 type="password" placeholder="Digite sua Senha:"/>
                </DivForm>
            </SecaoFundo>
    )
}

export default CadastroUser;
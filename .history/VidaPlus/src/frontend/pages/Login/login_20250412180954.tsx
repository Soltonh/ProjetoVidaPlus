import React from "react";
import { Titulo, SecaoFundo, DivForm, InputDiferente } from "./stiloLogin";
import Input from "../../components/formsLogin/FormsLogin";


const CadastroUser: React.FC = () => {
    
    return (
            <SecaoFundo>
                <DivForm>
                    <Titulo>Faça Login</Titulo>
                    <InputDiferente type="email" placeholder="Digite seu Email:"/>
                    <InputDiferente type="password" placeholder="Digite sua Senha:"/>
                </DivForm>
            </SecaoFundo>
    )
}

export default CadastroUser;
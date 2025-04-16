import React from "react";
import { Titulo, SecaoFundo, DivForm } from "./stiloLogin";
import Input from "../../components/formsLogin/FormsLogin";


const CadastroUser: React.FC = () => {
    
    return (
            <SecaoFundo>
                <DivForm>
                    <Titulo>Faça Login</Titulo>
                    <Input type="email" placeholder="Digite seu Email:"/>
                    <Input type="password" placeholder="Digite sua Senha:"/>
                </DivForm>
            </SecaoFundo>
    )
}

export default CadastroUser;
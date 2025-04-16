import React from "react";
import { Titulo, SecaoFundo, DivForm, InputDiferente, InputDiferente2, BotaoAcessar } from "./stiloTelaInicial";


const TelaIncial: React.FC = () => {
    

    return (
            <SecaoFundo>
                <DivForm>
                    <Titulo>Acesso VidaPlus</Titulo>
                    <InputDiferente type="email" placeholder="Digite seu Email:"/>
                    <InputDiferente2 type="password" placeholder="Digite sua Senha:"/>
                    <BotaoAcessar>Acessar</BotaoAcessar>
                </DivForm>
            </SecaoFundo>
    )
}

export default TelaIncial;
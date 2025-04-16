import styled from "styled-Components";
import Fundo from "../../assets/fundo.jpg"
import { ButtonLogin, InputStyle } from "../../components/formsLogin/stiloForm";

export const Titulo = styled.h1`
    color:rgb(255, 255, 255);
    font-size: 40px;
    font-family: garamond, 'Times New Roman', Times, serif;
    justify-content: center;
    margin: auto;
    margin-bottom: 0;
    margin-top: 10%;
    height: 10px;
`

export const SecaoFundo = styled.section`
    background-image: url(${Fundo});
    opacity: 80%;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const DivForm = styled.div`
    width: 50vw;
    height: 100vh;
    background-color:rgba(0, 0, 0, 0.53);
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 1px;

`
export const InputDiferente = styled(InputStyle)`
  margin: auto;
  height: 6vh;
  margin-top: -10%;
  width: 20vw;
`; 

export const InputDiferente2 = styled(InputStyle)`
  margin: auto;
  height: 6vh;
  margin-top: -25%;
  width: 20vw;
`; 

export const BotaoAcessar = styled(ButtonLogin)`
  margin: auto;
  height: 6vh;
  margin-top: -30%;
  width: 20vw;
`
import styled from "styled-Components";
import Fundo from "../../assets/fundo.jpg"
import { InputStyle } from "../../components/formsLogin/stiloForm";

export const Titulo = styled.h1`
    color:rgb(255, 255, 255);
    font-size: 40px;
    font-family: garamond, 'Times New Roman', Times, serif;
    justify-content: center;
    margin: auto;
    margin-bottom: 0;
    margin-top: 10%;
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
    gap: 10px;

`
export const InputDiferente = styled(InputStyle)`
  margin: auto;
  height: 50px;
  margin-top: 1%;
`;
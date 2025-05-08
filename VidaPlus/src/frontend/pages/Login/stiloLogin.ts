import styled from "styled-components";
import Fundo from "../../assets/fundo.jpg"
import { ButtonLogin, InputStyle } from "../../components/formsLogin/FormsLogin";

export const Titulo = styled.h1`
    color: white;
    font-size: 250%;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    margin: auto;
    margin-top: 15%;
    font-weight: 600;
    padding: 1%;
    text-align: center;

  @media (max-width: 1200px){
  margin-top: 20%;
  }

  @media (max-width: 1024px) {
    margin-top: 20%;
  }

  @media (max-width: 768px){
    margin-top: 20%;
  }

  @media (max-width: 480px){
    margin-top: 30%;
  }
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
    width: 100vw;
    height: 100vh;
    background-color:rgba(31, 31, 31, 0.53);
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 1px;
    
`
export const InputDiferente = styled(InputStyle)`
  margin: auto;
  height: 6vh;
  margin-top: -7%;
  width: 20vw;
  font-size: 17px;

  @media (max-width: 1200px){
    width: 30vw;
    margin-top: -10%;
  }

  @media (max-width: 1024px) {
    width: 30vw;
    margin-top: -10%;
  }

  @media (max-width: 768px){
    width: 50vw;
    margin-top: -20%;
  }

  @media (max-width: 480px){
    width: 70vw;
    margin-top: -20%;
  }
`; 

export const InputDiferente2 = styled(InputStyle)`
  margin: auto;
  height: 6vh;
  margin-top: -11%;
  width: 20vw;
  font-size: 17px;

  @media (max-width: 1200px){
    width: 30vw;
    margin-top: -15%;
  }

  @media (max-width: 1024px) {
    width: 30vw;
    margin-top: -15%;
  }

  @media (max-width: 768px){
    width: 50vw;
    margin-top: -30%;
  }

  @media (max-width: 480px){
    width: 70vw;
    margin-top: -40%;
  }
`; 

export const BotaoAcessar = styled(ButtonLogin)`
  margin: auto;
  height: 6vh;
  margin-top: -14%;
  width: 20vw;

  &:hover {
    background-color: white;
    color: black;
    transition: background-color 0.7s;
  }

  @media (max-width: 1200px){
    width: 30vw;
    margin-top: -20%;
  }

  @media (max-width: 1024px) {
    width: 30vw;
    margin-top: -20%;
  }

  @media (max-width: 768px){
    width: 50vw;
    margin-top: -40%;
  }

  @media (max-width: 480px){
    width: 70vw;
    margin-top: -60%;
  }

`
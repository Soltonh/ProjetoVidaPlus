import styled from "styled-Components";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    width: 70vw;
    margin: auto;
    padding: 30px;

    @media (max-width: 1200px) {
        width: 90vw;
    }
    
    @media (max-width: 1024px) {
        width: 90vw;
    }

    @media (max-width: 768px) {
        width: 90vw;
    }

    @media (max-width: 480px) {
        width: 90vw;
    }
`

export const DivEsq = styled.div`
    margin-left: auto;
    margin-bottom: auto;
    margin-right: auto;

`
export const DivBlocos = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    gap: 20px;

     
    @media (max-width: 1024px) {
        grid-template-columns: 30% 30% 30%;
    }

    @media (max-width: 768px) {
        grid-template-columns: 30% 30% 30%;
    }

    @media (max-width: 480px) {
        grid-template-columns: 30% 30% 30%;
    }
`

export const DivDir = styled.div`
    margin: auto;
`

export const Img = styled.img`
    margin: auto;
    border-radius: 20px;
    width: 100%;
    margin: auto;

    
    @media (max-width: 480px) {
        visibility: hidden;
    }
    
`
export const Buttoninicial = styled(ButtonLogin)`
    background-color: #ADD8D7;
    color: black;
    border: solid 1px black;
    margin-top: 25px;

    &:hover{
        background-color:rgb(108, 177, 176);
        border: solid 1px #ADD8D7;
    } 
    
    @media (max-width: 480px) {
        width: 100%;
    }

`

export const H1 = styled.h1`
    color: #219D9C;
    text-align: left;
    padding-top: 15px;
    font-size: 45px;

    @media (max-width: 480px) {
        width: 100%;
        text-align: center;
    }
`

export const H3 = styled.h3`
    color: #219D9C;
    text-align: left;
    padding-top: 20px;
    font-size: 20px;

    @media (max-width: 480px) {
        text-align: center;
        width: 100%;
    }
`

import styled from "styled-Components";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    width: 80%;
    margin: auto;
    padding: 30px;
`

export const DivEsq = styled.div`
    margin-left: auto;
    margin-bottom: auto;
    margin-right: auto;
`

export const DivDir = styled.div`
    margin: auto;
`

export const Img = styled.img`
    margin: auto;
    border-radius: 20px;
    width: 90%;
    margin: auto;
    
`
export const Buttoninicial = styled(ButtonLogin)`
    background-color: #ADD8D7;
    color: black;
    border: solid 1px black;
    margin-top: 20px;

    &:hover{
        background-color:rgb(108, 177, 176);
        border: solid 1px #ADD8D7;
    }
`

export const H1 = styled.h1`
    color: #219D9C;
    text-align: left;
    padding-top: 15px;
    font-size: 55px;
`

export const H3 = styled.h3`
    color: #219D9C;
    text-align: left;
    padding-top: 20px;
    font-size: 25px;
`
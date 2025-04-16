import styled from "styled-Components";
import { ButtonLogin } from "../../components/formsLogin/stiloForm";

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
`

export const DivEsq = styled.div`
    
`

export const DivDir = styled.div`
    background-color: black;
    margin: auto;
`

export const Img = styled.img`
    width: 60%;
    margin: auto;
    border-radius: 20px;
    
`
export const Buttoninicial = styled(ButtonLogin)`
    background-color: #ADD8D7;
    color: black;
    border: solid 1px black;

    &:hover{
        background-color:rgb(108, 177, 176);
        border: solid 1px #ADD8D7;
    }
`

export const H1 = styled.h1`
    color: #ADD8D7;
`
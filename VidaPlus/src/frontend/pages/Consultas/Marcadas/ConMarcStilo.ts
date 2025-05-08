import styled from "styled-components";

export const DivGeral = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    width: 90vw;

    #Input{
        width: 100%;
        color: black;
        height: 5vh;
        padding: 0;
        margin: 0;
    }
    #Select{
        width: 100%;
        height: 5vh;
        padding:0;
        margin:0;
    }
`
export const PrimeDiv = styled.div`
    display: grid;
    grid-template-columns: 10% 10%;
    gap: 10px;
    padding: 20px 0px 20px 0px;
`
export const DivTabela = styled.div`
    width: 100%;

    #TableMarcadas{
        width: 100%;
        color: black;
        font-size: 18px;
    }
`
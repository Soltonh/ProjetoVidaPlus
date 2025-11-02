import styled from "styled-components";


export const DivGeral = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    width: 90vw;
    padding: 2%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.27) ;
    margin-top: 50px;

    & h1{
        color: black;
        font-size: 35px;
    }

    #Input{
        width: 100%;
        color: black;
        height: 5vh;
        padding: 0;
        margin: 0;
        border: solid 1px black;
    }
    #Select, #SelectIntervalos{
        width: 100%;
        height: 5vh;
        padding:0;
        margin:0;
        border: solid 1px black;
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
        
        & thead{
            background: #f3f4f6;
        }
        & th{
            padding: 8px;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            color:rgb(0, 0, 0);
        }
        & td{
            padding: 8px;
            font-size: 18;
            text-align: center;
            color:rgb(0, 0, 0);
            border-bottom: solid 1px black;
        }
    }
`

export const ImagemDownload = styled.img`
    width: 30px;
    margin: auto;
    cursor: pointer;
`
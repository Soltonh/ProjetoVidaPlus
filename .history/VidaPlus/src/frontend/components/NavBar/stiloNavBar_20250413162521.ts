import styled from "styled-Components";

export const Img = styled.img`
    width: 45%;
    margin: auto;
`

export const Div = styled.div`
    width: 100vw;
    height: 7vh;
    padding: 8px;
    display:grid;
    grid-template-columns: 4% 90%;
    background-color: rgb(0, 168, 28);
    position: fixed;
    top: 0;
    z-index:999;
`
export const Div2 = styled.div`
    width: 12vw;
    height: 100vh;
    padding: 8px;
    background-color: rgb(0, 168, 28);
    position: fixed;
    top: 0;
    z-index: 0;
    margin-top: 65px;
`

export const H1 = styled.h1`
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;  
    font-size: 30px;
    
`
export const UlPrincipal = styled.ul`
    margin: auto;
    width: 70%;
`
export const LiPrincipal = styled.li`
    font-size: 25px;
    font-weight: bold;
`

export const LiSecund = styled.li`
    font-size: 18px;
    font-weight: bold;
    margin-left: 5%;
    padding: 5px;
    list-style-type: none;
    padding: 0; /* Para remover recuo extra se necessário */
    margin: 0;

    &:hover{
        background-color: white;
        color: rgb(0, 168, 28);
        border-radius:10px;
        width: 12vw;
    }
`
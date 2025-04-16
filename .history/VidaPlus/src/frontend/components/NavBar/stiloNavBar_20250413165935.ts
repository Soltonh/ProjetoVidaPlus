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
    box-shadow: white;
`
export const Div2 = styled.div<{ menuAberto: boolean }>`
    width: 12vw;
    height: 100vh;
    padding: 8px;
    background-color: rgb(0, 168, 28);
    position: fixed;
    top: 0;
    z-index: 0;
    margin-top: 65px;
    transition: transform 0.3s ease;
    transform: ${({ menuAberto }) => 
    menuAberto ? "translateX(0)" : "translateX(-100%)"};
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
    width: 100%;
    list-style-type: none;
    margin-left: 2%;    
`
export const LiPrincipal = styled.li`
    font-size: 25px;
    font-weight: bold;
    padding: 15px;
    
`

export const LiSecund = styled.li`
    font-size: 18px;
    font-weight: bold;
    margin-left: 15%;
    padding: 5px;
    list-style-type: none;


    &:hover{
        background-color: white;
        color: rgb(0, 168, 28);
        width: 9.1vw;
    }
`
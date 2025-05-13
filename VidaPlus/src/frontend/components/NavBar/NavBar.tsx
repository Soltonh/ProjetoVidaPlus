import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../../assets/menu.svg";



export const Img = styled.img`
    width: 50%;
    margin: auto;
    cursor: pointer;
    
    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: auto;
    }
`

export const Div = styled.div`
    width: 100vw;
    height: 7vh;
    display:grid;
    grid-template-columns: 4% 90%;
    background-color: #219D9C;
    position: fixed;
    top: 0;
    z-index:999;
    box-shadow: white;
    gap: 20px;

    @media (max-width: 768px) {
        height: 10vh;
    }

    @media (max-width: 480px) {
    padding: 0.5rem;
    }
`
export const Div2 = styled.div<{ menuAberto: boolean }>`
    width: 12vw;
    height: 100vh;
    background-color:#219D9C ;
    position: fixed;
    top: 0;
    z-index: 9999;
    margin-top: 3.4%;
    transition: transform 1s ease;
    transform: ${({ menuAberto }) => 
    menuAberto ? "translateX(0)" : "translateX(-100%)"};

    @media (max-width: 1200px) {
        width: 17vw;
        margin-top: 4.6%;
    }

    @media (max-width: 1024px) {
        width: 17vw;
        margin-top: 5.4%;
    }
    
    @media (max-width: 768px) {
        width: 25vw;
        margin-top: 10.3%;
    }

    @media (max-width: 480px) {
        width: 40vw;
        margin-top: 16.4%;
    }
`

export const H1 = styled.h1`
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;  
    font-size: 150%;
    
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
    list-style-type: none;
    cursor: pointer;
    padding-left: 6px;
    border-radius: 10px 0px 10px 0px;


    &:hover{
        background-color: white;
        color: #219D9C;
        width: 9.1vw;
    }
`

const NavBar: React.FC = () => {


    
    const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

    return(
        <>
            <Div>
                <Img src={Menu} onClick={toggleMenu}></Img>
                <H1>Sistema de Gestão Hospitalar e de Serviços de Saúde</H1>
                <Div2  menuAberto={menuAberto}>
                    <UlPrincipal>
                        <LiPrincipal>Consultas
                            <ul>
                                <LiSecund onClick={() => window.open('/consultas', '_self')}>Marcar</LiSecund>
                                <LiSecund  onClick={() => window.open('/ConsultasMarcadas', '_self')}>Histórico</LiSecund>
                            </ul>
                        </LiPrincipal>
                        <LiPrincipal>Exames
                            <ul>
                                <LiSecund>Marcar</LiSecund>
                                <LiSecund>Histórico</LiSecund>
                            </ul>
                        </LiPrincipal>
                        <LiPrincipal>Prontuários
                            <ul>
                                <LiSecund>Histórico</LiSecund>
                            </ul>
                        </LiPrincipal>
                        <LiPrincipal>Telemedicina
                            <ul>
                                <LiSecund>Marcar</LiSecund>
                                <LiSecund>Histórico</LiSecund>
                            </ul>
                        </LiPrincipal>
                    </UlPrincipal>   
                </Div2>
            </Div>
        </>
    )
}

export default NavBar;
import React, { useState } from "react";
import Menu from "../../assets/menu.svg"
import "./stiloNavBar"
import { Div, Div2, H1, Img, LiPrincipal, LiSecund, UlPrincipal } from "./stiloNavBar";

const NavBar: React.FC = () => {
    
    
function App() {
    const [menuAberto, setMenuAberto] = useStateate(false);
  
    const toggleMenu = () => {
      setMenuAberto(!menuAberto);
    };
  

    return(
        <>
            <Div>
                <Img src={Menu}></Img>
                <H1>Sistema VidaPlus</H1>
                <Div2>
                    <UlPrincipal>
                        <LiPrincipal>Consultas
                            <ul>
                                <LiSecund>Marcar</LiSecund>
                                <LiSecund>Marcadas</LiSecund>
                                <LiSecund>Histórico</LiSecund>
                            </ul>
                        </LiPrincipal>
                        <LiPrincipal>Exames
                            <ul>
                                <LiSecund>Marcar</LiSecund>
                                <LiSecund>Marcados</LiSecund>
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
                                <LiSecund>Marcadas</LiSecund>
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
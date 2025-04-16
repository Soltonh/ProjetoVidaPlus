import React from "react";
import Menu from "../../assets/menu.svg"
import "./stiloNavBar"
import { Div, Div2, H1, Img, LiPrincipal, LiSecund, UlPrincipal } from "./stiloNavBar";

const NavBar: React.FC = () => {
    
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
                                <lLiSecund>Marcadas</LiSecund>
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
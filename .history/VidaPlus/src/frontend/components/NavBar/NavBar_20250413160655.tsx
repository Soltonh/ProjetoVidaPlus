import React from "react";
import Menu from "../../assets/menu.svg"
import "./stiloNavBar"
import { Div, Div2, H1, Img } from "./stiloNavBar";

const NavBar: React.FC = () => {
    
    return(
        <>
            <Div>
                <Img src={Menu}></Img>
                <H1>Sistema VidaPlus</H1>
                <Div2>
                    <ul>
                        <li>Consultas
                            <ul>
                            <li>Marcar</li>
                            <li>Marcadas</li>
                            <li>Histórico</li>
                            </ul>
                        </li>
                    </ul>   
                </Div2>
            </Div>
        </>
    )
}

export default NavBar;
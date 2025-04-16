import React from "react";
import Menu from "../../assets/menu.svg"

const NavBar: React.FC = () => {
    
    return(
        <>
            <div>
                <img src={Menu}></img>
                <ul>
                    <li>Consultas
                        <ul>
                        <li>Marcar</li>
                        <li></li>
                        </ul>
                    </li>
                </ul>
                <h1>VidaPlus</h1>
            </div>
        </>
    )
}

export default NavBar;
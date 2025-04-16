import React from "react";
import Menu from "../../assets/menu.svg"

const NavBar: React.FC = () => {
    
    return(
        <>
            <div>
                <menu src={Menu}></menu>
                <h1>VidaPlus</h1>
            </div>
        </>
    )
}

export default NavBar;
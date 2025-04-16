import React from "react";
import Menu from "../../assets/menu.svg"

const NavBar: React.FC = () => {
    
    return(
        <>
            <div>
                <img src={Menu}></img>
                <h1>VidaPlus</h1>
            </div>
        </>
    )
}

export default NavBar;
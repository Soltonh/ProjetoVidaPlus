import React from "react";
import Menu from "../../assets/menu.svg"

const NavBar: React.FC = () => {
    
    return(
        <>
            <div>
                <img src={Menu}></img>
                <ul>
                    <li>Coffee</li>
                    <li>Tea
                        <ul>
                        <li>Black tea</li>
                        <li>Green tea
                            <ul>
                            <li>China</li>
                            <li>Africa</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li>Milk</li>
                    </ul>
                <h1>VidaPlus</h1>
            </div>
        </>
    )
}

export default NavBar;
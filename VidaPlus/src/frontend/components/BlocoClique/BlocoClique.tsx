import React from "react";
import { Div, IMG, P } from "./stiloBlocoClique";

interface BlocoProps{
    src: string;
    texto: string;
    to:   string;
}

const BlocoClique: React.FC<BlocoProps> = ({src, texto, to}) =>{
    return(
        <>  
            <Div to={to}>
                <IMG src={src}/>
                <P>{texto}</P>
            </Div>
        </>
    )
}

export default BlocoClique;
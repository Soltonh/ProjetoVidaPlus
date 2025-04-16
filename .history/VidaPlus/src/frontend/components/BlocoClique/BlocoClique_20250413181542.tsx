import React from "react";
import { Div, P } from "./stiloBlocoClique";

interface BlocoProps{
    src: string;
    texto: string;
}

const BlocoClique: React.FC<BlocoProps> = ({src, texto}) =>{
    return(
        <>  <Div>
                <img src={src}/>
                <P>{texto}</P>
            </Div>
        </>
    )
}

export default BlocoClique;
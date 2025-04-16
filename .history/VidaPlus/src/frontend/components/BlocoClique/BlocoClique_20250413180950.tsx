import React from "react";
import { Div } from "./stiloBlocoClique";

interface BlocoProps{
    src: string;
    texto: string;
}

const BlocoClique: React.FC<BlocoProps> = ({src, texto}) =>{
    return(
        <>  <Div>
                <img src={src}/>
                <p>{texto}</p>
            </Div>
        </>
    )
}

export default BlocoClique;
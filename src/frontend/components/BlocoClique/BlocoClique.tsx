import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled(Link)`
    border: solid 4px #219D9C;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    `;

export const P = styled.p`
    color: #219D9C;
    text-align:center;
    font-weight: bold;
    font-size: 80%;
`

export const IMG = styled.img`
    width: 100%;
    padding: 10px;
    margin: auto;
`


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
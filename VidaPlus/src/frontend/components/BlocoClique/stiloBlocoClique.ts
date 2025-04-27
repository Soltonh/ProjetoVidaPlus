import styled from "styled-Components";
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
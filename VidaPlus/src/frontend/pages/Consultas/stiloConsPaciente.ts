import styled from "styled-Components";


export const Wrapper = styled.main`
    width: 1900px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;           /* evita grudar no topo se faltar altura */
    overflow: hidden;
`

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    width: 100%;           /* ocupa o espaço disponível até o max‑width   */
    max-width: 700px;      /* ajuste conforme o design desejado          */

    padding: 30px;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 8px;      /* só visual */
    
`
export const H1 = styled.h1`
    color: #219D9C;
    text-align: left;
    padding-top: 15px;
    font-size: 30px;
    grid-area: 1/ span 2;
`
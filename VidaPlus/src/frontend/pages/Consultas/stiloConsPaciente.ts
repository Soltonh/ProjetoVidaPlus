import styled from "styled-Components";
import Inputs from "../../components/input/input";

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    width: 100%;           /* ocupa o espaço disponível até o max‑width   */
    max-width: 700px;      /* ajuste conforme o design desejado          */

    padding: 30px;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 8px;      /* só visual */
    margin-top: 2%;
  
`
export const H1 = styled.h1`
    color: #219D9C;
    text-align: left;
    padding-top: 15px;
    font-size: 30px;
`
export const LabelCons = styled.label`
    font-size: 20px;
    color: black;
    font-weight: bold;
    padding: 5px;
`
export const InputRadio = styled(Inputs)`
  width: 20px;
  height: 20px;
  margin: auto;
  
  &:focus {
    outline: none;
    border: 3px solid #219D9C; /* muda a borda ao focar */
  }
`;

export const DivMeio = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);

`
export const DivRadio = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);

`
export const H3 = styled.h3`
    color: black;
    font-size: 18px;    
    padding: 10px;
    grid-area: 1 / span 2
`

export const InputMotivo = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  color: black;
  resize: none;

  &:focus {
    outline: none;
    border: 3px solid #219D9C; /* muda a borda ao focar */
  }
`;
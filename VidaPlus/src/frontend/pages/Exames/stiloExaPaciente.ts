import styled from "styled-components";

const calendarSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%236B7280">
    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 
             2v10a2 2 0 002 2h12a2 2 0 
             002-2V6a2 2 0 00-2-2h-1V3a1 
             1 0 10-2 0v1H7V3a1 1 0 
             00-1-1zM4 8h12v8H4V8z"/>
  </svg>
`);
const ClockSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 
  1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 
  25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24
   10.7-24 24z"/></svg>
`);

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
  
  & h3{
    color: black;
  }

  #ArquivoConsulta{
    border: none;
    color: black;
    font-size: 16px;
    &::-webkit-file-upload-button{
      color: white;
      background-color: #197c7c;
      padding: 5px 10px 5px 10px;
      border-radius: 6px;
      font-size: 16px;
  }
  }
`
export const H1 = styled.h1`
    color: #219D9C;
    text-align: left;
    padding-top: 15px;
    font-size: 30px;
`

export const DivMeio = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);

  #SelectDataExames{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand { display: none; }

    width: 100%;
    padding: 10px;
    font-size: 18px;
    color: black;
    background-color: #ffffff;

    /* só aqui adicionamos o ícone de calendário */
    background-image: url("data:image/svg+xml,${calendarSvg}");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em 1em;

    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }

  #SelectHoraExames{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand { display: none; }

    width: 100%;
    padding: 10px;
    font-size: 18px;
    color: black;
    background-color: #ffffff;

    /* só aqui adicionamos o ícone de calendário */
    background-image: url("data:image/svg+xml,${ClockSvg}");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em 1em;

    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
  }
`

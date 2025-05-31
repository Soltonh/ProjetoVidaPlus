import React from "react";
import "./ExaMarcStilo"
import Layout from "../../../components/Layout/layout";
import Select from "../../../components/Select/Select";
import TabelaGlobal from "../../../components/Table/Table";
import { DivGeral, DivTabela, ImagemDownload, PrimeDiv } from "./ExaMarcStilo";
import Download from "../../../assets/IconeDownload.svg"

const TelaExamesMarcados : React.FC = () => {
    const Estado = [
        "Marcado",
        "Realizado",
        "Cancelado"
    ];

    const colunas = [
        "Data",
        "Horário",
        "Exame",
        "Unidade",
        "Status",
        "Resultado",
    ];
    const Intervalos = [
        "Último mês",
        "Últimos 3 meses",
        "Últimos 6 meses",
        "Últimos 12 meses",
        "Todos",
    ];

    const dados = [
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Exame: "Hemograma",
          Unidade: "Lavoisier Taboão da Serra",
          Status: "Realizado",
          Resultado:<ImagemDownload src={Download}/>,
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Exame: "Ultrassom",
          Unidade: "Cartão de todos Embu das artes",
          Status: "Cancelado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Exame: "Hemograma",
          Unidade: "Lavoisier Taboão da Serra",
          Status: "Realizado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Exame: "Ultrassom",
          Unidade: "Cartão de todos Embu das artes",
          Status: "Cancelado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Exame: "Hemograma",
          Unidade: "Lavoisier Taboão da Serra",
          Status: "Realizado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Exame: "Ultrassom",
          Unidade: "Cartão de todos Embu das artes",
          Status: "Cancelado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Exame: "Hemograma",
          Unidade: "Lavoisier Taboão da Serra",
          Status: "Realizado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Exame: "Ultrassom",
          Unidade: "Cartão de todos Embu das artes",
          Status: "Cancelado",
          Resultado:<ImagemDownload src={Download}/>
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Exame: "Hemograma",
          Unidade: "Lavoisier Taboão da Serra",
          Status: "Realizado",
          Resultado:<ImagemDownload src={Download}/>
          
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Exame: "Ultrassom",
          Unidade: "Cartão de todos Embu das artes",
          Status: "Cancelado",
          Resultado:<ImagemDownload src={Download}/>
        },
        // …
      ];
      

    return(
        <>
        <Layout>
            <DivGeral>
                <h1>Histórico de Exames</h1>
                <PrimeDiv>
                     <Select opcoes={Intervalos} id="SelectIntervalos"></Select>
                    <Select opcoes={Estado} id="Select"></Select>
                </PrimeDiv>
            <DivTabela>
                <TabelaGlobal colunas={colunas} dados={dados} id="TableMarcadas"></TabelaGlobal>
            </DivTabela>
            </DivGeral>
        </Layout>
        </>
    )
}

export default TelaExamesMarcados
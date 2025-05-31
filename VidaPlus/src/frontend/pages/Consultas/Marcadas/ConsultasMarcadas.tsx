import React from "react";
import "./ConMarcStilo"
import Layout from "../../../components/Layout/layout";
import Select from "../../../components/Select/Select";
import TabelaGlobal from "../../../components/Table/Table";
import { DivGeral, DivTabela, PrimeDiv } from "./ConMarcStilo";
const TelaConsultasMarcadas : React.FC = () => {

    const Estado = [
        "Marcada",
        "Concluída",
        "Cancelada"
    ];

    const colunas = [
        "Data",
        "Horário",
        "Especialidade",
        "Médico",
        "Tipo",
        "Status",
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
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Marcada",
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Marcada",
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Marcada",
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Marcada",
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
        {
          Data: "01/05/2025",
          Horário: "14:00",
          Especialidade: "Cardiologia",
          Médico: "Dr. Fulano",
          Tipo: "Consulta",
          Status: "Marcada",
        },
        {
          Data: "02/05/2025",
          Horário: "15:30",
          Especialidade: "Dermatologia",
          Médico: "Dra. Beltrana",
          Tipo: "Retorno",
          Status: "Concluída",
        },
        // …
      ];
      

    return(
        <>
        <Layout>
            <DivGeral>
                <h1>Consultas marcadas</h1>
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

export default TelaConsultasMarcadas
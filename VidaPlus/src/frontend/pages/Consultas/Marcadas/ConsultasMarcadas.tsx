import React from "react";
import "./ConMarcStilo"
import Layout from "../../../components/Layout/layout";
import Select from "../../../components/Select/Select";
import  Inputs  from "../../../components/input/input";
import TabelaGlobal from "../../../components/Table/Table";
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

    const dados = [
        "Data",
        "Horário",
        "Especialidade",
        "Médico",
        "Tipo",
        "Status",
    ];

    return(
        <>
        <Layout>
            <div>
                <h1 style={{color: "black"}}>Consultas marcadas</h1>
                <Inputs type="date"></Inputs> 
                <Select texto="Periodo" opcoes={Estado}></Select>
            </div>
            <div>
                <TabelaGlobal colunas={colunas} dados={dados}></TabelaGlobal>
            </div>
        </Layout>
        </>
    )
}

export default TelaConsultasMarcadas
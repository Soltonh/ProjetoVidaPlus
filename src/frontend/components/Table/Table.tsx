import React from "react"
import styled from "styled-components"

export const Tabela = styled.table`
        width: auto;
    `

type RowData = Record<string, string | number | boolean |  React.ReactNode>;

interface TableProps{
    colunas: string[];
    dados: RowData[];
    id?:string;
}

const TabelaGlobal: React.FC<TableProps> = ({colunas, dados, id}) => {

    
    return(

        <Tabela id={id}>
            <thead>
                <tr>
                    {colunas.map((coluna) =>(
                        <th key={coluna}>{coluna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados.map((linha, index) => (
                    <tr key={index}>
                        {colunas.map((coluna) =>(
                            <td key={coluna}>{linha[coluna]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Tabela>

    )
}

export default TabelaGlobal
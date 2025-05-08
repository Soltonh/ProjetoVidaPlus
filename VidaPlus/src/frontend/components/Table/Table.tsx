import React from "react"
import styled from "styled-components"

export const Tabela = styled.table`
        width: auto;
        & th{
            border: 1px solid black;
        }
        
        & td{
            border: 1px solid black;
        }
    `

    
interface TableProps{
    colunas: string[];
    dados: Record<string, string>[];
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
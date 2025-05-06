import React from "react"
import styled from "styled-components"

const TabelaGlobal = ({colunas, dados}) => {

    const Tabela = styled.table`
        width: 100vw;

        & th{
            border: 1px solid black;
        }
        
        & td{
            border: 1px solid black;
        }
    `
    return(

        <Tabela>
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
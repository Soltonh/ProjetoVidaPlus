import styled from "styled-Components";

export const Titulo = styled.h1`
    color:rgb(11, 137, 201);
    font-size: 40px;
    font-family: garamond, 'Times New Roman', Times, serif;

`

export const SecaoFundo = styled.section`
    /* Imagem de fundo */
  background-image: url('../assets/fundo.jpg');
  background-repeat: no-repeat;
  background-size: cover;       /* Faz a imagem ocupar todo o espaço */
  background-position: center;  /* Centraliza a imagem */

  /* Preenche a tela toda */
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  /* Centraliza o conteúdo dentro da seção */
  display: flex;
  align-items: center;
  justify-content: center;
`
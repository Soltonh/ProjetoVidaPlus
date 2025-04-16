import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Aqui você pode colocar também estilos para body, html, etc. */
  body, html {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;
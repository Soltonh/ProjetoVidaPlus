import styled from "styled-Components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

export const MainContent = styled.main`
  flex: 1; /* ocupa todo o espaço disponível */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: white;
  width: 100%;
  
  @media (max-width: 1200px) {
    margin-top: 10%;
  }

  @media (max-width: 768px) {
    margin-top: 20%;
  }

  @media (max-width: 480px) {
    margin-top: 30%;
  }
`;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUser from './frontend/pages/Login/login'
import "./stilo"
import { GlobalStyle } from './stilo'
import TelaIncialPaciente from './frontend/pages/TelaInicialPaciente/TelaInicialPaciente'
import TelaIncialAdm from './frontend/pages/TelaInicialAdm/TelaInicialAdm'
import TelaIncialProfissional from './frontend/pages/TelaInicialProfissional/TelaInicialProfissional'
import TelaConsultaPaciente from './frontend/pages/Consultas/consultasPaciente'
import TelaConsultasMarcadas from "./frontend/pages/Consultas/Marcadas/ConsultasMarcadas"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroUser/>} />
          <Route path="/paciente" element={<TelaIncialPaciente/>} />
          <Route path="/profissional" element={<TelaIncialProfissional/>} />
          <Route path="/Adm" element={<TelaIncialAdm/>} />
          <Route path="/consultas" element={<TelaConsultaPaciente/>} />
          <Route path="/ConsultasMarcadas" element={<TelaConsultasMarcadas/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
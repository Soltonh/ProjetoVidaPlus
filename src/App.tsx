import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUser from './frontend/pages/Login/login'
import "./stilo"
import { GlobalStyle } from './stilo'
import TelaIncialPaciente from './frontend/pages/TelaInicialPaciente/TelaInicialPaciente'
import TelaIncialAdm from './frontend/pages/TelaInicialAdm/TelaInicialAdm'
import TelaIncialProfissional from './frontend/pages/TelaInicialProfissional/TelaInicialProfissional'
import TelaConsultaPaciente from './frontend/pages/Consultas/ConsultasPaciente'
import TelaConsultasMarcadas from "./frontend/pages/Consultas/Marcadas/ConsultasMarcadas"
import TelaExamesPaciente from './frontend/pages/Exames/ExamesPaciente'
import TelaExamesMarcados from './frontend/pages/Exames/Marcados/ExamesMarcados'

function App() {
  return (
   <>
      <GlobalStyle />
      <BrowserRouter basename={"/ProjetoVidaPlus/"}>
        <Routes>
          <Route index element={<CadastroUser />} /> {/* <- em vez de path="/" */}
          <Route path="/paciente" element={<TelaIncialPaciente />} />
          <Route path="/profissional" element={<TelaIncialProfissional />} />
          <Route path="/Adm" element={<TelaIncialAdm />} />
          <Route path="/consultas" element={<TelaConsultaPaciente />} />
          <Route path="/ConsultasMarcadas" element={<TelaConsultasMarcadas />} />
          <Route path="/Exames" element={<TelaExamesPaciente />} />
          <Route path="/ExamesMarcados" element={<TelaExamesMarcados />} />
          <Route path="*" element={<div>Não encontrado</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
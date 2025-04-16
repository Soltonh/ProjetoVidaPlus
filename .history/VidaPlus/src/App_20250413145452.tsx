import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CadastroUser from './frontend/pages/Login/login'
import "./stilo"
import { GlobalStyle } from './stilo'
import TelaIncial from './frontend/pages/TelaInicial/TelaInicial'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroUser/>} />
          <Route path="/Inicio" element={<TelaIncial/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CadastroUser from './frontend/pages/Login/login'
import "./stilo"
import { GlobalStyle } from './stilo'

function App() {

  return (
    <>
    <GlobalStyle> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CadastroUser/>}/>
      </Routes>
    </BrowserRouter>
    </GlobalStyle>
  </>
     
  )
}

export default App

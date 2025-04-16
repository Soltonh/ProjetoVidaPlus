import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CadastroUser from './frontend/pages/Login/login'

function App() {

  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroUser/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CadastroUser from './pages/CadastroUser/CadastroUser'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroUser/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

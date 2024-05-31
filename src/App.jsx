import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculadora from './pages/Calculadora';
import PruebaComp from './pages/prueba';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/nutripro" element={<HomePage></HomePage>}></Route>
        <Route  path="/nutripro/calculadora" element={<Calculadora></Calculadora>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
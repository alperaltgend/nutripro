import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculadora from './pages/Calculadora';
import PruebaComp from './pages/prueba';
import CalculadoraPage from './pages/CalculadoraPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/nutripro/" element={<CalculadoraPage></CalculadoraPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

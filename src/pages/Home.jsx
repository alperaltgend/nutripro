import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/logoapp.png';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <div className='flex flex-col items-center mx-auto mt-14'>
                <img className="text-xl font-bold h-44 w-44 mt-12 mb-1" src={Logo}></img>
                <h2 className='text-justify text-sm w-auto mx-14 mb-2'>
                    ¡Bienvenido/a a nuestra Calculadora Antropométrica para Estudiantes de Ingeniería en Alimentos!
                    Estamos encantados de presentarte nuestra innovadora herramienta diseñada específicamente para
                    estudiantes como tú. Nuestra aplicación web ha sido creada con el objetivo de ofrecer una solución
                    moderna y eficiente, reemplazando a softwares similares como Anthro - OMS y brindando una experiencia
                    mejorada en el cálculo y análisis de datos antropométricos.
                </h2>
                <Link to="/calculadora">
                    <button className='flex items-center mt-2 rounded-md bg-blue-500 shadow-lg bg-blue-500'>
                        <h1 className='ml-3 mr-1 my-1'>Calculadora</h1>
                        <FaChevronRight className='mr-2' />
                    </button>
                </Link>
                
            </div>
        </div>
    )
}

export default HomePage;
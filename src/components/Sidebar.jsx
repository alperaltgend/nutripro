import React, { useState } from 'react';
import { FaCalculator } from "react-icons/fa";
import { RiSurveyFill } from "react-icons/ri";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Logo from '../assets/logoapp.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const Menus = [
        {title: "Calculador Antropométrico",url: "/nutripro/calculadora", src: <FaCalculator className='h-8 w-8 mr-2 mx-4 text-black'></FaCalculator>},
        {title: "Examen Individual (Beta)",url: "/examen" ,src: <FaHome className='h-8 w-8 mr-2 mx-4 text-black'></FaHome>},
        {title: "Encuesta Nutricional (Beta)",url: "/encuesta", src: <RiSurveyFill className='h-8 w-8 mr-2 mx-4 text-black'></RiSurveyFill>},
    ]

    return (
        <aside className='flex h-screen'>
            <div className={`duration-500 shadow ${isOpen ? 'w-72' : 'w-[101px]'}`}>
                <div className="flex items-center justify-between mx-6 my-5 mr-3">
                    <Link to="/nutripro">
                        <img className="text-xl font-bold ml-1 h-10 w-10" src={Logo}></img>
                    </Link>
                    
                    <button onClick={toggleSidebar}>
                        {isOpen ? (
                            <FaChevronCircleLeft className="h-6 w-6 text-black" />
                        ) : (
                            <FaChevronCircleRight className="h-6 w-6 text-black" />
                        )}
                    </button>
                </div>
                <div>
                    <ul className='pt-2 mx-2'>
                        {Menus.map((menu,index)=>(
                            <li key={index}>
                                <Link to={menu.url} className='flex items-center gax-x-4 cursor-pointer p-2 rounded hover:shadow hover:bg-blue-500'> 
                                    <span>{menu.src}</span>
                                    <h2 style={{transitionDelay: `${ index+3}00ms`,}} className={`whitespace-pre duration-600 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu.title}</h2>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        </aside>
    )
}

export default Sidebar;
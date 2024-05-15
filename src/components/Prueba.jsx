import React, { useState } from 'react';
import { FaCalculator } from "react-icons/fa";
import { RiSurveyFill } from "react-icons/ri";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Logo from '../assets/img1.png';




const Prueba = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const Menus = [
        {title: "Calculador Antropométrico", src: <FaCalculator className='h-8 w-8 mr-2 mx-4'></FaCalculator>},
        {title: "Encuesta Nutricional (Beta)", src: <RiSurveyFill className='h-8 w-8 mr-2 mx-4'></RiSurveyFill>},
    ]

    return (
        <aside className='flex h-screen bg-dark-purple'>
            <div className={`sm:${isOpen ? 'w-72' : 'w-24'} ${isOpen ? 'w-screen bg-dark-purple' : 'w-24'} duration-500 shadow-xl`}>
                <div className="flex items-center justify-between mx-6 my-5 mr-1">
                    <img className="text-xl font-bold ml-1 h-8 w-8" src={Logo}></img>
                    <button onClick={toggleSidebar}>
                        {isOpen ? (
                            <FaChevronCircleLeft className="h-6 w-6 text-gray-600" />
                        ) : (
                            <FaChevronCircleRight className="h-6 w-6 text-gray-600" />
                        )}
                    </button>
                </div>
                <div>
                    <ul className='pt-6 mx-1'>
                        {Menus.map((menu,index)=>(
                            <li key={index} className='text-gray-300 text-sm flex items-center gax-x-4 cursor-pointer p-2 rounded hover:shadow hover:bg-blue-500'>
                                <span>{menu.src}</span>
                                <h2 style={{transitionDelay: `${ index+3}00ms`,}} className={`whitespace-pre duration-600 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu.title}</h2>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
        </aside>
    )

}


export default Prueba;
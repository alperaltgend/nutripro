import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Sidebar from '../components/Sidebar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 25,
        label: '25',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 75,
        label: '75',
    },
    {
        value: 100,
        label: '100',
    },
];

function valuetext(value) {
    return `${value}`;
}

export default function Calculadora() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    const [valuetask, setValuetask] = React.useState(dayjs('2022-04-17'));

    const [valueradio1, setValueradio1] = React.useState(" ");
    const handleChange1 = (event) => {
        setValueradio1(event.target.value);
    };

    const [valueradio2, setValueradio2] = React.useState(" ");
    const handleChange2 = (event) => {
        setValueradio2(event.target.value);
    };

    const [valueradio3, setValueradio3] = React.useState(" ");
    const handleChange3 = (event) => {
        setValueradio3(event.target.value);
    };





    return (

        <div className='flex h-screen'>
            <Sidebar></Sidebar>
            <div class="grid grid-cols-3 w-4/5 h-[37rem] ">

                <div className='flex mt-5 ml-5'>
                    <h1 className='mx-2 mt-4'>Fecha de Visita</h1>
                    <div className='w-40'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                view={["Año", "Mes", "Día"]}
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className='flex flex-col mt-2 ml-4'>
                    <FormControl class="flex items-center">
                        <FormLabel id="demo-controlled-radio-buttons-group" >Género</FormLabel>
                        <RadioGroup

                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={valueradio1}
                            onChange={handleChange1}
                            row
                        >
                            <FormControlLabel value="female" class="ml-3 mr-8" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl class="flex items-center">
                        <FormLabel id="demo-controlled-radio-buttons-group" >Medido</FormLabel>
                        <RadioGroup

                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={valueradio2}
                            onChange={handleChange2}
                            row
                        >
                            <FormControlLabel value="female" class="mx-2 mr-0.5" control={<Radio />} label="Acostado" />
                            <FormControlLabel value="male" class="ml-1" control={<Radio />} label="De Pie" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl class="flex items-center">
                        <FormLabel id="demo-controlled-radio-buttons-group" >Edema</FormLabel>
                        <RadioGroup

                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={valueradio3}
                            onChange={handleChange3}
                            row
                            className='ml-1'
                        >
                            <FormControlLabel value="female" class="ml-2.5 mr-16" control={<Radio />} label="No" />
                            <FormControlLabel value="male" control={<Radio />} label="Si" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='flex flex-col'>
                    <div className='flex items-start'>
                        <h1 className='mx-2 mt-4'>Peso(Kg)</h1>
                        <NumberInput maxW={90} marginTop={2} marginLeft={85} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                            <NumberInputField border={10} />
                            <NumberInputStepper>
                                <NumberIncrementStepper paddingTop={13} height={10} />
                                <NumberDecrementStepper height={10} />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className='flex items-start'>
                        <h1 className='mx-2 mt-4'>Longitud/Talla (cm)</h1>
                        <NumberInput maxW={90} marginTop={2} marginLeft={10} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                            <NumberInputField border={10} />
                            <NumberInputStepper>
                                <NumberIncrementStepper paddingTop={13} height={10} />
                                <NumberDecrementStepper height={10} />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className='flex items-start'>
                        <h1 className='mx-2 mt-4'>IMC</h1>
                        <h1 className='mt-4 ml-32'>01</h1>
                    </div>
                </div>

                <div className='flex mt-5 ml-5'>
                    <h1 className='mx-2 mt-4'>Fecha de Naci.</h1>
                    <div className='w-40'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                view={["Año", "Mes", "Día"]}
                                value={valuetask}
                                onChange={(newValuetask) => setValuetask(newValuetask)}
                            />
                        </LocalizationProvider>
                        <FormGroup className='mt-4'>
                            <FormControlLabel value="fecha" control={<Checkbox />} label="Fecha aprox." />
                            <FormControlLabel value="end" control={<Checkbox />} label="Desconocida" />
                        </FormGroup>
                        <h1>Edad: 10</h1>
                    </div>
                </div>

                <div className='flex flex-col ml-3'>
                    <div className='flex items-start'>
                        <h1 className='mx-1 mt-4'>Perimetro cefálico (cm)</h1>
                        <NumberInput maxW={90} marginTop={2} marginLeft={40} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                            <NumberInputField border={10} />
                            <NumberInputStepper>
                                <NumberIncrementStepper paddingTop={13} height={10} />
                                <NumberDecrementStepper height={10} />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className='flex items-start'>
                        <h1 className='mx-1 mt-4'>PPMB (cm)</h1>
                        <NumberInput maxW={90} marginTop={2} marginLeft={125} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                            <NumberInputField border={10} />
                            <NumberInputStepper>
                                <NumberIncrementStepper paddingTop={13} height={10} />
                                <NumberDecrementStepper height={10} />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className='flex items-start'>
                        <h1 className='mx-1 mt-4'>Pliegue tricipital (mm)</h1>
                        <NumberInput maxW={90} marginTop={2} marginLeft={47} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                            <NumberInputField border={10} />
                            <NumberInputStepper>
                                <NumberIncrementStepper paddingTop={13} height={10} />
                                <NumberDecrementStepper height={10} />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className='flex items-start'>
                        <h1 className='mx-1 mt-4'>Pliegue subescapular (mm)</h1>
                        <NumberInput maxW={90} marginTop={2} marginLeft={12} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                            <NumberInputField border={10} />
                            <NumberInputStepper>
                                <NumberIncrementStepper paddingTop={13} height={10} />
                                <NumberDecrementStepper height={10} />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                </div>

                <div className='flex flex-col col-[1/2] ml-3'>
                    
                        <div className='flex justify-around'>
                            <h1 className='text-sm w-20'>Peso p. talla</h1>
                            <Box sx={{ width: 160 }}>
                                <Slider
                                    aria-label="Custom marks"
                                    defaultValue={20}
                                    getAriaValueText={valuetext}
                                    step={25}
                                    valueLabelDisplay="auto"
                                    
                                />
                            </Box>
                        </div>
                        <div className='flex justify-around'>
                            <h1 className='text-sm w-20'>Peso p. edad</h1>
                            <Box sx={{ width: 160 }}>
                                <Slider
                                    aria-label="Custom marks"
                                    defaultValue={20}
                                    getAriaValueText={valuetext}
                                    step={25}
                                    valueLabelDisplay="auto"
                                    
                                />
                            </Box>
                        </div>
                        <div className='flex justify-around'>
                            <h1 className='text-sm w-20'>Talla para la edad</h1>
                            <Box sx={{ width: 160 }}>
                                <Slider
                                    aria-label="Custom marks"
                                    defaultValue={20}
                                    getAriaValueText={valuetext}
                                    step={25}
                                    valueLabelDisplay="auto"
                                    
                                />
                            </Box>
                        </div>
                        <div className='flex justify-around'>
                            <h1 className='text-sm w-20'>IMC p. edad</h1>
                            <Box sx={{ width: 160 }}>
                                <Slider
                                    aria-label="Custom marks"
                                    defaultValue={20}
                                    getAriaValueText={valuetext}
                                    step={25}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                />
                            </Box>
                        </div>
                    
                </div>         
                <div className='flex flex-col'>
                    <div className='flex justify-around'>
                        <h1 className='text-sm w-20'>PC p. edad</h1>
                        <Box sx={{ width: 160 }}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={25}
                                valueLabelDisplay="auto"
                                
                            />
                        </Box>
                    </div>
                    <div className='flex justify-around'>
                        <h1 className='text-sm w-20'>PPMB p. edad</h1>
                        <Box sx={{ width: 160 }}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={25}
                                valueLabelDisplay="auto"
                                
                            />
                        </Box>
                    </div>
                    <div className='flex justify-around'>
                        <h1 className='text-sm w-20'>PTr p. edad</h1>
                        <Box sx={{ width: 160 }}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={25}
                                valueLabelDisplay="auto"
                                
                            />
                        </Box>
                    </div>
                    <div className='flex justify-around'>
                        <h1 className='text-sm w-20'>PSs p. edad</h1>
                        <Box sx={{ width: 160 }}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={25}
                                valueLabelDisplay="auto"
                                marks={marks}
                            />
                        </Box>
                    </div>
                </div>

            </div>
        </div>
    );
}


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

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

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

        <div className='flex'>
            <Sidebar></Sidebar>
            <div class="grid grid-cols-3 grid-rows-2 gap-1 w-screen h-96">
                <div className='col-span-3 flex mt-10 mx-8 h-32'>
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
                    <div className='ml-10 mt-2 flex flex-col'>
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
                    <div className='mx-10 flex flex-col'>
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

                </div>
                <div className='col-span-3 flex mx-8 h-32'>
                    <h1 className='mx-2 mt-4'>Fecha de Naci.</h1>
                    <div className='w-40'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                view={["Año", "Mes", "Día"]}
                                value={valuetask}
                                onChange={(newValuetask) => setValuetask(newValuetask)}
                            />
                        </LocalizationProvider>
                        <FormGroup>
                            <FormControlLabel value="fecha" control={<Checkbox/>} label="Fecha aprox." />
                            <FormControlLabel value="end" control={<Checkbox/>} label="Desconocida" />
                        </FormGroup>
                        <h1>Edad: 10</h1>
                    </div>
                    <div className='mx-10 flex flex-col'>
                        <div className='flex items-start'>
                            <h1 className='mx-2 mt-4'>Perimetro cefálico (cm)</h1>
                            <NumberInput maxW={90} marginTop={2} marginLeft={50} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mx-2 mt-4'>PPMB (cm)</h1>
                            <NumberInput maxW={90} marginTop={2} marginLeft={135} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mx-2 mt-4'>Pliegue tricipital (mm)</h1>
                            <NumberInput maxW={90} marginTop={2} marginLeft={56} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mx-2 mt-4'>Pliegue subescapular (mm)</h1>
                            <NumberInput maxW={90} marginTop={2} marginLeft={20} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


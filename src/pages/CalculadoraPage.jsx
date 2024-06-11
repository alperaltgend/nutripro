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
import 'dayjs/locale/es'; // Importa el idioma español de dayjs
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

dayjs.locale('es');


const CalculadoraPage = () => {

    const [value, setValue] = React.useState(dayjs('2024-04-17'));
    const [valuetask, setValuetask] = React.useState(dayjs('2024-04-17'));
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
        <div className="flex h-screen">
            <Sidebar></Sidebar>
            <div className='flex flex-row w-screen h-80'>
                <div>
                    <div className='mt-2 ml-5 p-3'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} locale="es">
                            <DatePicker
                                label="Fecha de Visita"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                className="w-40 h-14"
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='flex flex-col mt-12 ml-5 p-3 w-48 rounded-lg border border-blue-500'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} locale="es">
                            <DatePicker
                                label="Fecha de Nacimiento"
                                value={valuetask}
                                onChange={(newValuetask) => setValuetask(newValuetask)}
                                className="w-40 h-14"
                            />
                        </LocalizationProvider>
                        <FormGroup className='mt-2'>
                            <FormControlLabel value="fecha" control={<Checkbox />} label="Fecha aprox." />
                            <FormControlLabel value="end" control={<Checkbox />} label="Desconocida" />
                        </FormGroup>
                        <h1 className=''>Edad: 10</h1>
                        <h1 className='mt-2'>ICM: 10</h1>
                    </div>
                </div>
                <div className='flex flex-col mt-4 ml-10 w-80'>
                    <div className='flex flex-row justify-between'>
                        <FormControl >
                            <FormLabel id="demo-controlled-radio-buttons-group" >Género</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={valueradio1}
                                onChange={handleChange1}

                            >
                                <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl >
                            <FormLabel id="demo-controlled-radio-buttons-group" >Medido</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={valueradio2}
                                onChange={handleChange2}
                            >
                                <FormControlLabel value="female" control={<Radio size="small" />} label="Acostado" />
                                <FormControlLabel value="male" control={<Radio size="small" />} label="De Pie" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl >
                            <FormLabel id="demo-controlled-radio-buttons-group" >Edema</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={valueradio3}
                                onChange={handleChange3}
                            >
                                <FormControlLabel value="female" control={<Radio size="small" />} label="No" />
                                <FormControlLabel value="male" control={<Radio size="small" />} label="Si" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className='flex flex-col mt-1'>
                        <div className='flex items-start'>
                            <h1 className='mt-4'>Peso(Kg)</h1>
                            <NumberInput maxW={90} marginTop={2} marginLeft={155} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mt-4'>Longitud/Talla (cm)</h1>
                            <NumberInput maxW={90} marginLeft={80} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mt-4'>Perimetro cefálico (cm)</h1>
                            <NumberInput maxW={90} marginLeft={55} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mt-4'>PPMB (cm)</h1>
                            <NumberInput maxW={90} marginLeft={140} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mt-4'>Pliegue tricipital (mm)</h1>
                            <NumberInput maxW={90} marginLeft={62} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mt-4'>Pliegue subescapular (mm)</h1>
                            <NumberInput maxW={90} marginLeft={27} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.1} size={"lg"}>
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

export default CalculadoraPage;
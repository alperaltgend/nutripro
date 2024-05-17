import React, { useState } from 'react';
import dayjs from 'dayjs';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Sidebar from '../components/Sidebar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

export default function Calculadora() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

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
            <div class="grid grid-cols-3 gap-4 w-screen">
                <div className='col-span-3 flex my-10 mx-8'>
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
                            <FormLabel id="demo-controlled-radio-buttons-group" >Genero</FormLabel>
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
                                <FormControlLabel value="female" class="ml-2" control={<Radio />} label="Acostado" />
                                <FormControlLabel class="ml-1.5" value="male" control={<Radio />} label="De Pie" />
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
                            <NumberInput maxW={90} marginTop={2} marginLeft={85} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.2} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                        <div className='flex items-start'>
                            <h1 className='mx-2 mt-4'>Longitud/Talla (cm)</h1>
                            <NumberInput maxW={90} marginTop={2} marginLeft={10} paddingTop={15} focusBorderColor='gray.500' focusInputOnChange={true} defaultValue={15} precision={2} step={0.2} size={"lg"}>
                                <NumberInputField border={10} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper paddingTop={13} height={10} />
                                    <NumberDecrementStepper height={10} />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                    </div>

                </div>
                <div className='ml-10'>
                    02
                </div>
                <div className=''>
                    03
                </div>
                <div className=''>
                    03
                </div>
                <div className=''>
                    03
                </div>
                <div className=''>
                    03
                </div>

            </div>
        </div>
    );
}


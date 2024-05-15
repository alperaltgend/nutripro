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

export default function Calculadora() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    const [valueradio, setValueradio] = React.useState(" ");
    const handleChange = (event) => {
        setValueradio(event.target.value);
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
                    <div className='ml-10 mt-2'>
                    <FormControl class="flex items-center">
                        <FormLabel id="demo-controlled-radio-buttons-group" >Genero</FormLabel>
                        <RadioGroup
                            
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={valueradio}
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel value="female" class="mr-5" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
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


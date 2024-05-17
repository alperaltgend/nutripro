import React, { useState } from 'react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

export default function PruebaComp() {
    return (
        <NumberInput size='lg' maxW={182} fontSize={25} defaultValue={15} min={10}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper height={8}/>
                <NumberDecrementStepper height={8}/>
            </NumberInputStepper>
        </NumberInput>

    )
}


import React from "react";
import { Slider, Box } from '@material-ui/core';
import "./inputs.css"

const Age = () => {

    function valuetext(value: number) {
        return `${value}`;
    }

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 99,
            label: '99',
        },
    ];

    return (
        <Box m={2}>
            <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={0}
                max={99}
            />
        </Box>
    )
}

export default Age;
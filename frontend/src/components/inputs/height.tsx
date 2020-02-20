import React from "react";
import { Slider, Box } from '@material-ui/core';
import "./inputs.css"

const Height = () => {

    function valuetext(value: number) {
        return `${value}`;
    }

    const marks = [
        {
            value: 120,
            label: '1,2m',
        },
        {
            value: 180,
            label: '1,8m',
        },
        {
            value: 240,
            label: '2,4m',
        },
    ];

    return (
        <Box m={2}>
            <Slider
                defaultValue={170}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={120}
                max={250}
            />
        </Box>
    )
}

export default Height;
import React from "react";
import { Slider, Box } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../../redux/actions";

const Age = () => {
    const dispatch = useDispatch();
    const inputComponentTag = "age"

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: any, newValue: number | number[]) => {
        dispatch(addAnswer({ inputComponentTag, value: newValue as number }))
    };

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
                onChange={handleChange}
            />
        </Box>
    )
}

export default Age;